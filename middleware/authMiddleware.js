const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  console.log("Request Headers:", req.headers); // Log headers
  const token = req.header("Authorization")?.split(" ")[1]; 

  console.log("Extracted Token:", token); // Log extracted token

  if (!token) {
    return res.status(401).json({ message: "Access Denied: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    console.log("Decoded Token:", decoded); // Log decoded token details
    req.user = decoded; 
    next();
  } catch (error) {
    console.error("Token Verification Error:", error.message); // Log token error
    res.status(403).json({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;