import React from 'react';

const PlanetInfo = (planet) => {
    
    /// generate info about the planet
    return (
        <div>
            <h3>{planet.name}</h3>
            <p>{planet.general_info}</p>
            <img src={planet.img} alt="Image of planet"/>
        </div>
    )
};

export default PlanetInfo;
