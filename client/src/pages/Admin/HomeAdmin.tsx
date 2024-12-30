import React, { useState } from "react";

// les iconnes 
import { IoSchoolOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { MdPayment } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { CiMoneyCheck1 } from "react-icons/ci";
import { TbDeviceAnalytics } from "react-icons/tb";

// les composents
import DashbordAdmin from "../../components/Admin/DashboardAdmin";
import GestiondeFrais from "../../components/Admin/GestiondeFrais";

function HomeAdmin() {
    const VIEWS = {
        VIEW1: "view1",
        VIEW2: "view2",
        VIEW3: "view3",
        VIEW4: "view4",
        VIEW5: "view5",
        VIEW6: "view6"
    }

    const [ActiveView, setActiveView] = useState(VIEWS.VIEW1);
    
    return(
        <>
            {/* le grid principal */}
            <section className="grid grid-cols-1 md:grid-cols-GridAdmin">
                <section className="border border-r-2 h-screen md:overflow-auto overflow-auto">
                    <div className="px-5 py-5">
                        <div>
                            <div className="flex justify-center">
                                <IoSchoolOutline size={35} className="text-green-600" />
                            </div>
                            <h1 className="flex text-2xl md:justify-center md:text-4xl">UNILU</h1>
                        </div>

                        <div className="mt-16">
                            <button 
                                type="button"
                                onClick={()=> setActiveView(VIEWS.VIEW1)}
                                className={ActiveView === VIEWS.VIEW1 ? "flex items-center w-full text-xl py-2 mb-2 bg-green-600 text-white rounded-lg" : "text-gray-600 py-2 mb-2 flex items-center w-full text-xl"}
                            >
                                < RxDashboard size={25} className="mx-2"/>
                                Dashbord
                            </button>

                            <button 
                                type="button"
                                onClick={()=> setActiveView(VIEWS.VIEW2)}
                                className={ActiveView === VIEWS.VIEW2 ? "flex text-left items-center w-full text-xl py-2 mb-2 bg-green-600 text-white rounded-lg" : "text-gray-600 text-left py-2 mb-2 flex items-center w-full text-xl"}
                            >
                                < GrGroup size={25} className="mx-2"/>
                                Gestion des étudiants
                            </button>

                            <button 
                                type="button"
                                onClick={()=> setActiveView(VIEWS.VIEW3)}
                                className={ActiveView === VIEWS.VIEW3 ? "flex text-left items-center w-full text-xl py-2 mb-2 bg-green-600 text-white rounded-lg" : "text-gray-600 text-left py-2 mb-2 flex items-center w-full text-xl"}
                            >
                                < MdPayment size={25} className="mx-2"/>
                                Gestion des paiements
                            </button>

                            <button 
                                type="button"
                                onClick={()=> setActiveView(VIEWS.VIEW4)}
                                className={ActiveView === VIEWS.VIEW4 ? "flex text-left items-center w-full text-xl py-2 mb-2 bg-green-600 text-white rounded-lg" : "text-gray-600 text-left py-2 mb-2 flex items-center w-full text-xl"}
                            >
                                < IoNotificationsOutline size={25} className="mx-2"/>
                                Notifications et rappels
                            </button>   

                            

                            <button 
                                type="button"
                                onClick={()=> setActiveView(VIEWS.VIEW5)}
                                className={ActiveView === VIEWS.VIEW5 ? "flex items-center w-full text-xl py-2 mb-2 bg-green-600 text-white rounded-lg" : "text-gray-600 py-2 mb-2 flex items-center w-full text-xl"}
                            >
                                < CiMoneyCheck1 size={25} className="mx-2"/>
                                Gestion des frais
                            </button>

                            <button 
                                type="button"
                                onClick={()=> setActiveView(VIEWS.VIEW6)}
                                className={ActiveView === VIEWS.VIEW6 ? "flex items-center w-full text-xl py-2 mb-2 bg-green-600 text-white rounded-lg" : "text-gray-600 py-2 mb-2 flex items-center w-full text-xl"}
                            >
                                < TbDeviceAnalytics size={25} className="mx-2"/>
                                Rapports et analyses
                            </button>

                        </div>
                    </div>
                </section>

                <section className="bg-white h-screen px-4 md:overflow-auto md:px-8 py-2 overflow-auto">

                    {/* POUR LE DASHBOARD */}
                    {ActiveView === "view1" && (
                        <>
                            <section>
                                < DashbordAdmin />
                            </section>
                        </>
                    )}

                    {/* POUR LE PAIEMENT DE FRAIS */}
                    {ActiveView === "view2" && (
                        <>
                            <section>
                                {/* <PaymentClientFrais /> */}
                                <h1>bonjour</h1>
                            </section>
                        </>
                    )}


                    {/* POUR LE NOTIFICATION */}
                    {ActiveView === "view3" && (
                        <>
                            <h2>fdhjkb</h2>
                        </>
                    )}


                    {/* POUR L'HISTORIQUE */}
                    {ActiveView === "view4" && (
                        <>
                            <h2>fdhjkb</h2>
                        </>
                    )}


                    {/* POUR LE PARAMETRE */}
                    {ActiveView === "view5" && (
                        <>
                            <section>
                                < GestiondeFrais />
                            </section>
                        </>
                    )}

                    {/* POUR LE PARAMETRE */}
                    {ActiveView === "view6" && (
                        <>
                            <h2>fdhjkb</h2>
                        </>
                    )}

                </section>
            </section>
        </>
    )
}

export default HomeAdmin;