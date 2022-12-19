import React from 'react';
import Styled from 'styled-components';
// import { useLocation } from 'react-router-dom';
// const location = useLocation();
import { Link } from 'react-router-dom';

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
    );
};

export default Planet;
