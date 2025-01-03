import { Route, Routes } from "react-router"
import Login from "./pages/auth/Login"
import AdminRoutes from "./routes/AdminRoutes";
import ClientRoutes from "./routes/clientRoutes";
import Register from "./pages/auth/Register";

function App() {
  return (
    <>
      <main className="">
        <Routes>
          {/* LES ROUTES A LA RACINE */}
          <Route path="/" element={< Login />} />
          <Route path="/register" element={ < Register/>} />

          {/* LES ROUTES POUR LES CLIENTS */}
          <Route path="/Home/*" element={ < ClientRoutes />} />

          {/* LES ROUTES POUR LES ADMINS */}
          <Route path="/Admin/*" element={ <AdminRoutes />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
