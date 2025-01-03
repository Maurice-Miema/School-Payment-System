import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { z } from "zod";
import { useState } from "react";
import { useNavigate } from"react-router"


function Register() {
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // le schema de donnes de user
    const userSchema = z.object({
        nom: z.string().min(2),
        postnom: z.string().min(2),
        prenom: z.string().min(2),
        numerotel: z.string().min(10).max(12),
        promotion: z.enum(["7eme", "8eme", "3eme", "4eme", "5eme", "6eme"]),
        password: z.string().min(4).max(8),
    });

    type FormData = z.infer<typeof userSchema>;

    const {
        register,
        handleSubmit,
        setValue,
        trigger,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(userSchema)
    });
    
    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        setErrorMessage(null);
        console.log("data :", data);
        try {
            const reponse = await fetch("http://localhost:300/register", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data),
            });
            const resultat = await reponse.json();
            if(reponse.ok){
                navigate("/home")
            } else {
                setErrorMessage(resultat.message || "Une erreur est survenue veuillez resaiyer");
            }
        } catch (error) {
            setErrorMessage("Impossible de se connecter au serveur verifier votre connexion");
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <>
            <section className="h-screen bg-slate-50 flex items-center justify-center ">
                <div className="bg-white px-4 font-Roboto py-2 shadow-lg rounded-lg w-11/12 md:w-7/12 lg:w-4/12">
                    <div className="mb-4 flex justify-center">
                        <h1 className="text-2xl">S'inscrire</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {errorMessage && (
                            <p className='text-red-500 text-center'>{errorMessage}</p>
                        )}
                        <div className='sm:flex sm:items-center sm:gap-4'>
                            {/* item input */}
                            <div className="mb-2 sm:w-1/2">
                                <label htmlFor="input-nom" className="block text-sm font-medium mb-2 ">Nom</label>
                                <input 
                                    type="text" 
                                    id="input-nom" 
                                    placeholder="Nom"
                                    {...register("nom")}
                                    className={`py-3 px-4 block w-full border rounded-lg text-sm   focus:outline-green-300 disabled:pointer-events-none ${
                                        errors.nom ? "border-red-500 border-2 focus:outline-red-500" : "border-gray-300"
                                    }`}
                                />
                            </div>
                            {/* End item */}

                            {/* item input */}
                            <div className="mb-2 sm:w-1/2">
                                <label htmlFor="input-Postnom" className="block text-sm font-medium mb-1">PostNom</label>
                                <input 
                                    type="text" 
                                    id="input-Postnom" 
                                    {...register("postnom")}
                                    placeholder="Post nom"
                                    className={`py-3 px-4 block w-full border rounded-lg text-sm   focus:outline-green-300 disabled:pointer-events-none ${
                                        errors.postnom ? "border-red-500 border-2 focus:outline-red-500" : "border-gray-300"
                                    }`}
                                />
                            </div>
                            {/* End item */}
                        </div>

                        {/* item input */}
                        <div className="mb-2">
                            <label htmlFor="input-prenom" className="block text-sm font-medium mb-2 ">Prenom</label>
                            <input 
                                type="text" 
                                id="input-prenom" 
                                {...register("prenom")}
                                placeholder="Pre nom"
                                className={`py-3 px-4 block w-full border rounded-lg text-sm   focus:outline-green-300 disabled:pointer-events-none ${
                                    errors.prenom ? "border-red-500 border-2 focus:outline-red-500" : "border-gray-300"
                                }`}
                            />
                        </div>
                        {/* End item */}

                        {/* item input */}
                        <div className="mb-2">
                            <label htmlFor="input-numtel" className="block text-sm font-medium mb-2 ">Numero de telephone</label> 
                            <PhoneInput
                                country={"cd"}
                                value={phone}
                                placeholder="0979030995"
                                onChange={(value) => {
                                    setPhone(value); 
                                    setValue("numerotel", value);
                                    trigger("numerotel"); 
                                }}
                                inputClass={`!py-6 px-4 !w-full !rounded-lg !text-sm ${
                                    errors.numerotel 
                                    ? "!border-red-500 !border-2 !focus:outline-red-500" 
                                    : phone.length >= 10 && phone.length <= 10
                                    ? "!border-green-500 !focus:outline-green-500" 
                                    : "!border-gray-300 !focus:outline-gray-300" 
                                }`}
                            />
                            
                        </div>
                        {/* End item */}

                        {/* item input */}
                        <div className="mb-2">
                            <label htmlFor="select-promotion" className="block text-sm font-medium mb-2 ">Promotion</label>
                            <div className="relative">
                                <select 
                                    id="select-promotion" 
                                    {...register("promotion")}
                                    className={`py-3 px-4 block w-full border rounded-lg text-sm   focus:outline-green-300 disabled:pointer-events-none ${
                                        errors.promotion ? "border-red-500 border-2 focus:outline-red-500" : "border-gray-300"
                                    }`}
                                >
                                    <option>Veuillez sélectionner votre Promotion</option>
                                    <option value="7eme">7 eme</option>
                                    <option value="8eme">8 eme</option>
                                    <option value="3eme">3 eme</option>
                                    <option value="4eme">4 eme</option>
                                    <option value="5eme">5 eme</option>
                                    <option value="6eme">6 eme</option>
                                </select>
                                <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-8">
                                    <svg className="shrink-0 size-4 text-teal-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/* End item */}

                        {/* item input */}
                        <div className="mb-2">
                            <label htmlFor="input-password" className="block text-sm font-medium mb-2 ">Mot de passe</label>
                            <input 
                                type="password" 
                                id="input-password" 
                                placeholder="********"
                                {...register("password")}
                                className={`py-3 px-4 block w-full border rounded-lg text-sm   focus:outline-green-300 disabled:pointer-events-none ${
                                    errors.password ? "border-red-500 border-2 focus:outline-red-500" : "border-gray-300"
                                }`}
                            />
                        </div>
                        {/* End item */}

                        <div className="mt-4">
                            <button 
                                type="submit"
                                disabled={isLoading}
                                className="border w-full px-4 py-2 rounded-lg bg-green-500 text-white text-xl"
                            >
                                {isLoading ? (
                                    <span 
                                        className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" 
                                        role="status" 
                                        aria-label="loading"
                                    >
                                    
                                    </span>
                                ) : (
                                    "S'inscrire"
                                )}
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