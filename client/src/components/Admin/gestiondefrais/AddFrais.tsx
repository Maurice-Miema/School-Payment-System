import { useForm } from 'react-hook-form';
import 'react-phone-input-2/lib/style.css'
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from 'react';

interface Addfrais{
    onClose: () => void;
}

function AddFrais({onClose}: Addfrais) {
    const [isloading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState< string | null>(null);

    const Schemafrais = z.object({
        titre: z
            .string()
            .min(1, { message: "Le titre est requis" })
            .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, { message: "Le titre ne doit contenir que des lettres" }),
        montant: z
            .string()
            .regex(/^\d+$/, "Le montant doit être un nombre.")
            .transform(Number)
            .refine((val) => val > 0, "Le montant doit être supérieur à 0."),
        date_debut: z.string().refine((val) => !isNaN(Date.parse(val)), "La date de début est invalide."),
        date_fin: z.string().refine((val) => !isNaN(Date.parse(val)), "La date de fin est invalide."),
        promotion: z.enum(["7eme", "8eme", "3eme", "4eme", "5eme", "6eme"]),
    })

    type FromData = z.infer<typeof Schemafrais>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FromData>({
        resolver: zodResolver(Schemafrais)
    });

    const onSubmit = async (data: FromData) => {
        setIsLoading(true);
        setErrorMessage(null);
        console.log("data :", data);

        try {
            const reponse = await fetch("https://school-payment-system.onrender.com/api/v2/datafrias/datafrais", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data),
            })
            const resultat = await reponse.json();
            if(reponse.ok){
                onClose();
            }else(
                setErrorMessage("Erreur d'envois Veuillez resaiyer")
            )
        }catch (error) {
            setErrorMessage("Impossible de se connecter au serveur verifier votre connexion");
        } finally { 
            setIsLoading(false);
        }
    }
    return (
        <div className="h-screen absolute inset-0 flex justify-center items-center bg-black bg-opacity-55 backdrop-blur-md transition-all duration-500 ease-in-out">
            <div className="bg-white px-4 transition duration-1500 ease-in-out font-Roboto py-2 rounded-lg w-11/12 md:w-7/12 lg:w-4/12">
                <div className="mb-4 flex justify-center items-center">
                    <h1 className="text-2xl">Ajouter Les Frais</h1>
                    
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {errorMessage &&  (
                        <p className="text-red-500 text-center">{errorMessage}</p>
                    )}
                    <div className=''>
                        {/* item input */}
                        <div className="mb-2 ">
                            <label htmlFor="input-titre" className="block text-sm font-medium mb-2 ">Titre de frais</label>
                            <input 
                                type="text" 
                                id="input-titre" 
                                placeholder="titre de frais"
                                {...register("titre")}
                                className={`py-3 px-4 block w-full border rounded-lg text-sm   focus:outline-green-300 disabled:pointer-events-none ${
                                    errors.titre ? "border-red-500 focus:outline-red-500" : "border-gray-300"
                                }`}
                            />
                            {errors.titre && <p className='text-red-500'> {errors.titre.message} </p>}
                        </div>
                        {/* End item */}

                        {/* item input */}
                        <div className="mb-2 ">
                            <label htmlFor="input-Postnom" className="block text-sm font-medium mb-1">Montant</label>
                            <input 
                                type="text" 
                                id="input-Postnom" 
                                placeholder="Post nom"
                                {...register("montant")}
                                className={`py-3 px-4 block w-full border rounded-lg text-sm   focus:outline-green-300 disabled:pointer-events-none ${
                                    errors.montant ? "border-red-500 focus:outline-red-500" : "border-gray-300"
                                }`}
                            />
                        </div>
                        {/* End item */}
                    </div>

                    {/* item input */}
                    <div className="mb-2 ">
                        <label htmlFor="input-date-debut" className="block text-sm font-medium mb-1">Date Debut</label>
                        <input 
                            type="Date" 
                            id="input-date-debut" 
                            placeholder=""
                            {...register("date_debut")}
                            className={`py-3 px-4 block w-full border rounded-lg text-sm   focus:outline-green-300 disabled:pointer-events-none ${
                                errors.date_debut ? "border-red-500 focus:outline-red-500" : "border-gray-300"
                            }`}
                        />
                    </div>

                    <div className="mb-2 ">
                        <label htmlFor="input-date-fin" className="block text-sm font-medium mb-1">Date Fin</label>
                        <input 
                            type="Date" 
                            id="input-date-fin" 
                            placeholder=""
                            {...register("date_fin")}
                            className={`py-3 px-4 block w-full border rounded-lg text-sm   focus:outline-green-300 disabled:pointer-events-none ${
                                errors.date_fin ? "border-red-500 focus:outline-red-500" : "border-gray-300"
                            }`}
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="input-promotion" className="block text-sm font-medium mb-1">Promotion</label>
                        <div className="relative">
                            < select 
                                id="input-promotion"
                                {...register("promotion")}
                                className={`py-3 px-4 block w-full border rounded-lg text-sm   focus:outline-green-300 disabled:pointer-events-none ${
                                    errors.promotion ? "border-red-500 focus:outline-red-500" : "border-gray-300"
                                }`}
                            >
                                <option >Choisir une promotion</option>
                                <option value="7eme">7 ieme</option>
                                <option value="8eme">8 ieme</option>
                                <option value="3eme">3 ieme</option>
                                <option value="4eme">4 ieme</option>
                                <option value="5eme">5 ieme</option>
                                <option value="6eme">6 ieme</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex  items-center gap-4'>
                        <div className='w-1/2'>
                            <button 
                                type="button"
                                onClick={onClose}
                                className='border w-full px-4 py-2 mt-4 rounded-lg bg-red-400 text-white text-xl'
                            >
                                Annuler
                            </button>
                        </div>

                        <div className='w-1/2'>
                            <button 
                                type="submit"
                                disabled={isloading}
                                className="border w-full px-4 py-2 mt-4 rounded-lg bg-green-500 text-white text-xl"
                            >
                                {isloading ? (
                                    <span 
                                        className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" 
                                        role="status" 
                                        aria-label="loading"
                                    >
                                
                                    </span>
                                ): (
                                    "Soumettre"
                                )}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddFrais
