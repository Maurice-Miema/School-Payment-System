import { useState } from "react";
import { IoLogInOutline } from "react-icons/io5"
import { FiAlertTriangle } from "react-icons/fi";
import { useNavigate } from "react-router";


function Loginout() {
    const [isMenu, setIsMenu] = useState(false);
    const [Isloading, setIsloading] = useState(false);
    const navigate = useNavigate();
    const handleOpen = () =>{
        setIsMenu(true);
    }
    const handleClose = () => {
        setIsMenu(false);
        setIsloading(false);

    }

    const OutLogin = () => {
        setIsloading(true);
        const removetoken = localStorage.removeItem("token");
        const removeUser = localStorage.removeItem("user");
        console.log("token remouve :", removetoken, removeUser);
        navigate("/");
    }
    return (
        <>
            <div className="mt-[46vh]">
                <button 
                    type="button"
                    onClick={handleOpen}
                    className="border px-4 py-2 rounded-lg bg-green-500 text-lg text-white flex items-center"
                >
                    < IoLogInOutline size={30} className="mr-2" />
                    Se déconnecté
                </button>
            </div>

            {isMenu && (
                <div className="absolute inset-0 z-10 bg-black bg-opacity-55 backdrop-blur-md flex h-screen justify-center items-center">
                    <div className="bg-white shadow-xl px-2 py-4 rounded-lg w-11/12 md:w-7/12 lg:w-4/12">
                        <div className="flex justify-center items-center">
                            < FiAlertTriangle size={100} color="#e11d48"  />
                        </div>
                        <div className="py-4">
                            <h1 className="text-2xl flex justify-center">Voulez vous vous Déconnecter ?</h1>
                        </div>

                        <div className="flex justify-center gap-4">
                            <button type="button" onClick={handleClose} className="px-6 bg-red-600 text-white text-base py-2 border rounded-lg">Non</button>
                            <button type="button" onClick={OutLogin} className="px-6 bg-green-600 text-white text-base py-2 border rounded-lg">
                                {Isloading ? (
                                    <span 
                                        className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" 
                                        role="status" 
                                        aria-label="loading"
                                    >
                                        
                                    </span>
                                ) : ("Oui")}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Loginout
