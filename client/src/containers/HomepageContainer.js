import React from 'react';
import Navigation from '../components/Navigation';
import PlayGameButton from '../components/PlayGameButton';
import Leaderboard from '../components/Leaderboard';
import PlayerService from '../service/PlayerService';
import Styled from 'styled-components';
import { useState, useEffect } from 'react'



const HomepageContainer = ({planets}) => {
    const [allPlayers,setAllPlayers] = useState([]);
    useEffect(() => {
        PlayerService.getPlayers().then(players =>setAllPlayers(players))
    }, []);
    
    console.log(allPlayers) 

    // const [planets, setPlanets] = useState([])

    // useEffect(() => {
    //   PlanetService.getPlanets()
    //     .then(planets => setPlanets(planets))
    // }, [])

    return (
        <main>
            <Navigation planets = {planets}/>
            <Leaderboard players={allPlayers} />
            <PlayGameButton />
        </main>
    );
};

export default HomepageContainer;
