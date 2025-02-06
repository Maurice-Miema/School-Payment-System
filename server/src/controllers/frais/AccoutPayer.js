const db = require("../../config/Database");

const AccoutPayer = async (req, res) => {
    
    try {
        const { UserId } = req.query;
    
        if(!UserId){
            return res.status(400).json({ message: "Les donnees sont manquantes"});
        }

        const [rows] = await db.promise().query(
            "SELECT montant_paye FROM paiements WHERE utilisateur_id = ?",
            [UserId]
        );

        if(rows.length === 0){
            return res.status(401).json({ message:"Aucun paiement trouvé pour cet utilisateur."});
        };

        const TotalFraisPayer = rows.reduce((total, row) => total + parseFloat(row.montant_paye), 0); 
        const NumberFraisPayer = rows.length;

        return res.status(200).json({TotalFraisPayer, NumberFraisPayer});
    } catch (error) {
        console.error("erreur", error);
        return res.status(500).json({ message: "Erreur Serveur" });
    }

}

module.exports =  { AccoutPayer };