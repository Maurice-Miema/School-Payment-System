import { IoLogInOutline } from "react-icons/io5"


function Loginout() {
    return (
        <>
            <div className="mt-72">
                <button 
                    type="button"
                    className="border px-4 py-2 rounded-lg bg-green-500 text-lg text-white flex items-center"
                >
                    < IoLogInOutline size={30} className="mr-2" />
                    Se déconnecté
                </button>
            </div>

            {/* <div className="absolute inset-0 z-10 bg-black bg-opacity-20 flex h-screen justify-center items-center">
                <div className="bg-white px-2">
                    <h1>Vous le vous </h1>
                </div>
            </div> */}
        </>
    )
}

export default Loginout
