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
const Img = styled.img`
    height: 10rem;
    width: auto;
    &:hover {
        transform: scale(1.1);
        filter: drop-shadow(3px 5px 6px rgb(53, 53, 240));
    }
`;
const ImgContainer = styled.div`
    position: relative;
    text-align: center;
    padding: 1rem;
`;
const Planet = ({ planet }) => {
    return (
        <Li>
            <Link to={`/${planet.name}`}>
                <ImgContainer>
                    {' '}
                    <Img src={planet.image} alt='planet' />
                    {/* <div className="centerWords">Enter {planet.name}</div> */}
                </ImgContainer>
            </Link>
        </Li>
    );
};

export default Planet;
