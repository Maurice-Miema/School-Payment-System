const db = require("../../../config/Database");

const GestionPaiement = async (req, res) => {
    try {
        const query = `
                SELECT 
                    u.nom, 
                    u.postnom, 
                    u.prenom, 
                    u.promotion, 
                    f.titre AS frais_titre, 
                    p.montant_paye
                FROM paiements p
                JOIN utilisateurs u ON p.utilisateur_id = u.id
                JOIN frais_scolaires f ON p.frais_id = f.id;
                `;
        const [rows] = await db.promise().query(query);

        return res.status(200).json(rows);
    } catch (error) {
        console.error("Erreur :", error);
        return res.status(500).json({ message: "Erreur Serveur !!" });
    }
};

module.exports = GestionPaiement;
