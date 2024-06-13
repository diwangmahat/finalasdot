const express = require("express");

const bodyParser = require("body-parser");

// Importing Routes
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(bodyParser.json());

app.use(express.json());

app.use("/api/users", userRoutes);

module.exports = app;
