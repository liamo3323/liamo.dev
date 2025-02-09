import React, { useState, useEffect } from "react";
import { fetchPokemonDetails } from "@components/Pk_api";

type Move = {
    moveName: string;
    levelLearnedAt: number;
    moveUrl: string;
};

type Props = {
    moves?: Move[];  // Make moves optional
};

const PokeMoveTable: React.FC<Props> = ({ moves = [] }) => {
    const [pokemonMoves, setPokemonMoves] = useState<Move[]>(moves);
    
    // Fetch Bulbasaur's moves if moves is empty
    useEffect(() => {
        const loadBulbasaurMoves = async () => {
            if (moves.length === 0) {
                try {
                    const bulbasaur = await fetchPokemonDetails("bulbasaur");
                    setPokemonMoves(bulbasaur.Moves);
                } catch (error) {
                    console.error("Error fetching Bulbasaur moves:", error);
                }
            }
        };
        
        loadBulbasaurMoves();
    }, [moves]);

    return (
        <table
            border={1}
            style={{ width: "100%", textAlign: "center", borderCollapse: "collapse" }}
        >
            <thead>
                <tr>
                    <th>Level</th>
                    <th>Move</th>
                </tr>
            </thead>
            <tbody>
                {pokemonMoves.map((move, index) => (
                    <tr key={index}>
                        <td>{move.levelLearnedAt}</td>
                        <td>
                            <a href={move.moveUrl} target="_blank" rel="noopener noreferrer">
                                {move.moveName}
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PokeMoveTable;