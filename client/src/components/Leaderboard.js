import React, { useState } from 'react';

const Leaderboard = () => {
    const [allPlayers] = useState([
        { name: 'Amazing Player', index: 1 },
        { name: 'Great Player', index: 2 },
        { name: 'Phenomenal Player', index: 4 },
        { name: 'Phenomenal Player', index: 5 },
        { name: 'Phenomenal Player', index: 6 },
        { name: 'Phenomenal Player', index: 7 },
        { name: 'Phenomenal Player', index: 8 },
        { name: 'Phenomenal Player', index: 9 },
    ]);
    const players = allPlayers.map((player) => {
        return <li key={player.index}>{player.name}</li>;
    });
    return <ol>{players}</ol>;
};

export default Leaderboard;
