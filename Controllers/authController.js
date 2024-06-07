// controllers/authController.js

const Doctor = require("../db/models/Doctor");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.doctorLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const doctor = await Doctor.findOne({ where: { username } });

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    const isMatch = await bcrypt.compare(password, doctor.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ doctorId: doctor.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.doctorRegister = async (req, res) => {
  try {
    const { username, password } = req.body;

    let doctor = await Doctor.findOne({ where: { username } });

    if (doctor) {
      return res.status(400).json({ message: "Doctor already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    doctor = await Doctor.create({ username, password: hashedPassword });

    res.status(201).json({ message: "Doctor registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
