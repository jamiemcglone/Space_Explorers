import React from 'react';

const PlanetInfo = (planet) => {
    /// generate info about the planet
    console.log(planet)
    return (
        <div>
            <h3>{planet.name}</h3>
            <p>{planet.index}</p>
        </div>
    );
};

export default PlanetInfo;
