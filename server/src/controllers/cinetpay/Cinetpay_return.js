app.get('/payment-return', (req, res) => {
    const { transaction_id, status } = req.query; // Extraction des données de la requête

    console.log(`Retour utilisateur : Transaction ${transaction_id}, Statut : ${status}`);

    // Redirection vers le front-end avec les données nécessaires
    res.redirect(`http://localhost:3000/payment-result?status=${status}&transaction_id=${transaction_id}`);
});
