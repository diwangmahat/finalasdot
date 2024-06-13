const express = require("express");

const { subscribe, sendMessage } = require("../controllers/userController");
const cors = require("cors");

const router = express.Router();

router.use(cors());

router.post("/subscribe", subscribe);

router.post("/sendMessage", sendMessage);

module.exports = router;
