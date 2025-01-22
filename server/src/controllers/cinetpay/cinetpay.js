const axios = require('axios');
const dotenv = require("dotenv");
dotenv.config();

// Configuration de CinetPay
const CINETPAY_API_KEY = process.env.CINETPAY_API_KEY;
const CINETPAY_SITE_ID = process.env.CINETPAY_SITE_ID; 
const CINETPAY_NOTIFY_URL = process.env.CINETPAY_NOTIFY_URL;
const CINETPAY_RETURN_URL = process.env.CINETPAY_RETURN_URL;


// Fonction pour créer un paiement mobile
const createMobilePayment = async (req, res) => {
    const { amount, currency, description, id_user, id_frais } = req.body;

    if (!amount || !currency || !description || !id_user || !id_frais) {
        return res.status(400).json({ message: "Les données sont manquantes" });
    }

    try {
        // Génération d'un ID de transaction unique
        const transactionId = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

        // Préparer les données de la requête
        const paymentData = {
            apikey: CINETPAY_API_KEY,
            site_id: CINETPAY_SITE_ID,
            amount : amount,
            currency: currency,
            channels: 'MOBILE_MONEY',
            mode: 'PRODUCTION',
            transaction_id: transactionId,
            description: description,
            notify_url: CINETPAY_NOTIFY_URL,
            return_url: CINETPAY_RETURN_URL,
        };
    
        // Effectuer la requête à l'API de CinetPay
        const response = await axios.post('https://api-checkout.cinetpay.com/v2/payment', paymentData);
    
        if (response.status === 200) {
            console.log("Résultat:", response.data);
            const payment_url = response.data.data.payment_url;
    
            // Retourner une réponse JSON au client
            return res.status(200).json({
                message: "Le paiement a été créé avec succès",
                payment_url
            });
        } else {
            return res.status(400).json({
                message: "La création du paiement a échoué",
                error: response.data,
            });
        }
    } catch (error) {
        console.log("Erreur lors de la création du paiement:", error.response?.data || error.message);
    
        // Retourner une erreur interne du serveur
        return res.status(500).json({
            message: 'Erreur interne du serveur',
            error: error.response?.data || error.message,
        });
    }
    
};

module.exports = createMobilePayment;
