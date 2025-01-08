import Navbar from '../navbar/Navbar';

function GestiondeFrais() {
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
                            className='px-4 py-2 bg-green-500 text-white rounded-md'
                        >
                            Ajouter
                        </button>
                    </div>
                </div>

                <div  className='mt-4 grid gap-2 md:grid-cols-3'>
                    <div className='border rounded-md'>
                        <div className='px-4 py-2'>
                            <h1 className='text-xl'>Frais</h1>
                        </div>
                        <hr />

                        <div className='px-4 py-2'>
                            <div className='py-2'>
                                <h1 className='text-2xl md:text-3xl'>Frais de Stage</h1>
                            </div>

                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sunt doloribus 
                            </p>

                            <div className='mt-4 flex justify-end'>
                                <button 
                                    type="button"
                                    className='border px-7 py-2 rounded-lg text-white bg-green-700'
                                >
                                    Payer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default  GestiondeFrais;
