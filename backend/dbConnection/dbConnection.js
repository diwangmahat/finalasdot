const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL;

exports.connect = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(DB_URL)
    .then((res) =>
      console.log(
        `Database is connectedon ${res.connection.host}: ${res.connection.port}`
      )
    )
    .catch((error) => {
      console.log(error);
      process.exit(1);
    });
};
