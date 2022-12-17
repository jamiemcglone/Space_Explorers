import React from 'react';
import PlanetList from './education/PlanetList';

const Navigation = ({ planets }) => {
    return (
        <nav>
            <PlanetList planets={planets} />
        </nav>
    );
};

export default Navigation;
