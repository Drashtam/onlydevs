const Inventory = require("../models/inventory");

const inventoryMiddleware = (req, res, next) => {
  const itemId = req.params.id; // Get item ID from URL parameters

  if (!id) {
    return res.status(400).json({ message: "Item ID is required" });
  }

  Inventory.findById(id, (err, item) => {
    if (err) {
      console.error("Error finding item:", err.message);
      return res.status(500).json({ message: "Error finding item" });
    }

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    req.item = item; // Attach the item to the request object
    next();
  });
};

module.exports = inventoryMiddleware;