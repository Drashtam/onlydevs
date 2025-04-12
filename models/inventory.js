const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
});

InventorySchema.statics.calculateTotalInventoryCost = async function() {
  const inventoryItems = await this.find();
  const totalCost = inventoryItems.reduce((total, item) => total + (item.quantity * item.price), 0);
  return { totalCost };
};

module.exports = mongoose.model("Inventory", InventorySchema);
