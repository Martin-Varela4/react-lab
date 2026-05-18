import { useState } from "react";
import "./BuscadorPeliculas.css";

function BuscadorPeliculas() {

  const peliculas = [
    "Batman",
    "Spider-Man",
    "Interstellar",
    "Inception",
    "Avatar",
    "Titanic",
    "The Matrix",
    "Joker"
  ];


  const [busqueda, setBusqueda] = useState("");

  const peliculasFiltradas = peliculas.filter((pelicula) => {

    return pelicula
      .toLowerCase()
      .includes(busqueda.toLowerCase());

  });

  return (

    <div className="buscador-container">

      <h2 className="h2-peli">Buscador de Películas</h2>

      <input className="buscador-input"
        type="text"
        placeholder="Buscar película..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}/>


      {
        peliculasFiltradas.length === 0 ? (

          <p className="SinRes">Sin resultados</p> ) : (
      
          <li className="lista-peliculas">
          <p className="Disponibles">Disponibles</p>

            {
              peliculasFiltradas.map((pelicula, index) => (
                <li key={index}>
                  {pelicula}
                </li>))}

          </li>

        )
      }
    </div>
  );
}

export default BuscadorPeliculas;