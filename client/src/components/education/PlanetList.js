import React from 'react';
import Planet from './Planet';

const PlanetList = (planets) => {

    const listOfPlanets = planets.map((planet) => {
        return <Planet planet={planet}/>
    })

    return (
        <ul>
            {listOfPlanets}
        </ul>
    );
};

export default PlanetList;
