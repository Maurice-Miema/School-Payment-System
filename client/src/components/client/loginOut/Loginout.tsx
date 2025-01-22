import { useState } from "react";
import { IoLogInOutline } from "react-icons/io5"


function Loginout() {
    const [isMenu, setIsMenu] = useState(false);
    const handleOpen = () =>{
        setIsMenu(true);
    }
    const handleClose = () => {
        setIsMenu(false);
    }
    return (
        <>
            <div className="mt-64">
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
                <div className="absolute inset-0 z-10 bg-black bg-opacity-65 flex h-screen justify-center items-center">
                    <div className="bg-white px-2 py-4 rounded-lg w-11/12 md:w-7/12 lg:w-4/12">
                        <div className="py-4">
                            <h1 className="text-2xl flex justify-center">Voulez vous vous Déconnecter ?</h1>
                        </div>

                        <div className="flex justify-center gap-4">
                            <button type="button" onClick={handleClose} className="px-6 bg-red-600 text-white text-base py-2 border rounded-lg">Non</button>
                            <button type="button" className="px-6 bg-green-600 text-white text-base py-2 border rounded-lg">Oui</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Loginout
