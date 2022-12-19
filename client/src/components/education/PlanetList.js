import React from 'react';
import Planet from './Planet';
import Styled from 'styled-components';
import { useState } from 'react';

const Ul = Styled.ul`
    list-style-type: none;
`

const PlanetList = ({ planets }) => {
    const listOfPlanets = planets.map((planet, index) => {
        return <Planet key={index} planet={planet} />;
    });

    return <Ul>{listOfPlanets}</Ul>;
};

export default PlanetList;
