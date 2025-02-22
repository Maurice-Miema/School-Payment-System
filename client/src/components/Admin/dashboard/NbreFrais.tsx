import { useState, useEffect } from "react";
import axios from "axios";

function NbreFraisSoumis() {
    const [TotalFrais, setTotalFrais] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [Isloading, setloading] = useState<boolean>(true);

    useEffect(()=> {
        const FetchId = async ()=> {
            try {
                const reponse = await axios.get("https://school-payment-system.onrender.com/api/v2/datafrias/TotalFraisdmin");
                console.log("data frais :", reponse);
                setTotalFrais(reponse.data.NombreFrais);
                setloading(false);

            } catch (error) {
                setError("Erreur");
                console.error("message d'erreur", error);
            }finally{
                setloading(false);
            }
        }
        FetchId();
    }, []);

    return (
        <div>
            {Isloading ? (
                <div className="flex justify-center h-10 items-center">
                    <span 
                        className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" 
                        role="status" 
                        aria-label="loading"
                    ></span>
                </div>
            ): error ? (
                <p className="text-red-500"> 0 </p>
            ): (
                <h1> {TotalFrais} </h1>
            )}

        </div>
    )
}

export default NbreFraisSoumis;
