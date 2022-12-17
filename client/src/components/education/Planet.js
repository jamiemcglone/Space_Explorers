import React from 'react';
import PlanetInfo from './PlanetInfo.js'
// import { useLocation } from 'react-router-dom';
// const location = useLocation();


const Planet = (planet) => {

    const handlePlanetClick = (planet) => {
        window.location.href=`/${planet.name}` //// Linking to education via route Link
        // return <PlanetInfo planet = {planet}/>
    }

    return (
    <li>
        <img src={planet.image} onClick={handlePlanetClick} alt={planet.name}/>
    </li>
        ); 
};

export default Planet;
