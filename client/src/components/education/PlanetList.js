import React from 'react';
import Planet from './Planet';
import { useState } from 'react';

const PlanetList = ({planets}) => {
    
    const listOfPlanets = planets.map((planet) => {
     return <Planet key = {planet.index} planet={planet}/>
    })

    return (
        <ul>
            {listOfPlanets}
        </ul>
    );
};

export default PlanetList;
