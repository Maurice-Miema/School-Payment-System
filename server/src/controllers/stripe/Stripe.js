const dotenv = require("dotenv");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
dotenv.config();


// Fonction pour créer un paiement mobile
const createMobilePayment = async (req, res) => {
    try {
        const { amount, currency, description, id_user, id_frais } = req.body;

        // Vérification des données reçues
        if (!amount || !currency || !description || !id_user || !id_frais) {
            return res.status(400).json({ error: "Données manquantes" });
        }

        // Création d'une session Stripe Checkout
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: currency,
                        product_data: {
                            name: description,
                        },
                        unit_amount: amount, 
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            metadata: {
                id_user: id_user,
                id_frais: id_frais,
            },
            success_url: `http://localhost:5173/Home/StripeSuccess?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: "http://localhost:5173/Home/StripeCancel",
        });

        console.log("Session Stripe créée :", session);

        res.json({ url: session.url });

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
