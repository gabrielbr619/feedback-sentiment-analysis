const express = require("express");
const feedbackRoutes = require("./routes/feedbackRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use("/api", feedbackRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;
