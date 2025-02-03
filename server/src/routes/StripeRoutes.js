const express = require("express");
const router = express.Router();
const createMobilePayment = require("../controllers/stripe/Stripe");


router.post("/payment", createMobilePayment);

module.exports = router;