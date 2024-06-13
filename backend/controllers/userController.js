const nodemailer = require("nodemailer");
const User = require("../models/subscribeMode");
const Messaging = require("../models/contactModel");
require("dotenv").config();

/*
    @desc Take email from user and send a thank you email
    @route POST /api/user/sendMail
    @access Public
*/
const subscribe = async (req, res) => {
  const { email } = req.body;
  try {
    // checking if mail is correct or not
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    // checking if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: "Failed",
        message: "User with the email alreadt exists",
      });
    }

    // creating new user in database
    const user = new User({ email });
    await user.save();
    console.log("New user created: ", user);

    // Sending email to user
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Subscribing",
      text: `\n\nThank you for subscribing to our mailing list! We're excited to have you with us.\n\nBest regards,\nAsdot Agency`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email send:" + info.response);
      }
    });

    res.status(200).json({
      status: "Success",
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "Failed",
      message: "Error in registration",
      error: error.message,
    });
  }
};

/*
  @desc Taking message from users
  @router POST /api/user/sendMessage
  @access public
*/
const sendMessage = async (req, res) => {
  try {
    const { fullName, email, message, phoneNumber } = req.body;

    // checking if full name is empty or not
    if (!fullName) {
      return res.status(400).json({
        status: "Failed",
        message: "Please enter your full name",
      });
    }

    // checking if email is valid or not
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    // checking if phone number field is empty or not
    if (!phoneNumber) {
      return res.status(400).json({
        status: "Failed",
        message: "Please enter your phone number",
      });
    }

    const existingUser = await Messaging.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: "Failed",
        message: "User with the same email already exists",
      });
    }

    // creating new user with their custom message in the database
    const newUser = new Messaging({ fullName, email, message, phoneNumber });

    // saving in the database
    await newUser.save();

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Contacting",
      text: `\n\nThank you for contacting us! We're excited to have you with us.\n\nBest regards,\nAsdot Agency`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email send:" + info.response);
      }
    });

    res.status(200).json({
      status: "Success",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Failed",
      message: "Error occured",
      error: error.message,
    });
  }
};

module.exports = { subscribe, sendMessage };