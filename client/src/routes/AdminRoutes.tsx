import HomeAdmin from "../pages/Admin/HomeAdmin";
import { Route, Routes } from "react-router";

const AdminRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={ < HomeAdmin />} />
        </Routes>
    </>
  );
};

export default AdminRoutes;
