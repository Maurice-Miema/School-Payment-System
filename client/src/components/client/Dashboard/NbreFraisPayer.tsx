import { useState, useEffect } from "react";
import axios from "axios";

function NbreFraisPayer() {
    const [TotalFrais, setTotalFrais] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [Isloading, setloading] = useState<boolean>(true);

    const GetPromotionUser = localStorage.getItem("user");
    const user = GetPromotionUser ? JSON.parse(GetPromotionUser) : null;
    const UserId = user.id;
    console.log("Get Id user :", UserId);

    useEffect(()=> {
        const FetchId = async ()=> {
            try {
                const reponse = await axios.get("http://localhost:3000/api/v2/datafrias/FraisPayerTotal",{
                    params: { UserId }
                });
                console.log("data frais :", reponse);
                setTotalFrais(reponse.data.NumberFraisPayer);
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
    );
}

export default NbreFraisPayer;
