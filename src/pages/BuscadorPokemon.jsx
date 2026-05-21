import { useState , useEffect} from "react";
import "./BuscadorPokemon.css";


function BuscadorPokemon() {
    const [query, setQuery] = useState("");
    const [pokemon, setPokemom] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!query) return;
        // codigo acá




    }, [query])

  

}



export default BuscadorPokemon;