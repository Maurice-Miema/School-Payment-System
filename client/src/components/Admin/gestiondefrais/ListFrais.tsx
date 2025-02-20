import { useState, useEffect } from "react";
import axios from "axios";
import ModifyFrais from "./ModifyFrais";
import DeleteFrais from "./DeleteFrais";
// import ModifyFrais from "./ModifyFrais";

type DataFriasAdmin = {
    id: number;
    titre: string;
    Date_debut: string;
    Date_fin: string;
    Date_creation: string;
    montant: string;
    promotion: string;
}

function ListFrais() {
    const [fraisSoumis, setFraisSoumis] = useState<DataFriasAdmin[]>([]);
    const [Error, setError ] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedFrais, setSelectedFrais] = useState< DataFriasAdmin | null>(null);

    useEffect(()=>{
        const GetFraisAdmin = async ()=>{
            try {
                const reponse = await axios.get("https://school-payment-system.onrender.com/api/v2/datafrias/FraisSoumisAdmin");
                console.log("Liste Frias:", reponse)
                setFraisSoumis(reponse.data);
                setLoading(false);
            } catch (error) {
                setError("Erreur");
                console.error("Erreur", error);
            } finally{
                setLoading(false);
            }
        }
        GetFraisAdmin();
    },[]);

    const [ismenufrais, setIsmenuFrais] = useState(false);
    const [menudelete, setMenudelete] = useState(false);
    
    // open menu fromulaire de frais
    const handleOpenMenu = (item: DataFriasAdmin)=> {
        setIsmenuFrais(true);
        setSelectedFrais(item);
    }
    // close meu formulaire de frais
    const handleCloseMenu = ()  => {
        setIsmenuFrais(false);
    }
    // ************************************** MENU DELETE FRAIS ******************************************
    // Pour afficher le menu Delete Frais 
    const handleOpenMenuDelete = (item: DataFriasAdmin)=> {
        setMenudelete(true);
        setSelectedFrais(item);
    }

    // Pour close le menu Delete Frais
    const handleCloseMenuDelete = ()  => {
        setMenudelete(false);
    }
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
                <h1 className="flex justify-center items-center h-[50vh] text-3xl">Aucun Frais Soumis ou Trouver Veuillez Soumettre un Frais </h1>
            ) : (
                <div className="overflow-auto">
                    <div className="min-w-full inline-block align-middle">
                        <div className="overflow-auto scrollbar-none border rounded-lg">
                            <div className="table border-collapse table-auto w-full divide-y divide-gray-200 ">
                                <div className="table-header-group bg-gray-50 py-2">
                                    <div className="table-row">
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Description</div>
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Montant</div>
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Date Debut</div>
                                        <div className="table-cell px-6 py-4 text-start text-base font-medium text-gray-500  ">Date Fin</div>
                                        <div className="table-cell px-6 py-4 text-end text-base font-medium text-gray-500  ">Promotion</div>
                                        <div className="table-cell px-6 py-4 text-end text-base font-medium text-gray-500  ">Suppresion</div>
                                        <div className="table-cell px-6 py-4 text-end text-base font-medium text-gray-500  ">Modifier</div>
                                        
                                    </div>
                                </div>
                                
                                {fraisSoumis.map((item, index)=> (

                                    <div key={index} className="table-row-group divide-y divide-gray-200 bg-white ">
                                        <div className="table-row ">
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 "> {item.titre} </div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {parseFloat(item.montant).toLocaleString("de-DE")} FC</div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {new Date(item.Date_debut).toLocaleDateString()} </div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {new Date(item.Date_fin).toLocaleDateString()} </div>
                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-base text-gray-800 "> {item.promotion} </div>

                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                                <button 
                                                    type="button" 
                                                    onClick={()=> handleOpenMenuDelete(item)}
                                                    className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                                    disabled:opacity-50 disabled:pointer-events-none bg-red-400 px-4 py-2 text-white"
                                                >
                                                    Supprimer
                                                </button>
                                            </div>

                                            <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                                <button 
                                                    type="button" 
                                                    onClick={()=> handleOpenMenu(item)}
                                                    className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border
                                                    disabled:opacity-50 disabled:pointer-events-none bg-green-500 px-4 py-2 text-white"
                                                >
                                                    Modifier
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

            {/* le mennu Modifier le Frais*/}
            <div>
                {ismenufrais && (
                    < ModifyFrais onClose={handleCloseMenu} selectedFrais={selectedFrais}/>
                )}
            </div>

            <div>
                {menudelete && (
                    < DeleteFrais onCloseMenuDelete={handleCloseMenuDelete} selectedFrais={selectedFrais}/>
                )}
            </div>

        </>
    )
}

export default ListFrais
