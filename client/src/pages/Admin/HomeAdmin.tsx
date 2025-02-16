import { Link, Outlet, useLocation } from "react-router";

// les iconnes 
import { IoSchoolOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { MdPayment } from "react-icons/md";
// import { IoNotificationsOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { CiMoneyCheck1 } from "react-icons/ci";
import { TbDeviceAnalytics } from "react-icons/tb";
import Loginout from "../../components/Admin/loginOut/Loginout";


function HomeAdmin() {    
    const Location = useLocation();
    const IsActive = (path: string) => (Location.pathname === path ? "flex text-left items-center w-full text-xl py-2 mb-2 bg-green-600 text-white rounded-lg" : "");
    return(
        <>
            {/* le grid principal */}
            <section className="grid grid-cols-1 md:grid-cols-GridAdmin">
                <section className="border border-r-2 h-screen md:overflow-auto overflow-auto bg-slate-50">
                    <div className="px-5 py-5">
                        <div>
                            <div className="flex justify-center">
                                <IoSchoolOutline size={35} className="text-green-600" />
                            </div>
                            <h1 className="flex text-2xl md:justify-center md:text-4xl">UNILU</h1>
                        </div>

                        <ul className="mt-16">

                            <li>
                                <Link
                                    to="/Admin"
                                    className={`text-gray-600 text-left py-2 mb-2 flex items-center w-full text-xl ${IsActive("/Admin")}`}
                                >
                                    < RxDashboard size={25} className="mx-2"/>
                                    Dashbord

                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/Admin/Gestiondefrais"
                                    className={`text-gray-600 py-2 mb-2 flex items-center w-full text-xl ${IsActive("/Admin/Gestiondefrais")}`}
                                >
                                    < CiMoneyCheck1 size={25} className="mx-2"/>
                                    Gestion des frais
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/Admin/Gestionpayment"
                                    className={`text-gray-600 text-left py-2 mb-2 flex items-center w-full text-xl ${IsActive("/Admin/Gestionpayment")}`}
                                >
                                    < MdPayment size={25} className="mx-2"/>
                                    Gestion des paiements

                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/Admin/Gestionetudiant"
                                    className={`text-gray-600 text-left py-2 mb-2 flex items-center w-full text-xl ${IsActive("/Admin/Gestionetudiant")}`}
                                >
                                    < GrGroup size={25} className="mx-2"/>
                                    Gestion des étudiants

                                </Link>
                            </li>

                            {/* <li>
                                <Link
                                    to="/Admin/Notification"
                                    className={`text-gray-600 text-left py-2 mb-2 flex items-center w-full text-xl ${IsActive("/Admin/Notification")}`}
                                >
                                    < IoNotificationsOutline size={25} className="mx-2"/>
                                    Notifications et rappels

                                </Link>
                            </li>    */}

                            <li>
                                <Link
                                    to="/Admin/Rapport"
                                    className={`text-gray-600 py-2 mb-2 flex items-center w-full text-xl ${IsActive("/Admin/Rapport")}`}
                                >
                                    < TbDeviceAnalytics size={25} className="mx-2"/>
                                    Rapports et analyses
                                </Link>
                            </li>
                        </ul>

                        <div>
                            < Loginout />
                        </div>

                    </div>

                </section>

                <section className="bg-white h-screen px-4 md:overflow-auto md:px-8 py-2 overflow-auto">
                    < Outlet />
                </section>
            </section>
        </>
    )
}

export default HomeAdmin;