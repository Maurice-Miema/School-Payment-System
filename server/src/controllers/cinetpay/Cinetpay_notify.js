app.post('/payment-notify', async (req, res) => {
    const { transaction_id, status } = req.body;

    try {
        // Vérifiez et enregistrez le statut du paiement dans la base de données
        console.log(`Notification reçue : Transaction ${transaction_id}, Statut : ${status}`);
        if (status === 'SUCCESS') {
            // Mettre à jour la base de données pour refléter le paiement réussi
        }
        res.status(200).send('OK'); // Confirmez la réception à CinetPay
    } catch (error) {
        console.error('Erreur lors de la notification du paiement :', error.message);
        res.status(500).send('Erreur interne');
    }
});
