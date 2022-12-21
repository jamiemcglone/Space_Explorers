import React from 'react';
import PlanetList from './education/PlanetList';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const Navigation = ({ planets }) => {
    return (
        <Nav>
            <PlanetList planets={planets} />
        </Nav>
    );
};

export default Navigation;
