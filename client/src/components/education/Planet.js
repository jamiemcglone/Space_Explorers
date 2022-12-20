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
const Planet = ({ planet }) => {
    return (
        <Li>
            <Link to={`/${planet.name}`}><div className="imageContainer"> <Img src={planet.image} alt="planet" />
            {/* <div className="centerWords">Enter {planet.name}</div> */}
            </div>
            </Link>
        </Li>
    );
};



export default Planet;
