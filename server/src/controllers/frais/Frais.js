const db = require("../../config/Database");


const FraisScolaire = async (req, res) => {
    const {titre, montant, date_debut, date_fin, promotion} = req.body;

    if(!titre || !montant || !date_debut || !date_fin || !promotion){
        return res.status(400).json({ message: "Tout les Champs sont obligatoire !" })
    }

    try {
        const [resultat] = await db 
        .promise()
        .query("INSERT INTO frais_scolaires(titre, montant, Date_debut, Date_fin, promotion ) VALUES( ?, ?, ?, ?, ?)",
            [titre, montant, date_debut, date_fin, promotion]
        );

        res.status(200).json({ message: "Enregistrement reussi"});
    } catch (error) {
        console.error("Erreur lors d'enregistrement de données ");.0
        res.status(500).json({ message: "Erreur interne du serveur"})
    }

}

module.exports = FraisScolaire;