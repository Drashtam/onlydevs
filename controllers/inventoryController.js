const Inventory = require("@/models/Inventory");

exports.createItem = async (req, res) => {
  const { name, quantity, price } = req.body;
  if (!name || quantity == null || price == null) {
    return res.status(400).json({ error: "Name, quantity, and price are required" });
  }
  
  try {
    const newItem = new Inventory({ ...req.body, user: req.user._id });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Inventory.find({ user: req.user._id });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getItem = async (req, res) => {
  try {
    const item = await Inventory.findById(req.params.id);
    if (!item || item.user.toString() !== req.user._id) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const item = await Inventory.findById(req.params.id);
    if (!item || item.user.toString() !== req.user._id) return res.status(404).json({ message: "Item not found" });

    const updatedItem = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteItem = async (req, res) => {
  const { _id } = req.params;
  try {
    const item = await Inventory.findById(_id);
    if (!item || item.user.toString() !== req.user._id) return res.status(404).json({ message: "Item not found" });

    await Inventory.findByIdAndDelete(_id);
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error occurred while deleting the item: " + error.message });
  }
};

exports.getTotalInventoryCost = async (req, res) => {
  try {
    const { totalCost } = await Inventory.calculateTotalInventoryCost();
    res.json({ totalCost });
  } catch (error) {
    console.error("Error calculating total inventory cost:", error);
    res.status(500).json({ error: "Failed to calculate total inventory cost" });
  }
};