import { useState, useEffect } from "react";
import axios from "axios";

type DataHistoriqueFrias = {
    id: number;
    date_paiement: string;
    titre: string;
    montant_paye: number;
    methode: string;
    statut: string;
}

function ListHistorique() {
    const [loading, setloading] = useState(true);
    const [historiqueFrais, setHistorique] = useState<DataHistoriqueFrias[]>([]);
    const [Error, setError] = useState<string | null>(null);
    const GetUserId = localStorage.getItem("user");
    const user = GetUserId ? JSON.parse(GetUserId) : null;
    const UserId = user.id
    useEffect(()=>{
        const GetHistorique = async ()=> {
            try {
                const reponse = await axios.get("https://school-payment-system.onrender.com/api/v2/datafrias/HistoriqueFrais", {
                    params : { UserId }
                });
                console.log("Data Frais Historique", reponse);
                setHistorique(reponse.data);
                setloading(false);
            } catch (error) {
                setError("Erreur !");
                console.error("Erruer", error);
            } finally{
                setloading(false);
            }
        }

        GetHistorique();
    }, [])
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
            ) : Error ? (
                <h1 className="flex justify-center items-center h-[50vh] text-4xl">Aucune Historique Trouver Veuillez Payer </h1>
            ) : (
                <div className="overflow-auto">
                    <div className="min-w-full inline-block align-middle">
                        <div className="overflow-auto scrollbar-none border rounded-lg h-[79vh]">
                            <div className="table border-collapse table-auto w-full divide-y divide-gray-200 ">
                                <div className="table-header-group bg-gray-50 py-2">
                                    <div className="table-row">
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Date</div>
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Description</div>
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Montant</div>
                                        <div className="table-cell px-6 py-4 text-end text-base font-medium text-gray-500  ">Mode de Paiement</div>
                                        {/* <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Numero Voir le Recu</div> */}
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Status</div>
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Action</div>
                                    </div>
                                </div>

                                <div className="table-row-group divide-y divide-gray-200 bg-white ">
                                    {historiqueFrais.map((item, index) => (
                                        <div key={index} className="table-row ">
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">{new Date(item.date_paiement).toLocaleDateString()}</div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {item.titre} </div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {item.montant_paye} FC</div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {item.methode} </div>
                                            {/* <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 ">0005001</div> */}
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {item.statut} </div>

                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                                <button 
                                                    type="button" 
                                                    className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                                    disabled:opacity-50 disabled:pointer-events-none bg-green-500 px-4 py-2 text-white"
                                                >
                                                    Voir le Recu
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            
                                
                            </div>
                        </div>
                    </div>
                </div>
            )}      
        </>
    )
}

export default ListHistorique;
