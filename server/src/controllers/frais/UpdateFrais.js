const db = require("../../config/Database");

const UpdateFrais = async (req, res)=> {
    const {id, titre, montant, date_debut, date_fin, promotion} = req.body;

    if(!id || !titre || !montant || !date_debut || !date_fin || !promotion){
        return res.status(400).json({ message: "Tout les Champs sont obligatoire !"});
    }

    try {
        const [resultat] = await db.promise().query(
            "UPDATE frais_scolaires SET titre = ?, montant = ?, Date_debut = ?, Date_fin = ?, promotion = ? WHERE id = ?",
            [titre, montant, date_debut, date_fin, promotion, id]
        );

        if (resultat.affectedRows === 0) {
            return res.status(404).json({ message: "Frais non trouvé." });
        }

        res.status(200).json({ message: "Frais mis à jour avec succès." });
    } catch (error) {
        console.error("Erreur lors de la mise à jour :", error);
        res.status(500).json({ message: "Erreur serveur." });
    }
}

module.exports = UpdateFrais;