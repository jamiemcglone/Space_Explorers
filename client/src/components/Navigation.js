import React from 'react';
import PlanetList from './education/PlanetList';
import Styled from 'styled-components';

const Div = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
`
const Li = Styled.li`
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
