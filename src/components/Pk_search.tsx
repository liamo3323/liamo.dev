"use client";
import React, { useState, useEffect, useRef } from "react";
import { fetchPokemonDetails } from "@components/Pk_api";
import Pk_display from "@components/Pk_display";

type PokemonDetails = {
  pokemon: {
    sprite: string | undefined;
    name: string;
    Types: string[];
    Abilities: string[];
    BaseStats: {
      HP: number;
      Attack: number;
      Defense: number;
      SpecialAttack: number;
      SpecialDefense: number;
      Speed: number;
    };
    Moves: {
      moveName: string;
      levelLearnedAt: number;
      moveUrl: string;
    }[];
  } | null;
}


type Pokemon = {
  name: string;
  url: string;
};

const Pk_search: React.FC = () => {
  const [search, setSearch] = useState("");
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPokemon, setSelectedPokemon]  = useState<PokemonDetails | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025");
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    fetchPokemon();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearch(query);

    const filtered = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query)
    );

    setFilteredPokemon(filtered);
    setShowDropdown(filtered.length > 0);
  };

  const handlePokemonClick = async (pokemon: Pokemon) => {
    setSearch(pokemon.name);
    setShowDropdown(false);

    try {
      const pkmn = await fetchPokemonDetails(pokemon.name); 
      setSelectedPokemon(pkmn); 
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px", position: "relative" }}>
      <h2>Pokémon Search</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search for a Pokémon..."
        value={search}
        onChange={handleSearch}
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      {showDropdown && (
        <div
          ref={dropdownRef}
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            marginTop: "5px",
            maxHeight: "200px",
            overflowY: "auto",
            zIndex: 10,
            width: "300px",
          }}
        >
          <ul style={{ listStyle: "none", padding: "10px", margin: 0 }}>
            {filteredPokemon.slice(0, 10).map((pokemon, index) => (
              <li 
                key={index} 
                style={{ padding: "5px 0", cursor: "pointer" }}
                onClick={() => handlePokemonClick(pokemon)} // ✅ Works now!
              >
                {pokemon.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedPokemon && <Pk_display pokemon={selectedPokemon} />} {/* ✅ Now it displays */}
    </div>
  );
};

export default Pk_search;
