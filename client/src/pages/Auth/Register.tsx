import { Link } from "react-router";


function Register() {
    return(
        <>
             <section className="h-screen bg-slate-50 flex items-center justify-center ">
                <div className="bg-white px-4 font-Roboto py-2 shadow-sm rounded-lg w-11/12 md:w-7/12 lg:w-4/12">
                    <div className="mb-4 flex justify-center">
                        <h1 className="text-2xl">Authentification</h1>
                    </div>
                    <form >
                        
                        {/* item input */}
                        <div className="mb-2">
                            <label htmlFor="input-nom" className="block text-sm font-medium mb-2 ">Nom</label>
                            <input 
                                type="text" 
                                name="nom"
                                id="input-nom" 
                                placeholder="Nom"
                                className="py-3 px-4 block w-full border rounded-lg text-sm   focus:outline-orange-300 disabled:pointer-events-none " 
                            />
                        </div>
                        {/* End item */}

                        {/* item input */}
                        <div className="mb-2">
                            <label htmlFor="input-Postnom" className="block text-sm font-medium mb-1">PostNom</label>
                            <input 
                                type="text" 
                                id="input-Postnom" 
                                placeholder="Post nom"
                                className="py-3 px-4 block w-full border rounded-lg text-sm   focus:outline-orange-300 disabled:pointer-events-none " 
                            />
                        </div>
                        {/* End item */}

                        {/* item input */}
                        <div className="mb-2">
                            <label htmlFor="input-prenom" className="block text-sm font-medium mb-2 ">Prenom</label>
                            <input 
                                type="text" 
                                id="input-prenom" 
                                placeholder="Pre nom"
                                className="py-3 px-4 block w-full border rounded-lg text-sm   focus:outline-orange-300 disabled:pointer-events-none " 
                            />
                        </div>
                        {/* End item */}

                        {/* item input */}
                        <div className="mb-2">
                            <label htmlFor="input-password" className="block text-sm font-medium mb-2 ">Promotion</label>
                            <input 
                                type="" 
                                id="input-password" 
                                placeholder="********"
                                className="py-3 px-4 block w-full border rounded-lg text-sm   focus:outline-orange-300 disabled:pointer-events-none " 
                            />
                            
                        </div>
                        {/* End item */}

                        <div className="mb-2 flex justify-end w-auto">
                            <button type="button" className="hover:text-orange-500">
                                Mot de passe Oubier ?
                            </button>
                        </div>

                        <div className="mt-4">
                            <button 
                                type="submit"
                                className="border w-full px-4 py-2 rounded-lg bg-orange-400 text-white text-xl"
                            >
                                Envoyer
                            </button>
                        </div>
                    </form>

                    <div className="mt-4">
                        <span>
                            Vous n'avez pas un compte ?
                            <Link 
                                to="/"
                                className="ml-2 text-green-500"
                            >
                                S'inscrire
                            </Link>
                        </span>
                    </div>
                </div>
            </section> 
        </>
    )
}


export default Register;