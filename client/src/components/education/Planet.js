import React from 'react';
import styled from 'styled-components';
// import { useLocation } from 'react-router-dom';
// const location = useLocation();
import { Link } from 'react-router-dom';

const Li = styled.li`
    text-decoration: none;
    list-style-type: none; 
`;
const Img= styled.img`
    height:10rem;
    width:auto;
`

const Planet = ({ planet }) => {
    return (
        <Li>
            <Link to={`/${planet.name}`}> <Img src={planet.image} alt="planet" /> </Link>
        </Li>
    );
};



export default Planet;
