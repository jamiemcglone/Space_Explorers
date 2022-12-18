import React from 'react';
// import { useLocation } from 'react-router-dom';
// const location = useLocation();
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Planet = ({ planet }) => {
    return (
            <PlanetItem>
        <Link to={`/${planet.name}`}>
                {planet.name}
        </Link>    
        </PlanetItem>
    );
};

const PlanetItem = styled.li`
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
`

export default Planet;
