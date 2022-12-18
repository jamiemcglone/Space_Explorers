import React from 'react';
import Planet from './Planet';
// import { useState } from 'react';
import styled from "styled-components";


const PlanetList = ({ planets }) => {
    const listOfPlanets = planets.map((planet, index) => {
        return <Planet key={index} planet={planet} />;
    });

    return <PlanetNavBar>{listOfPlanets}</PlanetNavBar>;
};

const PlanetNavBar = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style: none;
`

export default PlanetList;
