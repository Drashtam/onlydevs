const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const Inventory = require("../models/Inventory"); // ✅ Import Inventory Model
const router = express.Router();

// ✅ Add Inventory Item (Protected)
router.post("/", authMiddleware, async (req, res) => {
    try {
      const { name, quantity, price } = req.body;
  
      const newItem = new Inventory({
        name,
        quantity,
        price,
        user: req.user.id, // Assign user ID from token
      });
  
      await newItem.save();
      res.status(201).json({ message: "Item added successfully!", newItem });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

// ✅ Get All Inventory Items
router.get("/", authMiddleware, async (req, res) => {
    try {
      const inventory = await Inventory.find();
      res.json(inventory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
// ✅ Update Inventory Item (Protected)
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { name, quantity, price } = req.body;
    const { id } = req.params;

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
    res.status(500).json({ error: error.message });
  }
});

// ✅ Delete Inventory Item (Admin Only)
router.delete("/inventory/:id", authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied!" });
    }

    const item = await Inventory.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    await Inventory.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;