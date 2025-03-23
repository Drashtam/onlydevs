const express = require("express");
const authMiddleware = require("../middleware/authMiddleware"); // ✅ Import middleware
const { registerUser, loginUser } = require("../controllers/authController"); // ✅ Ensure these functions exist

const router = express.Router();

router.post("/register", registerUser); // ✅ Ensure these are defined in authController.js
router.post("/login", loginUser);

// ✅ Logout Route
router.post("/logout", authMiddleware, (req, res) => {
    res.status(200).json({ message: "Logged out successfully!" });
  });

module.exports = router; // ✅ Correctly export the router