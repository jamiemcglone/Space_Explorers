// import { useEffect, useState, useCallback } from "react";
import React from 'react';

const PlanetInfo = (planet) => {
// Trying to solve state persistance, may be a long winded solution
// This would take in the entire planets instead of planet

    /// generate info about the planet
    // console.log(planet.planet.image);
    // console.log(planetToDisplay)

    // const url = window.location.href
    // const splitURL = url.split('/')
    // const planetFromURL = splitURL.slice(-1)[0]
    // console.log(planetFromURL)

    // const [planetToDisplay, setPlanetToDisplay] = useState({})
    // for (planet of planets) {
        // if planet.planet.name === planetFromURL (
            // setPlanetToDisplay(planet.planet)
        // )
    // }

    // Set the return function to be planetToDisplay
    return (
        <div>
            <h3>{planet.name}</h3>
            <p>{planet.index}</p>
            <img src={planet.planet.image} alt="planet" />
        </div>
    );

}

export default PlanetInfo;
