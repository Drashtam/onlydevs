const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/User"); // ✅ Import User Model
const router = express.Router();

// ✅ Protected Route - Get User Profile
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    console.log("Authenticated User:", req.user); // Debugging
    const user = await User.findById(req.user.id).select("-password"); // Exclude password
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "Access granted!", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Get all users (Admin only)
router.get("/", authMiddleware, async (req, res) => {
  try {
    console.log("Authenticated User:", req.user); // Debugging
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied! Admins only." });
    }

    const users = await User.find().select("-password"); // Exclude passwords
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;