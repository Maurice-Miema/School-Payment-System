const dotenv = require("dotenv");
const Stripe = require("stripe");
dotenv.config();

// Configuration de CinetPay
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;


// Fonction pour créer un paiement mobile
const createMobilePayment = async (req, res) => {
    const { amount, currency, description, id_user, id_frais } = req.body;

    if (!amount || !currency || !description || !id_user || !id_frais) {
        return res.status(400).json({ message: "Les données sont manquantes" });
    }

    try {
        // Préparer les données de la requête
        const stripe = new Stripe(STRIPE_SECRET_KEY)
        const paymentData = {
            amount : amount,
            currency: currency,
        };

        const PaymentIntent = await stripe.paymentIntents.create({paymentData})
    
        // Retourner une réponse JSON au client
        return res.status(200).json({
            message: "Le paiement a été créé avec succès",
            cleintSecrete: PaymentIntent.client_secret
        });
        
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
