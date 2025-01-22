const express = require("express");
const router = express.Router();
const FraisScolaire = require("../controllers/frais/Frais")
const listerfrais = require("../controllers/frais/FraisLister");

router.post("/datafrais", FraisScolaire);
router.get("/listerfrais", listerfrais);

module.exports = router;