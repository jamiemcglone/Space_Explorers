import React from 'react';
import QuizPlanetList from './QuizPlanetList';
import { useState, useEffect } from 'react';
import './Canvas.css';

const Canvas = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const planetPosition = { x: 0, y: 0 };
    function onKeyDown(e) {
        e.preventDefault();
        if (e.key === 'ArrowUp') {
            setY(y - 25);
        } else if (e.key === 'ArrowDown') {
            setY(y + 25);
        } else if (e.key === 'ArrowLeft') {
            setX(x - 25);
        } else if (e.key === 'ArrowRight') {
            setX(x + 25);
        } else if (e.key === ' ') {
            openPlanet(x, y);
        }
    }
    const openPlanet = (xClicked, yClicked) => {
        if (planetPosition.x === xClicked && planetPosition.y === yClicked - 50) {
            console.log('succeed');
        }
    };
    const playerStyle = {
        left: x,
        top: y,
    };

    const planetStyle = {
        left: planetPosition.x,
        top: planetPosition.y,
    };
    return (
        <div tabIndex='0' onKeyDown={onKeyDown} className='game-container'>
            <div className='player' style={playerStyle} />
            <div className='planet' style={planetStyle}></div>
        </div>
    );
};

export default Canvas;
