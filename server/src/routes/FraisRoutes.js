/** @format */

const express = require("express");
const router = express.Router();
const FraisScolaire = require("../controllers/frais/Frais");
const listerfrais = require("../controllers/frais/FraisLister");
const GetTotalFrais = require("../controllers/frais/FraisTotal");
const { AccoutPayer } = require("../controllers/frais/AccoutPayer");
const AccoutRestant = require("../controllers/frais/AccoutRestant");
const HistoriqueFrais = require("../controllers/frais/HistoriqueFrais");
const FraisSoumis = require("../controllers/frais/FraisSoumis");
const GestionPaiement = require("../controllers/frais/Gestion_Payment/GestionPaiement");
const GestionEleves = require("../controllers/frais/Gestion_Payment/GestionEleve");

router.post("/datafrais", FraisScolaire);
router.get("/listerfrais", listerfrais);
router.get("/TotalFrais", GetTotalFrais);
router.get("/FraisPayerTotal", AccoutPayer);
router.get("/AccoutRestant", AccoutRestant);
router.get("/HistoriqueFrais", HistoriqueFrais);
router.get("/FraisSoumisAdmin", FraisSoumis);
router.get("/GestionPayment", GestionPaiement);
router.get("/GestionEleves", GestionEleves);
module.exports = router;
