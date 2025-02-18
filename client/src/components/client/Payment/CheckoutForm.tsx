import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

type Props = {
    frais: { id: number; titre: string; montant: string };
};

const CheckoutForm = ({ frais }: Props) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);

        const user = JSON.parse(localStorage.getItem("user") || "{}");
        const montantEntier = parseInt(frais.montant, 10);
        if (isNaN(montantEntier)) {
            alert("Montant invalide après conversion");
            setLoading(false);
            return;
        }

        const response = await fetch("https://school-payment-system.onrender.com/api/v3/PaymentStripe/payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                amount: montantEntier, 
                currency: "USD",
                description: frais.titre,
                id_user: user.id,
                id_frais: frais.id,
            }),
        });

        const { clientSecret } = await response.json();
        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
            alert("Veuillez entrer vos informations de carte.");
            setLoading(false);
            return;
        }

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: { card: cardElement },
        });

        setLoading(false);

        if (result.error) {
            alert(`Erreur de paiement : ${result.error.message}`);
        } else if (result.paymentIntent?.status === "succeeded") {
            alert("Paiement réussi !");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement className="border p-2 rounded-md" />
            <button
                type="submit"
                disabled={!stripe || loading}
                className="py-2 px-5 text-base font-medium rounded-lg bg-green-500 text-white hover:bg-green-700 mt-4"
            >
                {loading ? "Paiement en cours..." : "Payer"}
            </button>
        </form>
    );
};

export default CheckoutForm;
