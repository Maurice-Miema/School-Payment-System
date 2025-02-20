/** @format */

const db = require("../../config/Database");

const DeleteFrais = async (req, res) => {
    try {
        const { FraisId } = req.body;

        if (!FraisId) {
        return res.status(400).json({ message: "Il manque l'ID du frais." });
        }

        const query = "DELETE FROM frais_scolaires WHERE id = ?";
        const [resultat] = await db.promise().query(query, [FraisId]);

        if (resultat.affectedRows === 0) {
        return res.status(404).json({ message: "Frais non trouvé." });
        }

        res.status(200).json({ message: "Le frais supprimé avec succès !" });
    } catch (error) {
        console.error("Erreur :", error);
        return res.status(500).json({ message: "Erreur serveur." });
    }
};

module.exports = DeleteFrais;
