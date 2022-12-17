import React from 'react';
import Navigation from '../components/Navigation';
import PlayGameButton from '../components/PlayGameButton';
import Leaderboard from '../components/Leaderboard';
import PlayerService from '../service/PlayerService';
import { useState, useEffect } from 'react'



const Homepage = ({planets}) => {
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
            <h1>Planets</h1>
            <Navigation planets = {planets}/>
            <Leaderboard players={allPlayers} />
            <PlayGameButton />
        </main>
    );
};

export default Homepage;
