const express = require("express");
const router = express.Router();
const InscriptionUser = require("../controllers/auth/Inscription");
const Renewtoken = require("../controllers/token/Refreshtoken");
const ConnexionUser = require("../controllers/auth/connexion");

// POUR LES ROUTES
router.post("/inscription", InscriptionUser);// Route pour inscrire un utilisateur
router.post("/connexion", ConnexionUser); // Route pour la connexion de l'utiilisateur
router.post("/refreshtoken", Renewtoken);// Route pour renouveler le token

module.exports = router;
