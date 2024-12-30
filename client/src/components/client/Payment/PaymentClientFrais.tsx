import React from 'react'

// Les iconnes
import { HiOutlineChevronDown } from 'react-icons/hi'
import { IoNotificationsOutline } from 'react-icons/io5'

export default function PaymentClientFrais() {
  return (
    <>
        <div className='flex items-center'> 
            <div className='w-1/2'>
                <h1 className='text-xl md:text-3xl'>Paiement des Frais</h1>
            </div>

            <div className='w-1/2 flex justify-end'>
                <div className='flex items-center'>
                    <div className='mx-2'>
                        < IoNotificationsOutline size={20} />
                    </div>
                    <div>
                        <img 
                            src="./src/assets/Client/img/avatar.png" 
                            alt="Photo User" 
                            className='h-12 w-12'
                        />
                    </div>
                    <div>
                        <h1 className='hidden md:block'>Maurice Miema</h1>
                        < HiOutlineChevronDown 
                            size={20}
                            className='md:hidden block' 
                        />
                    </div>
                </div>
            </div>
        </div> 
        <hr />

        {/* les cards de frais */}

        <section className='mt-4 h-[87vh] overflow-auto scrollbar-none'>
            <div className=''>
                <h1 className='text-2xl'>Listes de Frais a Payer </h1>
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
