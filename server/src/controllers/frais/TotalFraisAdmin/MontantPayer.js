const db = require("../../../config/Database");

const MontantPayerAdmin = async (req, res)=> {
    try {
        const [resultat] = await db.promise().query(
            "SELECT montant_paye FROM paiements",
        );
        if(resultat.length === 0){
            return res.status(404).json({message: "Aucun Frais Payer"});
        }

        const AccoutPayer = resultat.reduce((total, row)=> total + parseFloat(row.montant_paye), 0);
        const NbreFraisPayer = resultat.length;

        return res.status(200).json({AccoutPayer, NbreFraisPayer});
    } catch (error) {
        console.error("Erreur", error);
        return res.status(500).json({message : "Erreur Serveur fichier montant payer"});
    }
}

module.exports = MontantPayerAdmin;