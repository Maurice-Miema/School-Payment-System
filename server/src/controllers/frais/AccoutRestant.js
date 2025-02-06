const db = require("../../config/Database");

const AccoutRestant = async (req, res) => {
    const { UserId, PromotionUser } = req.query;
    
    if(!UserId || !PromotionUser){
        return res.status(400).json({ message: "L'Id de User et la Promotion de User est Requis"});
    }

    try {
        // Pour recuperer les montant total de frais 
        const [MontantAPayer] = await db.promise().query(
            "SELECT montant FROM frais_scolaires WHERE TRIM(promotion) LIKE ?",
            [`%${PromotionUser}%`]
        );

        const MontantTotalFrais = MontantAPayer.length>0 ? MontantAPayer.reduce((total, row) => total + parseFloat(row.montant), 0) : 0;

        // Pour recuperer les montant total frais deja payer
        const [AccoutDJPayer] = await db.promise().query(
            "SELECT montant_paye FROM paiements WHERE utilisateur_id = ?",
            [UserId]
        );

        const Accoutpayer = AccoutDJPayer.length>0 ? AccoutDJPayer.reduce((total, row) => total + parseFloat(row.montant_paye), 0) : 0;

        const AccoutRestant = MontantTotalFrais - Accoutpayer;

        return res.status(200).json({AccoutRestant});
    } catch (error) {
        console.error("Erreur", error);
        return res.status(500).json({ message: "Erreur Serveur !"});
    }
}

module.exports = AccoutRestant;