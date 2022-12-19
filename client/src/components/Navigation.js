import React from 'react';
import PlanetList from './education/PlanetList';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
`
const Li = styled.li`
    text-decoration: none;
    list-style-type: none;
`

const Navigation = ({ planets }) => {
    return (
       <Div>
            <PlanetList planets={planets} />
        </Div>
    );
};

export default Navigation;
