import { useState } from "react";
import { MdDelete } from "react-icons/md"; // l iconne de delete 

type DataFriasAdmin = {
    id: number;
    titre: string;
    Date_debut: string;
    Date_fin: string;
    Date_creation: string;
    montant: string;
    promotion: string; 
}

interface DeleteFrais {
    onCloseMenuDelete: () => void;
    selectedFrais: DataFriasAdmin | null;
    messDelete: () => void;
}

function DeleteFrais({ onCloseMenuDelete, selectedFrais, messDelete }: DeleteFrais) {

    const [ErrorMessage, setErrorMessage] = useState<string | null>(null);
    if(!selectedFrais) return null;

    const DeleteFrais = async () => {
        const FraisId = selectedFrais.id;
        try {
            const response = await fetch("https://school-payment-system.onrender.com/api/v2/datafrias/DeleteFrais", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({FraisId}),
            });

            if (response.ok) {
                onCloseMenuDelete();
                messDelete();
            } else {
                setErrorMessage("Une Erreur se Produit");
            }
        } catch (error) {
            console.error("Erreur :", error);
        }
    };

    return (
        <div className="h-screen absolute z-20 inset-0 flex justify-center items-center bg-black bg-opacity-55 backdrop-blur-md transition-all duration-500 ease-in-out">
            <div className="bg-white px-4 transition duration-1500 ease-in-out font-Roboto py-2 rounded-lg w-11/12 md:w-7/12 lg:w-4/12">
                <div className='flex justify-center'>
                    < MdDelete size={100} color='#dc2626' />
                </div>
                <div className="mb-4 flex justify-center items-center">
                    {ErrorMessage && <p className="text-red-500 text-center"> { ErrorMessage } </p> }
                    <h1 className="text-2xl">Supprimer Le Frais </h1>
                </div>

                <div className="mb-4 flex justify-center items-center">
                    <p>Voulez vous Supprimer ce Frais ?</p>
                </div>

                <div className="mb-4 flex justify-center gap-5 items-center">
                    <button 
                        type="button"
                        onClick={onCloseMenuDelete}
                        className='border border-gray-300 py-3 px-6 rounded-lg'
                    >
                        Annuler
                    </button>

                    <button 
                        type="button"
                        onClick={DeleteFrais}
                        className='border border-gray-300 py-3 px-6 rounded-lg bg-[#dc2626] text-white' 
                    >
                        Supprimer
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteFrais;
