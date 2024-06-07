// server.js

const express = require("express");
const authRoutes = require("./routes/authRoutes");
const app = express();

// Middleware
app.use(express.json());
// require('dotenv').config();
//App Home
app.get("/api/v1/", (req, res) => {
  res.send("Hello World!");
});

// Routes
app.use("/api/v1/auth", authRoutes);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
