const bcrypt = require("bcrypt");
const db = require("../../config/Database");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// Inscription de l'utilisateur
const InscriptionUser = async (req, res) => {
  const { nom, postnom, prenom, numerotel, promotion, password } = req.body;

  // validation
  if (!nom || !postnom || !prenom || !numerotel || !promotion || !password) {
    return res.status(400).json({ message: " Tous les champs son obligatoires" });
  }

  try {
    // verifier si le user existe deja
    const [rows, fields] = await db
    .promise()
    .query(
      "SELECT * FROM utilisateurs WHERE nom = ? AND postnom = ? AND prenom = ?",
      [nom, postnom, prenom]
    );
    
    if (rows.length > 0) {
      return res.status(400).json({ message: "L'utiliateur existe deja ." });
    }

    // Crypter le password
    const hashedPassword = await bcrypt.hash(password, 10);

    // enregistrer a la base de données
    const [inserResultat] = await db
      .promise()
      .query(
        "INSERT INTO utilisateurs (nom, postnom, prenom, numerotelephone, promotion, mot_de_passe) VALUES (?, ?, ?, ?, ?, ?)",
        [nom, postnom, prenom, numerotel, promotion, hashedPassword]
      );

    const userId = inserResultat.insertId;

    // generer le token
    const token = jwt.sign(
      { id: userId, nom, prenom }, 
      process.env.JWT_SECRET, 
      {expiresIn: "24h",}
    );
    // Réponse en cas de succès
    res.status(201).json({
      message: "Utilisateur inscrit avec succès.",
      token: token,
      user: {
        id: userId,
        nom: nom,
        postnom: postnom,
        prenom: prenom,
        numerotel: numerotel,
        promotion: promotion,
        role: user.role
      },
    });
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error.message);
    res.status(500).json({ message: "Erreur interne du serveur." });
  }
};

module.exports = InscriptionUser;
