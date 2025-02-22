const db = require("../../../config/Database");

const TotalFraisAdmin = async (req, res)=> {
    try {
        const [resultat] = await db.promise().query(
            "SELECT montant FROM frais_scolaires",
        );

        if(resultat.length === 0){
            return res.status(404).json({message: "Aucun Frais Payer"});
        }

        const MontantPayer = resultat.reduce((total, row)=> total + parseFloat(row.montant), 0);
        const NombreFrais = resultat.length;
        return res.status(200).json({MontantPayer, NombreFrais});
    } catch (error) {
        console.error("Erreur", error);
        return res.status(500).json({message : "Erreur Serveur"});
    }
}

module.exports = TotalFraisAdmin;