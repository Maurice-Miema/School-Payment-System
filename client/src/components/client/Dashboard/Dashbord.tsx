import React from 'react'

// les iconnes
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineChevronDown } from "react-icons/hi";

function DashboardClient() {
    return (
        <>
            <div className='flex items-center'> 
                <div className='w-1/2'>
                    {/* <h1 className='text-xl md:text-3xl'>Dashbord</h1> */}
                    <input 
                        type="search" 
                        name="" 
                        id="" 
                        className='border w-1/2 focus:outline-none px-4 py-1 rounded-lg'
                    />
                </div>

                <div className='w-1/2 flex justify-end'>
                    <div className='flex items-center'>
                        <div className='mx-2'>
                            < IoNotificationsOutline size={20} />
                        </div>
                        <div>
                            <img 
                                src="./src/assets/images/client/avatar.png" 
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
                <div className='py-2'>
                    <h1 className='text-2xl'>Dashboard</h1>
                </div>
            <section className='grid md:grid-cols-GridDash1 gap-3 '>
                <div>
                    
                    <div className='gap-3 grid md:grid-cols-3'>
                        <div className='bg-green-600/85 text-white px-4 py-2 rounded-xl'>
                            <div>
                                <h1 className='text-lg font-semibold'>Montant Total</h1>
                            </div>

                            <div>
                                <h1 className='text-4xl font-semibold md:py-2'>24</h1>
                            </div>
                            
                            <div>
                                <p>maurice miema bope</p>
                            </div>
                        </div>

                        <div className='bg-amber-500/75 text-white px-4  py-2 rounded-xl'>
                            <div>
                                <h1 className='text-lg font-semibold'>Montant Payer</h1>
                            </div>

                            <div>
                                <h1 className='text-4xl font-semibold md:py-2'>24</h1>
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
                                <h1 className='text-4xl font-semibold md:py-2'>24</h1>
                            </div>
                            
                            <div>
                                <p>maurice miema bope</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-2 text-xl md:mt-4'>
                        <h1>Historique récent des paiements</h1>

                        <div className='border rounded-md h-96 overflow-auto mt-4 px-4 py-2'>
                            <div className='grid gap-2 md:grid-cols-4'>
                                <div className='bg-black'>
                                    <h1>colone</h1>
                                </div>

                                <div className='bg-black'>
                                    <h1>colone</h1>
                                </div>

                                <div className='bg-black'>
                                    <h1>colone</h1>
                                </div>

                                <div className='bg-black'>
                                    <h1>colone</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
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
                </div>
            </section>
        </>
    )
}

export default DashboardClient;
