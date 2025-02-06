const express = require("express");
const router = express.Router();
const FraisScolaire = require("../controllers/frais/Frais")
const listerfrais = require("../controllers/frais/FraisLister");
const GetTotalFrais = require("../controllers/frais/FraisTotal");
const { AccoutPayer } = require("../controllers/frais/AccoutPayer");
const AccoutRestant = require("../controllers/frais/AccoutRestant");

router.post("/datafrais", FraisScolaire);
router.get("/listerfrais", listerfrais);
router.get("/TotalFrais", GetTotalFrais);
router.get("/FraisPayerTotal", AccoutPayer);
router.get("/AccoutRestant", AccoutRestant);

module.exports = router;