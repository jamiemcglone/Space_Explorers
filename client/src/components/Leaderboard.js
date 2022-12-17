import React, { useState } from 'react';

const Leaderboard = ({players}) => {
  
    const playersToDisplay = players.map((player) => {
        return <li key={player._id}>{player.name} {player.score}</li>;
    });
    return <ol>{playersToDisplay}</ol>;
};

export default Leaderboard;
