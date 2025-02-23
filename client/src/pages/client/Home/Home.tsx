import { Outlet, Link, useLocation } from "react-router";

// les iconnes 
import { RxDashboard } from "react-icons/rx";
import { MdPayment } from "react-icons/md";
import { MdManageHistory } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import Loginout from "../../../components/client/loginOut/Loginout";

function HomeClient() {
    const Location = useLocation();
    const IsActive = (pash: string) => (Location.pathname === pash ? "flex  items-center w-full text-xl py-2 mb-2 text-green-500 rounded-lg" : "");
    
    const storedUser = localStorage.getItem("user"); 
    const user = storedUser ? JSON.parse(storedUser) : null;
    console.log("les infos de l'utilisatereur :", user)
    
    return(
        <>
            {/* le grid principal */}
            <section className="grid grid-cols-1 md:grid-cols-GridClient">
                <section className="border border-r-2 h-screen md:overflow-auto overflow-auto bg-slate-50">
                    <div className="px-5 py-5 h-[98vh]">
                        <div>
                            <div className="flex justify-center">
                                {/* <IoSchoolOutline size={35} className="text-green-600" /> */}
                            </div>
                            <h1 className="flex text-2xl md:justify-center md:text-4xl">C.S META</h1>
                        </div>

                        <ul className="mt-16">
                            <li>
                                <Link 
                                    type="button"
                                    to="/Home"
                                    className={`text-gray-600 py-2 mb-2 flex items-center w-full text-xl ${IsActive("/Home")}`}
                                >
                                    < RxDashboard size={25} className="mx-2"/>
                                    Dashbord
                                </Link>
                                
                            </li>

                            <li>
                                <Link 
                                    type="button"
                                    to="/Home/Payment"
                                    className={`text-gray-600 py-2 mb-2 flex items-center w-full text-xl ${IsActive("/Home/Payment")}`}
                                >
                                    < MdPayment size={25} className="mx-2"/>
                                    Paiement des frais
                                </Link>
                            </li>

                            <li>
                                <Link 
                                    type="button"
                                    to="/Home/Historique"
                                    className={`text-gray-600 py-2 mb-2 flex items-center w-full text-xl ${IsActive("/Home/Historique")}`}
                                >
                                    < MdManageHistory size={25} className="mx-2"/>
                                    Historique 
                                </Link>  
                            </li> 

                            
                            {/* <li>
                                <Link 
                                    type="button"
                                    to="/Home/Parametre"
                                    className={`text-gray-600 py-2 mb-2 flex items-center w-full text-xl ${IsActive("/Home/Parametre")}`}
                                >
                                    < IoSettingsOutline size={25} className="mx-2"/>
                                    Parametre
                                </Link>
                            </li> */}

                        </ul>

                        <div>
                            < Loginout />
                        </div>
                    </div>
                </section>

                {/* Partie de dashboard  */}
                <section className="bg-white h-screen px-4 md:overflow-auto md:px-8 py-2 overflow-auto">

                    < Outlet />

                </section>
            </section>
        </>
    )
}

export default HomeClient;