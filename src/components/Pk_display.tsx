import React from 'react';
import Image from 'next/image';
import ProgressBar from './Pk_stat_bar';
import PokeMoveTable from './Pk_move_list';

// interface EvolutionDetails {
//   trigger: { name: string };
//   item?: { name: string } | null; 
//   min_level?: number | null;
//   time_of_day?: string | null;
//   known_move?: { name: string } | null;
//   known_move_type?: { name: string } | null;
//   location?: { name: string } | null;
//   held_item?: { name: string } | null;
//   min_happiness?: number | null;
//   min_beauty?: number | null;
//   min_affection?: number | null;
//   gender?: number | null;
//   relative_physical_stats?: number | null;
//   needs_overworld_rain?: boolean | null;
//   turn_upside_down?: boolean | null;
// }


interface PokemonProps {
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

const Pk_display: React.FC<PokemonProps> = ({ pokemon }) => {
  if (!pokemon) {
    return <p>No Pokémon selected.</p>;
  }
  console.log(pokemon.Moves)
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h3>{pokemon.name}</h3>
      <Image src={pokemon?.sprite || ''} alt={pokemon?.name} width={500} height={500} />
      <p><b>Types</b>: {pokemon.Types.join(", ")}</p>  {/* Directly join strings */}
      <p><b>Abilities:</b> {pokemon.Abilities.join(", ")}</p>  {/* Directly join strings */}
      <ul>
        <li>HP: {pokemon.BaseStats.HP}</li>
        <ProgressBar value={pokemon.BaseStats.HP} max={256} color="#69dc12" />
        <li>Attack: {pokemon.BaseStats.Attack}</li>
        <ProgressBar value={pokemon.BaseStats.Attack} max={256} color="#efcc18" />
        <li>Defense: {pokemon.BaseStats.Defense}</li>
        <ProgressBar value={pokemon.BaseStats.Defense} max={256} color="#e86412" />
        <li>Special Attack: {pokemon.BaseStats.SpecialAttack}</li>
        <ProgressBar value={pokemon.BaseStats.SpecialAttack} max={256} color="#14c3f1" />
        <li>Special Defense: {pokemon.BaseStats.SpecialDefense}</li>
        <ProgressBar value={pokemon.BaseStats.SpecialDefense} max={256} color="#4a6adf" />
        <li>Speed: {pokemon.BaseStats.Speed}</li>
        <ProgressBar value={pokemon.BaseStats.Speed} max={256} color="#d51dad" />
      </ul>

      <p>Moves: <PokeMoveTable moves={pokemon.Moves}/> </p>

    </div>
  );
};

export default Pk_display;