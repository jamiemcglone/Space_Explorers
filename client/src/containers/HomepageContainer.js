import React from 'react';
import Navigation from '../components/Navigation';
import PlayGameButton from '../components/PlayGameButton';
import Leaderboard from '../components/Leaderboard';
import PlayerService from '../service/PlayerService';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const HomepageContainer = ({ planets }) => {
    const [allPlayers, setAllPlayers] = useState([]);
    useEffect(() => {
        PlayerService.getPlayers().then((players) => setAllPlayers(players));
    }, []);

    const LeaderboardAndGameFlexContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        flex-wrap: nowrap;
    `

    return (
        <main>
            <Navigation planets={planets} />
            <LeaderboardAndGameFlexContainer>
                <Leaderboard players={allPlayers} />
                <PlayGameButton />
            </LeaderboardAndGameFlexContainer>
        </main>
    );
};

export default HomepageContainer;
