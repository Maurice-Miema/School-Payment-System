import { useState, useEffect } from "react";
import axios from "axios";

type DataListEleve = {
    id: number;
    nom: string;
    postnom: string;
    prenom: string;
    promotion: string;
    numerotelephone: number;
}

function Listeleves() {
    const [ListEleve, setListEleve] = useState<DataListEleve[]>([]);
    const [loading, setLoading] = useState(true);
    const [Error, setError] = useState<string | null>(null);
    useEffect(()=> {
        const ListEleve = async ()=> {
            try {
                const reponse = await axios.get("https://school-payment-system.onrender.com/api/v2/datafrias/gestionEleves");
                console.log("Liste D'eleve :", reponse);
                setListEleve(reponse.data);
                setLoading(false);
            } catch (error) {
                setError("Erreur");
                console.error("Erreur", error);
            } finally {
                setLoading(false);
            }
        }

        ListEleve();
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
                <h1 className="flex justify-center items-center h-[50vh] text-3xl">Aucun Eleve trouver  </h1>
            ) : (
                <div className="-m-1.5 overflow-auto mt-4">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-auto scrollbar-none border rounded-lg h-[79vh]">
                            <div className="table border-collapse table-auto w-full divide-y divide-gray-200 ">
                                <div className="table-header-group bg-gray-50 py-2">
                                    <div className="table-row">
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Nom</div>
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Postnom</div>
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Prenom</div>
                                        <div className="table-cell px-6 py-4 text-end text-base font-medium text-gray-500  ">Promotion</div>
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Cellulaire</div>
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Action</div>
                                    </div>
                                </div>

                                {ListEleve.map((item, index)=> (
                                    <div key={index} className="table-row-group divide-y divide-gray-200 bg-white ">

                                        <div className="table-row ">
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 "> {item.nom} </div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {item.postnom} </div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {item.prenom} </div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {item.promotion} </div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {item.numerotelephone} </div>

                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                                <button 
                                                    type="button" 
                                                    className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                                    disabled:opacity-50 disabled:pointer-events-none bg-red-500 px-4 py-2 text-white"
                                                >
                                                Supprimer
                                                </button>
                                            </div>
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

export default Listeleves
