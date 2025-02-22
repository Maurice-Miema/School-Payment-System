const db = require("../../../config/Database");

const MontantRestantAdmin = async (req, res)=> {
    try {
        // Pour recuperer le montant total de frais admin
        const [MontantTotal] = await db.promise().query(
            "SELECT montant FROM frais_scolaires",
        );

        const AccoutTotalAdmin = MontantTotal.length>0 ? MontantTotal.reduce((total, row)=> total + parseFloat(row.montant), 0): 0;

        // Pour recuperer le montant a payer
        const [MontantPayer] = await db.promise().query(
            "SELECT montant_paye FROM paiements",
        );

        const AccoutPayerAdmin = MontantPayer.length>0 ? MontantPayer.reduce((total, row)=> total + parseFloat(row.montant_paye), 0): 0;

        const AccoutRestantAdmin = AccoutTotalAdmin - AccoutPayerAdmin;
        
        return res.status(200).json({AccoutRestantAdmin});
    } catch (error) {
        console.error("Erreur", error);
        return res.status(500).json("Erreur Serveur");
    }
}

module.exports = MontantRestantAdmin;