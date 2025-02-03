const db = require("../../config/Database");

const GetTotalFrais = async (req, res)=> {

    try {
        const { promotionUser } = req.query;

        if(!promotionUser){
            return res.status(400).json({ message: "les donnees sont manquates "});
        }

        // Recuperer le montant de frais partant de la promotion de user connecté
        const [rows] = await db.promise().query(
            "SELECT montant FROM frais_scolaires WHERE TRIM(promotion) LIKE ?",
            [`%${promotionUser}%`]
        );

        if(rows.length === 0){
            return res.status(404).json({ message: "Aucun frais trouvé pour cette promotion" });
        }

        const totalfrais = rows.reduce((total, row) => total + parseFloat(row.montant), 0);

        return res.status(200).json({ totalfrais });
    } catch (error) {
        console.error("Erreur lors de la récupération des frais :", error);
        return res.status(500).json({ message: "Erreur serveur"});
    }
}

module.exports = GetTotalFrais;