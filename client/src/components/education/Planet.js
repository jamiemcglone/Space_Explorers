import React from 'react';
import Styled from 'styled-components';
// import { useLocation } from 'react-router-dom';
// const location = useLocation();
import { Link } from 'react-router-dom';
<<<<<<< HEAD

const Li = Styled.li`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    list-style-type: none;
`

const Planet = ({ planet }) => {
    return (
        <Li>
            <Link to={`/${planet.name}`}>{planet.name}</Link>
            
        </Li>
=======
import styled from 'styled-components';
const Planet = ({ planet }) => {
    return (
            <PlanetItem>
        <Link to={`/${planet.name}`}>
                {planet.name}
        </Link>    
        </PlanetItem>
>>>>>>> 54da3cb1fa7ca29895d72c1fca11a5e88e36bdd5
    );
};

const PlanetItem = styled.li`
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
`

export default Planet;
