import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import BuscadorPeliculas from "../pages/BuscadorPeliculas";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        {/* Se crearán futuras rutas según las actividades durante el desarrollo del año, y el /dashboard o /"" pase a ser un menú principal y no la primer actividad*/}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;