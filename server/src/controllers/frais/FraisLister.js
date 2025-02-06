const { getIo } = require("../../config/Socket");
const db = require("../../config/Database");

let lastUpdate = new Date(0); 

const listerfrais = (req, res) => {
    const query = "SELECT * FROM frais_scolaires";

    db.query(query, (err, resultat) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Erreur lors de la récupération des frais" });
        }

        res.status(200).json(resultat);
    });
};

// Surveiller les nouvelles entrées et émettre les mises à jour en temps réel
const surveillerNouveauxFrais = () => {
    const query = "SELECT * FROM frais_scolaires WHERE date_creation > ?";

    db.query(query, [lastUpdate], (err, nouveauxFrais) => {
        if (err) {
            return console.error("Erreur lors de la surveillance des nouveaux frais : ", err);
        }

        if (nouveauxFrais.length > 0) {
            // Envoyer les nouvelles entrées via Socket.IO
            const io = getIo();
            io.emit("fraisMisAJour", nouveauxFrais);

            // Mettre à jour la date de dernière vérification
            lastUpdate = new Date();
        }
    });
};

// Vérifier les nouveaux frais toutes les 5 secondes
setInterval(surveillerNouveauxFrais, 5000);

module.exports = listerfrais;