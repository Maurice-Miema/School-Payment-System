const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

// Vérification de la connexion à la base de données
db.getConnection((err) => {
    if (err) {
        console.error("Erreur de connexion à la base de données :", err.message);
        process.exit(1); 
    }
    console.log("Connexion réussie à la base de données !");
});

module.exports = db;