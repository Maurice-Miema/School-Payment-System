import { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import AddFrais from './AddFrais';
import ListFrais from './ListFrais';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { AnimatePresence, motion } from 'framer-motion';
// import DeleteMess from './retourmessage/DeleteMess';

function GestiondeFrais() {
    const [ismenufrais, setIsmenuFrais] = useState(false);
    // open menu fromulaire de frais
    const handleOpenMenu = ()=> {
        setIsmenuFrais(true);
    }
    // close meu formulaire de frais
    const handleCloseMenu = ()  => {
        setIsmenuFrais(false);
    }

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

    return (
        <>
            < Navbar />
            <hr />

            <section className='mt-4 h-[87vh] overflow-auto scrollbar-none'>
                <div className='flex items-center'>
                    <div className='w-1/2'>
                        <h1 className='text-xl md:text-2xl'>Frais a Payer </h1>
                    </div>

                    <div className='w-1/2 flex justify-end'>
                        <button 
                            type="button"
                            onClick={handleOpenMenu}
                            className='px-4 py-2 bg-green-500 text-white rounded-md'
                        >
                            Ajouter Un Frais
                        </button>
                    </div>
                </div>

                <div className='h-[78vh] overflow-auto scrollbar-none mt-3'>
                    < ListFrais />
                </div>

                {/* formulaires add frais */}
                <div>
                    {ismenufrais && (
                        < AddFrais onClose={handleCloseMenu} MessSucces={restoreMessage} />
                    )}
                </div>

            </section>

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
                                    Le Frais a été Ajouter  avec succès ✔ !
                                </h1>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default  GestiondeFrais;
