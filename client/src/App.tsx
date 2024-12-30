import { Route, Routes } from "react-router"
import Login from "./pages/Auth/Login"
import AdminRoutes from "./routes/AdminRoutes";
import ClientRoutes from "./routes/clientRoutes";

function App() {
  return (
    <>
      <main className="">
        <Routes>
          {/* LES ROUTES A LA RACINE */}
          <Route path="/" element={< Login />} />

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
