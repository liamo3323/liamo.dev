import React from "react";

type Move = {
    moveName: string;
    levelLearnedAt: number;
    moveUrl: string;
};

type Props = {
    moves: Move[];
};

const PokeMoveTable: React.FC<Props> = ({ moves }) => {
    return (
    <table border={1} style={{ width: "100%", textAlign: "center", borderCollapse: "collapse" }}>
        <thead>
        <tr>
            <th>Level</th>
            <th>Move</th>
        </tr>
        </thead>
        <tbody>
        {moves.map((move, index) => (
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
