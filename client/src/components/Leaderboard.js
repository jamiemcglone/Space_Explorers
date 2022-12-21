import React, { useState } from 'react';
import styled from 'styled-components';

const Leaderboard = ({ players }) => {

    const LeadberboardContainer = styled.ol`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
        gap: .5rem; 
        padding-inline-start: 0px;  
        `

const LeaderboardItem = styled.li`
    justify-content: center;
    list-style: none;
    color: whitesmoke;
    border: yellow 1px solid;
    padding: 5px;
    margin: 5px;
    width: 12%;
    `
    const sortedPlayers = players.sort((a, b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0))

    const playersToDisplay = sortedPlayers.map((player) => {
        return (
            <LeaderboardItem key={player._id}>
                {player.name} - {player.score} points
            </LeaderboardItem>
        );
    });
    return <LeadberboardContainer>{playersToDisplay}</LeadberboardContainer>;
};

export default Leaderboard;
