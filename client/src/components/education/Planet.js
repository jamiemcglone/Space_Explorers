import React from 'react';
// import { useLocation } from 'react-router-dom';
// const location = useLocation();
import { Link } from 'react-router-dom';
const Planet = ({ planet }) => {
    return (
        <li>
            <Link to={`/${planet.name}`}>{planet.name}</Link>
            
        </li>
    );
};

export default Planet;
