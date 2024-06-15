const express = require("express");

const bodyParser = require("body-parser");

// Importing Routes
const userRoutes = require("./routes/userRoutes");

const app = express();

const cors = require('cors');
app.use(cors({
  origin: 'https://asdot.com.au',
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}));


app.use(bodyParser.json());

app.use(express.json());

app.use("/api/users", userRoutes);

module.exports = app;
