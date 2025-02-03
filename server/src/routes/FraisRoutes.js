const express = require("express");
const router = express.Router();
const FraisScolaire = require("../controllers/frais/Frais")
const listerfrais = require("../controllers/frais/FraisLister");
const GetTotalFrais = require("../controllers/frais/FraisTotal");


router.post("/datafrais", FraisScolaire);
router.get("/listerfrais", listerfrais);
router.get("/TotalFrais", GetTotalFrais);

module.exports = router;