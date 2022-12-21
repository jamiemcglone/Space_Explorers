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

    console.log(allPlayers);

    return (
        <main>
            <Navigation planets={planets} />
            <Leaderboard players={allPlayers} />
            <PlayGameButton />
        </main>
    );
};

export default HomepageContainer;
