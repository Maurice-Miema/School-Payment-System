import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";
// import Modal from "./Modal";

type Datafrais = {
    id: number;
    titre: string,
    montant: string,
    Date_debut: string,
    Date_fin: string,
    promotion: string,
}

function ListFrais() {
    const [frais, setFrais] = useState<Datafrais[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedFrais, setSelectedFrais] = useState< Datafrais | null>(null); // Garde l'élément sélectionné

    useEffect(() => {
        const FetchData = async () => {
            try {
                const reponse = await fetch("http://localhost:3000/api/v2/datafrias/listerfrais");
                if (!reponse.ok) {
                    throw new Error("Problème de connexion à l'API");
                }
                const data = await reponse.json();
                setFrais(data);
                setLoading(false);
            } catch (error) {
                console.error("Erreur !", error);
            }
        };
    
        // Initialiser Socket.IO
        const socket = io("http://localhost:3000"); 
    
        // Écouter les mises à jour en temps réel
        socket.on("fraisMisAJour", (nouveauxFrais: Datafrais[]) => {
            console.log("Nouveaux frais reçus :", nouveauxFrais);
    
            setFrais((prevFrais) => [...prevFrais, ...nouveauxFrais]);
        });
    
        // Charger les données initiales
        FetchData();
    
        return () => {
            socket.disconnect(); 
        };
    }, []);


    
    // Fonction pour Checkout de Stripe
    const handleCheckout = (item: Datafrais) => {
        setSelectedFrais(item);
    }

    // Afficher l'ID dès qu'il change
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        if (selectedFrais) {
            console.log(selectedFrais);
            // Fonction asynchrone
            const createCheckoutSession = async () => {
                try {
                    const montantCentimes = Math.round(parseFloat(selectedFrais.montant) * 100);
                    const response = await axios.post("http://localhost:3000/api/v3/PaymentStripe/payment", {
                        amount: montantCentimes, 
                        currency: "usd",
                        description: selectedFrais.titre,
                        id_user: user.id,
                        id_frais: selectedFrais.id
                    });

                    window.location.href = response.data.url; // Redirection vers Stripe Checkout
                } catch (error) {
                    console.error("Erreur lors de la création de la session Stripe:", error);
                }
            };

            createCheckoutSession(); // Appel de la fonction asynchrone
            }
    }, [selectedFrais]);
    
    return (
        <> 
            {loading ? (
                <div className="flex justify-center items-center h-[75vh]">
                    <div>
                        <span 
                            className="animate-spin inline-block size-10 border-[3px] border-current border-t-transparent text-green-600 rounded-full" 
                            role="status" 
                            aria-label="loading"
                        > </span>
                    </div>
                </div>
            ):(
                <div className="overflow-auto mt-4">
                    <div className="min-w-full inline-block align-middle">
                        <div className="overflow-auto scrollbar-none border rounded-lg h-[79vh]">
                            <div className="table border-collapse table-auto w-full divide-y divide-gray-200 ">
                                <div className="table-header-group bg-gray-50 py-2">
                                    <div className="table-row">
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Description</div>
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Montant</div>
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Date Debut</div>
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Date Fin</div>
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Promotion</div>
                                        <div className="table-cell px-6 py-4 text-end text-base font-medium text-gray-500  ">Action</div>
                                    </div>
                                </div>
                                <div className="table-row-group divide-y divide-gray-200 bg-white ">

                                    {frais.map((item, index) => (
                                        <div key={index} className="table-row ">
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {item.titre} </div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {item.montant} Fc</div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {new Date(item.Date_debut).toLocaleDateString()} </div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {new Date(item.Date_fin).toLocaleDateString()} </div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {item.promotion} </div>

                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                                <button 
                                                    type="button" 
                                                    onClick={()=> handleCheckout(item)}
                                                    className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                                    disabled:opacity-50 disabled:pointer-events-none bg-green-500 px-4 py-2 text-white"
                                                >
                                                    Payer
                                                </button>
                                            </div>
                                        </div>
                                    ))};
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* //le modal de paiement  */}
            {/* < Modal 
                isOpen={isModalOpen}
                onclose={handleCloseModal}
                frais={selectedFrais}
            /> */}
        </>
    )
}

export default ListFrais
