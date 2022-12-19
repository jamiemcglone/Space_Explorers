import React from 'react';
import Planet from './Planet';
<<<<<<< HEAD
import Styled from 'styled-components';
import { useState } from 'react';
=======
// import { useState } from 'react';
import styled from "styled-components";

>>>>>>> 54da3cb1fa7ca29895d72c1fca11a5e88e36bdd5

const Ul = Styled.ul`
    list-style-type: none;
`

const PlanetList = ({ planets }) => {
    const listOfPlanets = planets.map((planet, index) => {
        return <Planet key={index} planet={planet} />;
    });

<<<<<<< HEAD
    return <Ul>{listOfPlanets}</Ul>;
=======
    return <PlanetNavBar>{listOfPlanets}</PlanetNavBar>;
>>>>>>> 54da3cb1fa7ca29895d72c1fca11a5e88e36bdd5
};

const PlanetNavBar = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style: none;
`

export default PlanetList;
