import React from 'react';
import PlanetList from './education/PlanetList';

const Navigation = ({planets}) => {

    return (
    <nav> {planets.map(planets => {
        return (
            <PlanetList
            key={planets._id}
            planets={planets}
            />
        )
    })}
    </nav>
    )    
};

export default Navigation;
