import { useState, useEffect } from "react";
import axios from "axios";

type DataGestionPayment = {
    id: number;
    nom: string;
    postnom: string;
    prenom: string;
    promotion: string;
    frais_titre: string;
    montant_paye: string;
}

function Listpayment() {
    const [payment, setPayment] = useState<DataGestionPayment[]>([]);
    const [loading, setLoading] = useState(true);
    const [Error, setError] = useState<string | null>(null);

    useEffect(()=> {
        const GetPayment = async ()=> {
            try {
                const reponse = await axios.get("https://school-payment-system.onrender.com/api/v2/datafrias/GestionPayment");
                console.log("Liste de payment:", reponse);
                setPayment(reponse.data);
                setLoading(false);
            } catch (error) {
                setError("erreur");
                console.error("Erruer", error);
            } finally{
                setLoading(false);
            }
        }
        GetPayment();
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
                <h1 className="flex justify-center items-center h-[50vh] text-4xl">Desolé Aucun Frais Trouver </h1>
            ) : (
                <div className="overflow-auto">
                    <div className="min-w-full inline-block align-middle">
                        <div className="overflow-auto scrollbar-none border rounded-lg">
                            <div className="table border-collapse table-auto w-full divide-y divide-gray-200 ">
                                <div className="table-header-group bg-gray-50 py-2">
                                    <div className="table-row">
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Nom</div>
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Postnom</div>
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Prenom</div>
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Promotion</div>
                                        <div className="table-cell px-6 py-4 text-end text-base font-medium text-gray-500  ">Description</div>
                                        <div className="table-cell px-6 py-4 text-end text-base font-medium text-gray-500  ">Montant</div>
                                        
                                    </div>
                                </div>

                                {payment.map((item, index)=> ( 
                                    <div key={index} className="table-row-group divide-y divide-gray-200 bg-white ">
                                        <div className="table-row ">
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {item.nom} </div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {item.postnom} </div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {item.prenom} </div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {item.promotion} </div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {item.frais_titre} </div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base"> {item.montant_paye} FC</div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Listpayment;
