const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const Inventory = require("../models/inventory"); // ✅ Import Inventory Model
const router = express.Router();

// ✅ Add Inventory Item (Protected)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, quantity, price } = req.body;

    if (!name || !quantity || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newItem = new Inventory({
      name,
      quantity,
      price,
      user: req.user.id, // Assign user ID from token
    });

    await newItem.save();
    res.status(201).json({ message: "Item added successfully!", newItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while adding the item." });
  }
});

// ✅ Get All Inventory Items
router.get("/", authMiddleware, async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while retrieving inventory." });
  }
});

// Get a specific item by ID
router.get("/:id", async (req, res) => {
  try {
    const item = await Inventory.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving the item: " + error.message });
  }
});

// ✅ Update Inventory Item (Protected)
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { name, quantity, price } = req.body;
    const { id } = req.params;

    // Validate the provided data
    if (!name || !quantity || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const updatedItem = await Inventory.findByIdAndUpdate(
      id,
      { name, quantity, price },
      { new: true } // Return updated item
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json({ message: "Item updated successfully!", updatedItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating the item." });
  }
});

// ✅ Delete Inventory Item 
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Inventory.findById(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    await Inventory.findByIdAndDelete(id);
    res.json({ message: "Item deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting the item." });
  }
});
module.exports = router;