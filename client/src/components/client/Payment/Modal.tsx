type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    frais: { id: number; titre: string; montant: string } | null;
};

function Modal({ isOpen, onClose, frais }: ModalProps) {

    if (!isOpen) return null;
    // if (!onClose) return null;

    const cinetpayinit = async (frais: { id: number; montant: string; titre: string }) => {
        const getUser = localStorage.getItem("user");
        const user = getUser ? JSON.parse(getUser) : null;
        if (!frais || !frais.montant) {
            alert("Montant invalide");
            return;
        }

         // Convertir le montant en entier
        const montantEntier = parseInt(frais.montant, 10); // Conversion en entier base 10
        if (isNaN(montantEntier)) {
            alert("Montant invalide après conversion");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/v3/datacinetpay/payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: montantEntier, 
                    currency: 'CDF',
                    description: frais.titre,
                    // info user
                    id_user: user.id,
                    id_frais: frais.id,
                }),
            });
            if (response.ok) {
                const resultat = await response.json();
                console.log("le resultat de l'api :", resultat);
    
                // Vérifiez si le payment_url est dans la réponse
                if (resultat.payment_url) {
                    const redirection = resultat.payment_url;
                    window.location.href = redirection;
                } else {
                    alert("Impossible de récupérer l'URL de paiement (Aucune URL trouvée dans la réponse)");
                }
            } else {
                // Gérer les erreurs de réponse côté serveur (ex: 500, 404, etc.)
                console.error("Erreur de serveur :", response.status, response.statusText);
                alert("Erreur lors de la création du paiement");
            }
        }catch (error) {
            console.log("Erreur lors de l'initialisation du paiement :", error);
            alert("Échec de l'initialisation du paiement");
        }
    };

    return (
        <div className="absolute inset-0 bg-black bg-opacity-80">
        <div className="flex justify-center items-center h-full">
            <div className="py-2 duration-200 font-Roboto ease-in-out transition-all bg-white rounded-lg w-11/12 md:w-7/12 lg:w-4/12">
            <div className="flex justify-between items-center py-3 px-4 border-b">
                <h1 className="font-bold text-gray-800">Paiement</h1>
                <button
                    type="button"
                    onClick={onClose}
                    className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none  "
                >
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                    </svg>
                </button>
            </div>
            <div className="p-4">
                <h1 className="text-lg pb-2">
                    Paiement pour :{" "}
                    <span className="ml-2 font-semibold">
                        {frais?.titre || "Non spécifié"}
                    </span>
                </h1>
                <h1 className="text-lg">
                    Montant à Payer :{" "}
                    <span className="ml-2 font-semibold">
                        {frais?.montant || "0"} FC
                    </span>
                </h1>
            </div>
            <div className="flex justify-end items-center gap-x-2 pt-2 px-4 border-t">
                <button
                    type="button"
                    onClick={onClose}
                    className="py-2 px-3 text-sm font-medium rounded-lg bg-white text-gray-800 hover:bg-gray-50"
                >
                    Close
                </button>
                <button
                    type="button"
                    disabled={!frais}
                    onClick={() => frais && cinetpayinit(frais)}
                    className="py-2 px-5 text-base font-medium rounded-lg bg-green-500 text-white hover:bg-green-700"
                >
                    Payer
                </button>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Modal;
