const express = require("express");
const router = express.Router();
const createMobilePayment = require("../controllers/stripe/Stripe");
const WebhookStripe = require("../controllers/stripe/WebhookStripe");


router.post("/payment", createMobilePayment);
router.post("/stripewebhook", WebhookStripe);

module.exports = router;