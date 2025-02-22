import Navbar from "../navbar/Navbar";
import MontantPayerAdmin from "./MontantPayer";
import MontantRestant from "./MontantRestant";
import NbreFraisSoumis from "./NbreFrais";
import NbreFraisPayer from "./NbreFraisPayer";
import TotalFraisAdmin from "./TotalFrais";

export default function DashbordAdmin() {
    return (
        <>
            < Navbar />
            <hr />

            <section className='gap-3 mt-5'>
                <div>
                    <div className='gap-3 grid md:grid-cols-3'>
                        <div className='bg-green-700 text-white px-4 py-2 rounded-xl'>
                            <div>
                                <h1 className='text-lg font-semibold'>Montant Total</h1>
                            </div>

                            <div className="text-4xl font-semibold md:py-2">
                                < TotalFraisAdmin />
                            </div>
                            
                            <div>
                                <p>maurice miema bope</p>
                            </div>
                        </div>

                        <div className='bg-amber-500 text-white px-4  py-2 rounded-xl'>
                            <div>
                                <h1 className='text-lg font-semibold'>Montant Payer</h1>
                            </div>

                            <div className="text-4xl font-semibold md:py-2">
                                < MontantPayerAdmin />
                            </div>
                            
                            <div>
                                <p>maurice miema bope</p>
                            </div>
                        </div>

                        <div className='bg-gray-600 text-white px-4 py-2 rounded-xl'>
                            <div>
                                <h1 className='text-lg font-semibold'>Montant Restant</h1>
                            </div>

                            <div className="text-4xl font-semibold md:py-2">
                                < MontantRestant />
                            </div>
                            
                            <div>
                                <p>maurice miema bope</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3 mt-2">
                        <div className="border px-2 rounded-lg">
                            <h1 className="text-xl py-2">Nombre des Frais Soumis </h1>

                            <div className="text-4xl font-semibold md:py-2" >
                                < NbreFraisSoumis />
                            </div>

                            <div className="py-2">
                                <h1 className="">Frais a Payer</h1>
                            </div>
                        </div>
                        
                        <div className="border px-2 rounded-lg">
                            <h1 className="text-xl py-2">Nombre des frais payer</h1>

                            <div className="text-4xl font-semibold md:py-2">
                                < NbreFraisPayer />
                            </div>

                            <div className="py-2">
                                <h1>Frais a Payer</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className=''>
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
                        <div className='border rounded-md h-72 mt-2'>

                        </div>
                    </div>
                </div> */}
            </section>
        </>
    )
}
