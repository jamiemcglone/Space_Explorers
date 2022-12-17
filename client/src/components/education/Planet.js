import React from 'react';

const Planet = ({planets}) => {
    return <li><img src={planets.planet.image} alt="planet image"/></li>; //// Linking to education via route Link
};

export default Planet;
