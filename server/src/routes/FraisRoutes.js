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
const gestionEleves = require("../controllers/frais/Gestion_Payment/GestionEleve");
const DeleteFrais = require("../controllers/frais/DeleteFrais");
const UpdateFrais = require("../controllers/frais/UpdateFrais");
const TotalFraisAdmin = require("../controllers/frais/TotalFraisAdmin/TotalFrais");
const MontantPayerAdmin = require("../controllers/frais/TotalFraisAdmin/MontantPayer");
const MontantRestantAdmin = require("../controllers/frais/TotalFraisAdmin/MontantRestant");

router.post("/datafrais", FraisScolaire);
router.get("/listerfrais", listerfrais);
router.get("/TotalFrais", GetTotalFrais);
router.get("/FraisPayerTotal", AccoutPayer);
router.get("/AccoutRestant", AccoutRestant);
router.get("/HistoriqueFrais", HistoriqueFrais); // pour recuperer l'historique de frais payer cote eleve
router.get("/FraisSoumisAdmin", FraisSoumis); // pour recuperer frais soumis cote admin 
router.get("/GestionPayment", GestionPaiement); // pour recuperer tout le payment 
router.get("/gestionEleves", gestionEleves); // pour recuperer tout les eleve inscrit
router.delete("/DeleteFrais", DeleteFrais); // pour supprimer le frais de la base de donnee !!
router.put("/PutFrais", UpdateFrais); // pour mettre a jour le frais !
router.get("/TotalFraisdmin", TotalFraisAdmin);
router.get("/MontantPayerAdmin", MontantPayerAdmin);
router.get("/MontantRestantAdmin", MontantRestantAdmin);

module.exports = router;
