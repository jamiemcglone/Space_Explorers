import React from 'react';
import Canvas from '../components/game/Canvas';

const GameContainer = ({planets}) => {
    return <Canvas planets ={planets}/>;
};

export default GameContainer;
