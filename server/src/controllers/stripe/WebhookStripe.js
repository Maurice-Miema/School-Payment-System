const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const db = require("../../config/Database"); 

const WebhookStripe = async (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    try {
        console.log("Signature reçue :", sig);
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
        console.log("Événement reçu de Stripe :", event);
    } catch (err) {
        console.error("Webhook signature verification failed:", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Vérifier si le paiement a été complété
    if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        console.log("Paiement reçu !", session);

        // Récupérer les métadonnées envoyées lors de la création du paiement
        const id_user = session.metadata.id_user;
        const id_frais = session.metadata.id_frais;
        const amount = session.amount_total / 100; 
        const payment_method = session.payment_method_types[0]; 
        const statut = "complet";

        // Vérifier si une donnée est manquante
        if (!id_user || !id_frais || !amount || !payment_method) {
            return res.status(400).json({ message: "Les données sont manquantes !" });
        }

        try {
            // ✅ Sauvegarde dans MySQL
            const [result] = await db
                .promise()
                .query(
                    "INSERT INTO paiements(utilisateur_id, frais_id, montant_paye, methode, statut) VALUES( ?, ?, ?, ?, ?)",
                    [id_user, id_frais, amount, payment_method, statut]
                );

            console.log("Paiement enregistré avec succès !");
        } catch (error) {
            console.error("Erreur lors de l'enregistrement du paiement:", error);
            return res.status(500).send("Erreur serveur lors de l'enregistrement.");
        }
    }

    res.status(200).send("Webhook reçu !");
};

module.exports = WebhookStripe;
