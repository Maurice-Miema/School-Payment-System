const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

const Newtoken = async (req, res) => {
    const { token, iduser } = req.body;

    if (!token || !iduser) {
        return res.status(400).json({ message: "Token requis" });
    }

    try {
        // Vérification du token existant
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Créer un nouveau token
        const newToken = jwt.sign(
        { id: decoded.id, nom: decoded.nom, prenom: decoded.prenom },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
        );

        res.status(200).json({ message: "Token renouvelé avec succès :", token: newToken });
    } catch (error) {
        console.error("Erreur lors du renouvellement du token :", error.message);
        res.status(500).json({ message: "Token invalide ou expiré." });
    }
};

module.exports = Newtoken;
