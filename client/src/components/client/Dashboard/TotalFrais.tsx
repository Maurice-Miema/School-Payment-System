import { useState, useEffect } from "react";
import axios from "axios";

function TotalFrais() {
    const [TotalFrais, setTotalFrais] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [Isloading, setloading] = useState<boolean>(true);

    const GetPromotionUser = localStorage.getItem("user");
    const user = GetPromotionUser ? JSON.parse(GetPromotionUser) : null;
    const promotionUser = user.promotion;
    useEffect(()=> {
        const FetchPromotion = async ()=> {
            try {
                const reponse = await axios.get("https://school-payment-system.onrender.com/api/v2/datafrias/TotalFrais",{
                    params: { promotionUser }
                });
                setTotalFrais(reponse.data.totalfrais);
                setloading(false);

            } catch (error) {
                setError("Erreur");
                console.error("message d'erreur", error);
            }finally{
                setloading(false);
            }
        }
        FetchPromotion();
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
                <p className="text-red-500"> {error} </p>
            ): (
                <h1> {TotalFrais} FC</h1>
            )}
            
        </div>
    )
}

export default TotalFrais;
