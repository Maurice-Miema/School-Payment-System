import { useState } from "react";
import { useForm } from "react-hook-form";
import {Link, useNavigate} from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


function Login() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // pour le message du server
    const [isLoading, setIsLoading] = useState<boolean>(false); // pour le loading au niveau du btn
    const navigate = useNavigate(); // pour la redirection

    // le schema de données de user
    const userShema = z.object({
        nom: z.string().min(1,),
        postnom: z.string().min(1),
        password: z.string().min(1,),
    });

    type FormData = z.infer<typeof userShema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(userShema),
    });
    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        setErrorMessage(null);
        try {
            const reponse = await fetch("http://localhost:3000/api/v1/user/connexion", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const resultat = await reponse.json();
            if(reponse.ok){
                const { token, user }: { token: string; user: { role: string; [key: string]: any } } = resultat;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                if(user.role === "eleve"){
                    navigate("/Home");
                } else{
                    navigate("/Admin");
                }
            } else{
                setErrorMessage("Nom  ou Password est incorrect ");
            }
        } catch (error) {
            setErrorMessage("Impossible de se connecter au serveur verifier votre connexion");
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <section className="h-screen bg-slate-50 flex items-center justify-center ">
            
            <div className="bg-white px-4 font-Roboto py-2 shadow-lg rounded-lg w-11/12 md:w-7/12 lg:w-4/12">
                <div className="mb-8 flex justify-center">
                    <h1 className="text-2xl">Connexion </h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {errorMessage &&
                        <p className="text-red-500 text-center"> {errorMessage} </p> 
                    }
                    {/* item input */}
                    <div className="mb-2 ">
                        <label htmlFor="input-nom" className="block text-sm font-medium mb-2 ">Nom</label>
                        <input
                            {...register("nom", { required: "l'email"})} 
                            type="code" 
                            id="input-nom" 
                            placeholder="Nom"
                            className={`py-3 px-4 block w-full border rounded-lg text-sm   focus:outline-green-300 disabled:pointer-events-none ${errors.nom ? "border-red-500 border-2 focus:outline-red-500" : "border-gray-300"}`}
                        />
                    </div>
                    { /* End item */}

                    {/* item input */}
                    <div className="mb-2 ">
                        <label htmlFor="input-postnom" className="block text-sm font-medium mb-2 ">Postnom</label>
                        <input
                            {...register("postnom", { required: "l'email"})} 
                            type="code" 
                            id="input-postnom" 
                            placeholder="Postnom"
                            className={`py-3 px-4 block w-full border rounded-lg text-sm   focus:outline-green-300 disabled:pointer-events-none ${errors.postnom ? "border-red-500 border-2 focus:outline-red-500" : "border-gray-300"}`}
                        />
                    </div>
                    { /* End item */}

                    {/* item input */}
                    <div className="mb-2">
                        <label htmlFor="input-password" className="block text-sm font-medium mb-2 ">Mot de pase</label>
                        <input 
                            {...register("password", {required: "le password est requis"})}
                            type="password" 
                            id="input-password" 
                            placeholder="********"
                            className={`py-3 px-4 block w-full border rounded-lg text-sm   focus:outline-green-300 disabled:pointer-events-none ${errors.password ? "border-red-500 border-2 focus:outline-red-500" : "border-gray-300"}`}
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
                            disabled={isLoading}
                            type="submit"
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
                                "Envoyer"
                            )}
                        </button>
                    </div>
                </form>

                <div className="mt-4">
                    <span>
                        Vous n'avez pas un compte ?
                        <Link 
                            to="/Register"
                            className="ml-2 text-green-500"
                        >
                            S'inscrire
                        </Link>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Login;