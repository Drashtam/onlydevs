const Inventory = require("../models/inventory");

const inventoryMiddleware = async (req, res, next) => {
  const itemId = req.params.id;

  if (!itemId) {
    return res.status(400).json({ message: "Item ID is required" });
  }

  try {
    const item = await Inventory.findById(itemId);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    if (item.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Access denied" });
    }

    req.item = item;
    next();
  } catch (err) {
    console.error("Error finding item:", err.message);
    return res.status(500).json({ message: "Error finding item" });
  }
};

module.exports = inventoryMiddleware;
