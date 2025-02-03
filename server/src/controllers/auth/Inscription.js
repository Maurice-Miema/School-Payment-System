const bcrypt = require("bcrypt");
const db = require("../../config/Database");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// Inscription de l'utilisateur
const InscriptionUser = async (req, res) => {
  const { nom, postnom, prenom, numerotel, promotion, password } = req.body;

  // Vérification des champs obligatoires
  if (!nom || !postnom || !prenom || !numerotel || !promotion || !password) {
    return res.status(400).json({ message: "Tous les champs sont obligatoires." });
  }

  try {
    // Vérifier si l'utilisateur existe déjà
    const [rows] = await db
      .promise()
      .query(
        "SELECT * FROM utilisateurs WHERE nom = ? AND postnom = ? AND prenom = ?",
        [nom, postnom, prenom]
      );

    if (rows.length > 0) {
      return res.status(409).json({ message: "L'utilisateur existe déjà." });
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insérer dans la base de données
    const [insertResult] = await db
      .promise()
      .query(
        "INSERT INTO utilisateurs (nom, postnom, prenom, numerotelephone, promotion, mot_de_passe) VALUES (?, ?, ?, ?, ?, ?)",
        [nom, postnom, prenom, numerotel, promotion, hashedPassword]
      );

    const userId = insertResult.insertId;

    // Générer le token JWT
    const token = jwt.sign(
      { id: userId, nom, prenom }, 
      process.env.JWT_SECRET, 
      { expiresIn: "24h" }
    );

    // Réponse en cas de succès
    res.status(201).json({
      message: "Utilisateur inscrit avec succès.",
      token,
      user: {
        id: userId,
        nom,
        postnom,
        prenom,
        numerotel,
        promotion,
      },
    });
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    res.status(500).json({ message: "Erreur interne du serveur." });
  }
};

module.exports = InscriptionUser;
