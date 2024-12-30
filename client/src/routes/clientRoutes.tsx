import { Routes, Route } from "react-router";
import HomeClient from "../pages/client/Home/Home";
import DashboardClient from "../components/client/Dashboard/Dashbord";
import PaymentClientFrais from "../components/client/Payment/PaymentClientFrais";
import Notification from "../components/client/Notification/Notification";
import Historique from "../components/client/Historique/Historique";
import Parametre from "../components/client/Parametre/Parametre";

function ClientRoutes() {
  return (
    <>
      <Routes>
        < Route path="/" element={ < HomeClient /> } >
          <Route index element={ < DashboardClient/> } />
          <Route path="/Payment" element={ <PaymentClientFrais />} />
          <Route path="/Notification" element={< Notification />} />
          <Route path="/Historique" element={ < Historique />} />
          <Route path="/Parametre" element={ < Parametre /> } />
        </Route>
    </Routes>
    </>
  );

}

export default ClientRoutes;
