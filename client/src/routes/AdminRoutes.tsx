import { Route, Routes } from "react-router";
import HomeAdmin from "../pages/Admin/HomeAdmin";
import DashbordAdmin from "../components/Admin/dashboard/DashboardAdmin"
import GestionEtudiant from "../components/Admin/gestEtudiant/GestionEtudiant";
import GestiondeFrais from "../components/Admin/gestiondefrais/GestiondeFrais";
import GestionPayment from "../components/Admin/gestPayment/GestionPayment";
// import Notification from "../components/Admin/notification/Notification";
import Rapport from "../components/Admin/rapport/Rapport";

const AdminRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={ < HomeAdmin />} >
              <Route index element={ < DashbordAdmin/>} />
              <Route path="/Gestionetudiant" element={ < GestionEtudiant /> } />
              <Route path="/Gestionpayment" element={ <GestionPayment />} />
              <Route path="/Gestiondefrais" element={ < GestiondeFrais />} />
              <Route path="/Rapport" element={ <Rapport />} />
            </Route>
        </Routes>
    </>
  );
};

export default AdminRoutes;
