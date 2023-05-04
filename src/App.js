import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useState} from "react";

function App() {
  const [pokemon,  setPokemon] = useState([])
  const getPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=900")
        .then(res => {
          console.log(res.data.results)
          setPokemon(res.data.results)
        })
  }
  return (
    <div>
      <button onClick={getPokemon}>Fetch Pokemon</button>
        <ul>

        {pokemon.map(p => (
            <li>{p.name}</li>
        ))}
        </ul>
    </div>
  );
}

export default App;
