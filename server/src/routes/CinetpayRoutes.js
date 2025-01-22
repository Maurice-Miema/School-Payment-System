const express = require("express");
const router = express.Router();
const createMobilePayment = require("../controllers/cinetpay/cinetpay");


router.post("/payment", createMobilePayment);

module.exports = router;

