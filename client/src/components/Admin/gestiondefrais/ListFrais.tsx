import { useState, useEffect } from "react";
import axios from "axios";
import ModifyFrais from "./ModifyFrais";
import DeleteFrais from "./DeleteFrais";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { TbXboxXFilled } from "react-icons/tb";

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

    // ********************** 
    // POUR L'AFFICHAGE DE REUSITE
    const [showMessage, setShowMessage] = useState(false);

    const restoreMessage = () => {
        setShowMessage(true);
    };

    useEffect(() => {
        if (showMessage) {
            const Timer = setTimeout(() => {
                setShowMessage(false); 
            }, 5000);

            return () => {
                clearTimeout(Timer);
            };
        }
    }, [showMessage]);

    // POUR L'AFFICHAGE DE LA SUPPRESSION
    const [showMessageDelete, setShowMessageDelete] = useState(false);

    const restoreMessageDelete = () => {
        setShowMessageDelete(true);
    };

    useEffect(() => {
        if (showMessageDelete) {
            const Timer = setTimeout(() => {
                setShowMessageDelete(false); 
            }, 5000);

            return () => {
                clearTimeout(Timer);
            };
        }
    }, [showMessage]);
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
                    < ModifyFrais onClose={handleCloseMenu} selectedFrais={selectedFrais} messSucces={restoreMessage}/>
                )}
            </div>

            <div>
                {menudelete && (
                    < DeleteFrais onCloseMenuDelete={handleCloseMenuDelete} selectedFrais={selectedFrais} messDelete={restoreMessageDelete}/>
                )}
            </div>

            {/* MESSAGE DE SUCCES APRES  LA MODIFICATION D'UN FRAIS */}
            <AnimatePresence>
                {showMessage && (
                    <motion.div
                        initial={{ x: "0%", opacity: 1 }} 
                        animate={{ x: 0, opacity: 1 }} 
                        exit={{ x: "90%", opacity: 0 }} 
                        transition={{ duration: 0.4, ease: "easeInOut" }} 
                        className="absolute left-[75%] top-[82%] right-4 transition-transform duration-500"
                    >
                        <div className="flex gap-3 border border-gray-300 bg-white py-3 rounded-md shadow-md px-4">
                            <div>
                                <IoMdCheckmarkCircle size={50} className="text-green-600" />
                            </div>
                            <div>
                                <h1 className="text-green-700 font-medium">
                                    Le Frais a été effectué Modifier avec succès !
                                </h1>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MESSAGE DE SUCCES APRES  LA MODIFICATION D'UN FRAIS */}
            <AnimatePresence>
                {showMessageDelete && (
                    <motion.div
                        initial={{ x: "0%", opacity: 1 }} 
                        animate={{ x: 0, opacity: 1 }} 
                        exit={{ x: "90%", opacity: 0 }} 
                        transition={{ duration: 0.4, ease: "easeInOut" }} 
                        className="absolute left-[75%] top-[82%] right-4 transition-transform duration-500"
                    >
                        <div className="flex gap-3 border border-gray-300 bg-white py-3 rounded-md shadow-md px-4">
                            <div>
                                <TbXboxXFilled size={50} className="text-red-600" />
                            </div>
                            <div>
                                <h1 className="text-red-500 font-medium">
                                    Le Frais a été Supprimer avec succès !
                                </h1>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            

        </>
    )
}

export default ListFrais
