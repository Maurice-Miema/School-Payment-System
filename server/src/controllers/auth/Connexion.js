const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const db = require("../../config/Database");

dotenv.config();

const ConnexionUser = async (req, res) => {
    console.log("les données :", req, res);
    const { nom, postnom, prenom, password } = req.body;

    if(!nom || !postnom || !prenom || !password){
        return res.status({ message: "les connées requis"});
    }

    try {
        // verifier l'utilisateur dans la database
        const [rows] = await db
        .promise()
        .query(
            "SELECT * FROM utilisateurs WHERE nom = ? AND postnom = ? AND prenom = ?",
            [nom, postnom, prenom,]
        );
        if(rows.length === 0){
            return res.status(404).json({ message: "Utilisateur non trouver"});
        }

        const user = rows[0];
        const match = await bcrypt.compare(password, user.mot_de_passe);

        if(!match){
            return res.status(400).json({ message: "Mot de passe incorrect !" });
        }

        const token = jwt.sign(
            { id: user.id, nom: user.nom, postnom: user.postnom, prenom: user.prenom},
            process.env.JWT_SECRET,
            { expiresIn: "24h"}
        );

        res.status(200).json({
            message: "connexion réussie. ",
            token: token,
            user:{
                nom: user.nom,
                postnom: user.postnom,
                prenom: user.prenom,
                numerotel: user.numerotelephone ,
                promotion: user.promotion
            }
        })
    } catch (error) {
        console.error("Erreur lors de la connexion !", error.message);
        res.status(500).json({ message: "Erreur interne du serveur."});
    }

}

module.exports = ConnexionUser;