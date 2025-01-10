import z from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

function AddFrais() {
    const Schemafrais = z.object({
        titre: z.string().min(2),
        montant: z.number().min(2),
        date_debut: z.date(),
        date_fin: z.date(),
        promotion: z.enum(["7 ieme", "8 ieme", "3 ieme", "4 ieme", "5 ieme", "6 ieme"]),
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
        console.log("data :", data);
    }
    return (
        <div className="h-screen absolute inset-0 flex justify-center items-center bg-black bg-opacity-35">
            <div className="bg-white px-4 font-Roboto py-2 shadow-lg rounded-lg w-11/12 md:w-7/12 lg:w-4/12">
                <div className="mb-4 flex justify-center">
                    <h1 className="text-2xl">Ajouter Les Frais</h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
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
                                <option value="1">7 iema</option>
                                <option value="2">8 iema</option>
                                <option value="3">3 iema</option>
                                <option value="4">4 iema</option>
                                <option value="5">5 iema</option>
                                <option value="6">6 iema</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <button 
                            type="button"
                            className="border w-full px-4 py-2 mt-4 rounded-lg bg-green-500 text-white text-xl"
                        >
                            Soumettre
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddFrais
