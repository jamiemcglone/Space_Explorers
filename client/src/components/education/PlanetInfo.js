import React from 'react';

const PlanetInfo = (planet) => {
    /// generate info about the planet
    console.log(planet.planet.image);

    return (
        <div>
            <h3>{planet.name}</h3>
            <p>{planet.index}</p>
            <img src={planet.planet.image} alt="planet" />
        </div>
    );
};

export default PlanetInfo;
