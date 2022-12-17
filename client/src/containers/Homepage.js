import React from 'react';
import Navigation from '../components/Navigation';
import PlayGameButton from '../components/PlayGameButton';
import Leaderboard from '../components/Leaderboard';
import PlanetService from '../service/PlanetService';
import { useState, useEffect } from 'react'



const Homepage = () => {

    const [planets, setPlanets] = useState([])

    useEffect(() => {
      PlanetService.getPlanets()
        .then(planets => setPlanets(planets))
    }, [])

    return (
        <main>
            <h1>Planuts</h1>
            <Navigation planets={planets}/>
            <Leaderboard />
            <PlayGameButton />
        </main>
    );
};

export default Homepage;
