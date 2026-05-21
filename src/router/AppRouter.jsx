import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import BuscadorPeliculas from "../pages/BuscadorPeliculas";
import BuscadorPokemon from  "../pages/BuscadorPokemon";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/Pokemon"element={<BuscadorPokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;