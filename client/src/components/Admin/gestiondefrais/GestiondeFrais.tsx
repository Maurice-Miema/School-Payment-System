import { useState } from 'react';
import Navbar from '../navbar/Navbar';
import AddFrais from './AddFrais';
import ListFrais from './ListFrais';

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
                        < AddFrais onClose={handleCloseMenu} />
                    )}
                </div>
            </section>
        </>
    )
}

export default  GestiondeFrais;
