import Cards from "./Cards";
import { useState, useEffect } from "react";

const Services = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0";
  const [pokemon, setPokemon] = useState([]);

  useEffect(async () => {
    const res = await fetch(url);
    const data = await res.json();
    setPokemon(data.results);
  }, []);
  return (
    <section className="section">
      <div className="card-container">
        {pokemon.map((poke, index) => (
          <Cards key={index} title={poke.name} content="wip" />
        ))}
      </div>
    </section>
  );
};

export default Services;
