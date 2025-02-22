const db = require("../../config/Database");

const FraisSoumis = async (req, res) => {
    try {
        const query = "SELECT * FROM frais_scolaires";
        const [rows] = await db.promise().query(query); 

        return res.status(200).json(rows);
    } catch (error) {
        console.error("Erreur :", error);
        return res.status(500).json({ message: "Erreur Serveur" });
    }
}

module.exports = FraisSoumis;
