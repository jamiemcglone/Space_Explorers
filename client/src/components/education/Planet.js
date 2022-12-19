import React from 'react';
import styled from 'styled-components';
import './Planet.css';
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
const George= styled.div`
    color: transparent;
    &:hover {
            color: yellow;
            text-shadow: 2px 2px red;
            font-style: bold;
            font-size: 2rem;
        }
`
const Planet = ({ planet }) => {
    return (
        <Li>
            <Link to={`/${planet.name}`}><div className="imageContainer"> <Img src={planet.image} alt="planet" /><George className="centerWords">Enter {planet.name}</George>
            </div>
            </Link>
        </Li>
    );
};



export default Planet;
