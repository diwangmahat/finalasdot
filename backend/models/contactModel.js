const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please enter your full name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email address"],
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please enter your phone number"],
    unique: true,
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
