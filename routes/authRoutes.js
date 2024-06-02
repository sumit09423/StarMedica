// routes/authRoutes.js

const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authController"); // Update the path

router.post("/login", authController.doctorLogin);
router.post("/register", authController.doctorRegister);

module.exports = router;
