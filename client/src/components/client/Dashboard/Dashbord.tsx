import ListHistorique from "../Historique/ListHistorique";
import Navbar from "../navbar/Navbar";
import AccoutPayer from "./AccoutPayer";
import AccoutRestant from "./AccoutRestant";
import NbreFraisPayer from "./NbreFraisPayer";
import NbreFrais from "./NombreFrais";
import Totalfrais from "./TotalFrais";

function DashboardClient() {
    
    return (
        <>
            <div> 
                < Navbar />
            </div>
            <hr />
            <div className='py-2'>
                <h1 className='text-2xl'>Dashboard</h1>
            </div>
            <section className=''>
                <div> 
                    <div className='gap-3 grid md:grid-cols-3'>
                        <div className='bg-green-600/85 text-white px-4 py-2 rounded-xl'>
                            <div>
                                <h1 className='text-lg font-semibold'>Total a Payer</h1>
                            </div>

                            <div>
                                <h1 className='text-4xl font-semibold md:py-3'>
                                    < Totalfrais />
                                </h1>
                            </div>
                            
                            <div>
                                <p>maurice miema bope</p>
                            </div>
                        </div>

                        <div className='bg-amber-500/75 text-white px-4 py-2 rounded-xl'>
                            <div>
                                <h1 className='text-lg font-semibold'>Montant Payer</h1>
                            </div>

                            <div>
                                <h1 className='text-4xl font-semibold md:py-2'>
                                    < AccoutPayer />
                                </h1>
                            </div>
                            
                            <div>
                                <p>maurice miema bope</p>
                            </div>
                        </div>

                        <div className='bg-gray-600/75 text-white px-4 py-2 rounded-xl'>
                            <div>
                                <h1 className='text-lg font-semibold'>Montant Restant</h1>
                            </div>

                            <div>
                                <h1 className='text-4xl font-semibold md:py-2'>
                                    < AccoutRestant />
                                </h1>
                            </div>
                            
                            <div>
                                <p>maurice miema bope</p>
                            </div>
                        </div>
                    </div>

                    {/* Nombre total des frais a payer */}
                    <div className="grid md:grid-cols-2 gap-3 mt-2">
                        <div className="border px-2 rounded-lg">
                            <h1 className="text-xl py-2">Nombre des frais a payer</h1>

                            <div className="py-2 px-4">
                                <h1 className="text-5xl">
                                    < NbreFrais /> 
                                </h1>
                            </div>

                            <div className="py-2">
                                <h1 className="">Frais a Payer</h1>
                            </div>
                        </div>
                        
                        <div className="border px-2 rounded-lg">
                            <h1 className="text-xl py-2">Nombre des frais payer</h1>

                            <div className="py-2 px-4">
                                <h1 className="text-5xl">
                                    < NbreFraisPayer />
                                </h1>
                            </div>

                            <div className="py-2">
                                <h1>Frais a Payer</h1>
                            </div>
                        </div>
                    </div>

                    <div className='mt-2 text-xl md:mt-4'>
                        <h1>Historique récente des paiements</h1>

                        <div className='rounded-md scrollbar-none h-52 overflow-auto mt-4'>
                            < ListHistorique />
                        </div>
                    </div>
                </div>

                {/* <div >
                    <div className='grid'>
                        <div className='border rounded-lg px-2 py-2 bg-blue-950 text-white'>
                            <h1 className='text-xl'>Recente Activter</h1>

                            <div className='pt-6'>
                                <h1 className='text-2xl pb-2'>TIitre de la not</h1>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sunt doloribus 
                                </p>

                                <div className='mt-9 flex justify-end'>
                                    <button 
                                        type="button"
                                        className=' px-4 py-2 rounded-md bg-green-700 text-lg'
                                    >
                                        D'accord
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='border rounded-md h-80 mt-2'>

                        </div>
                    </div>
                </div> */}
            </section>
        </>
    )
}

export default DashboardClient;
