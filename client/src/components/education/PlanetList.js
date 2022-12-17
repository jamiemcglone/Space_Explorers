import React from 'react';
import Planet from './Planet';

const PlanetList = ({planets}) => {
    return (
        <ul>
            <Planet />
            <Planet />
            <Planet />
            <Planet />
            <Planet />
            <Planet />
            <Planet />
        </ul>
    );
};

export default PlanetList;
