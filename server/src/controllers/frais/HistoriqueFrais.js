const db = require("../../config/Database");

const HistoriqueFrais = async (req, res)=> {
    

    try {
        const { UserId } = req.query;

        if(!UserId){
            return res.status(400).json({message: "Les donnees sont Manquantes "})
        }

        const [rows] = await db.promise()
        .query("SELECT p.id p.montant_paye, p.date_paiement, p.methode, p.statut, f.titre FROM paiements p INNER JOIN frais_scolaires f ON p.frais_id = f.id WHERE p.utilisateur_id = ? ",
            [UserId]
        );

        if(rows.length === 0){
            return res.status(401).json({message: "Aucun Frais Trouver pour cette Id Utilisateur"});
        }

        const DataHistorique = rows;

        res.status(200).json( DataHistorique );
    } catch (error) {
        console.error("L'erreur est survenue :", error);
        return res.status(500).json({message: "Erreur Serveur "});
    }
}

module.exports = HistoriqueFrais;