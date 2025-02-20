import { useForm } from 'react-hook-form';
import 'react-phone-input-2/lib/style.css';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from 'react';

type DataFriasAdmin = {
    id: number;
    titre: string;
    Date_debut: string;
    Date_fin: string;
    Date_creation: string;
    montant: string;
    promotion: string;
}

interface ModifyFrais {
    onClose: () => void;
    selectedFrais: DataFriasAdmin | null;
}

function ModifyFraisScolaire({ onClose, selectedFrais }: ModifyFrais) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    
    if (!selectedFrais) return null;

    const promotionsValides = ["7eme", "8eme", "3eme", "4eme", "5eme", "6eme"] as const;
    const Schemafrais = z.object({
        id: z.number(),
        titre: z
            .string()
            .min(1, { message: "Le titre est requis" })
            .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, { message: "Le titre ne doit contenir que des lettres" }),
        montant: z
        .number({
            invalid_type_error: "Le montant doit être un nombre.",
        })
        .positive("Le montant doit être supérieur à 0."),
        date_debut: z.string().refine((val) => !isNaN(Date.parse(val)), "La date de début est invalide."),
        date_fin: z.string().refine((val) => !isNaN(Date.parse(val)), "La date de fin est invalide."),
        promotion: z.enum(["7eme", "8eme", "3eme", "4eme", "5eme", "6eme"], {
            message: "Sélectionnez une promotion valide",
        }),
    });

    type FormData = z.infer<typeof Schemafrais>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(Schemafrais),
        defaultValues: {
            id: selectedFrais.id,
            titre: selectedFrais.titre,
            montant: Number(selectedFrais.montant),
            date_debut: selectedFrais.Date_debut ? new Date(selectedFrais.Date_debut).toISOString().split("T")[0] : "",
            date_fin: selectedFrais.Date_fin ? new Date(selectedFrais.Date_fin).toISOString().split("T")[0] : "",
            promotion: typeof selectedFrais.promotion === "string" && promotionsValides.includes(selectedFrais.promotion as any)
            ? (selectedFrais.promotion as typeof promotionsValides[number])
            : undefined,
        },
    });

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        setErrorMessage(null);
        console.log("Data envoyée :", data);

        try {
            const response = await fetch("https://school-payment-system.onrender.com/api/v2/datafrias/PutFrais", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                onClose();
            } else {
                setErrorMessage("Erreur d'envoi, veuillez réessayer.");
            }
        } catch (error) {
            setErrorMessage("Impossible de se connecter au serveur. Vérifiez votre connexion.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-screen absolute z-20 inset-0 flex justify-center items-center bg-black bg-opacity-55 backdrop-blur-md transition-all duration-500 ease-in-out">
            <div className="bg-white px-4 transition duration-1500 ease-in-out font-Roboto py-2 rounded-lg w-11/12 md:w-7/12 lg:w-4/12">
                <div className="mb-4 flex justify-center items-center">
                    <h1 className="text-2xl">Modifier Les Frais</h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

                    {/* Champ Titre */}
                    <div className="mb-2">
                        <label htmlFor="input-titre" className="block text-sm font-medium mb-2">Titre de frais</label>
                        <input
                            type="text"
                            id="input-titre"
                            placeholder="Titre de frais"
                            {...register("titre")}
                            className={`py-3 px-4 block w-full border rounded-lg text-sm focus:outline-green-300 ${
                                errors.titre ? "border-red-500 focus:outline-red-500" : "border-gray-300"
                            }`}
                        />
                        {errors.titre && <p className="text-red-500">{errors.titre.message}</p>}
                    </div>

                    {/* Champ Montant */}
                    <div className="mb-2">
                        <label htmlFor="input-montant" className="block text-sm font-medium mb-1">Montant</label>
                        <input
                            type="text"
                            id="input-montant"
                            placeholder="Montant"
                            {...register("montant")}
                            className={`py-3 px-4 block w-full border rounded-lg text-sm focus:outline-green-300 ${
                                errors.montant ? "border-red-500 focus:outline-red-500" : "border-gray-300"
                            }`}
                        />
                        {errors.montant && <p className="text-red-500">{errors.montant.message}</p>}
                    </div>

                    {/* Champ Date Début */}
                    <div className="mb-2">
                        <label htmlFor="input-date-debut" className="block text-sm font-medium mb-1">Date Début</label>
                        <input
                            type="date"
                            id="input-date-debut"
                            {...register("date_debut")}
                            className={`py-3 px-4 block w-full border rounded-lg text-sm focus:outline-green-300 ${
                                errors.date_debut ? "border-red-500 focus:outline-red-500" : "border-gray-300"
                            }`}
                        />
                        {errors.date_debut && <p className="text-red-500">{errors.date_debut.message}</p>}
                    </div>

                    {/* Champ Date Fin */}
                    <div className="mb-2">
                        <label htmlFor="input-date-fin" className="block text-sm font-medium mb-1">Date Fin</label>
                        <input
                            type="date"
                            id="input-date-fin"
                            {...register("date_fin")}
                            className={`py-3 px-4 block w-full border rounded-lg text-sm focus:outline-green-300 ${
                                errors.date_fin ? "border-red-500 focus:outline-red-500" : "border-gray-300"
                            }`}
                        />
                        {errors.date_fin && <p className="text-red-500">{errors.date_fin.message}</p>}
                    </div>

                    {/* Champ Promotion */}
                    <div className="mb-2">
                        <label htmlFor="input-promotion" className="block text-sm font-medium mb-1">Promotion</label>
                        <select
                            id="input-promotion"
                            {...register("promotion")}
                            className={`py-3 px-4 block w-full border rounded-lg text-sm focus:outline-green-300 ${
                                errors.promotion ? "border-red-500 focus:outline-red-500" : "border-gray-300"
                            }`}
                        >
                            <option value="">Choisir une promotion</option>
                            {["7eme", "8eme", "3eme", "4eme", "5eme", "6eme"].map((promo) => (
                                <option key={promo} value={promo}>{promo}</option>
                            ))}
                        </select>
                        {errors.promotion && <p className="text-red-500">{errors.promotion.message}</p>}
                    </div>

                    <div className="flex justify-between">
                        <button onClick={onClose} className="border w-1/2 px-4 py-2 mt-4 rounded-lg bg-red-400 text-white text-xl">Annuler</button>
                        <button type="submit" disabled={isLoading} className="border w-1/2 px-4 py-2 mt-4 rounded-lg bg-green-500 text-white text-xl">
                            {isLoading ? "Chargement..." : "Soumettre"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModifyFraisScolaire;
