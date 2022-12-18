import React from 'react';
import QuizPlanetList from './QuizPlanetList';
import { useState, useEffect } from 'react';
import './Canvas.css';

const Canvas = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const planet1Position = { x: 0, y: 0 };
    const planet2Position = { x: 500, y: 500 };
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
        if (planet1Position.x === xClicked && planet1Position.y === yClicked) {
            console.log('succeed');
        } else if (planet2Position.x === xClicked && planet2Position.y === yClicked) {
            console.log('succeed 2');
        }
    };
    const playerStyle = {
        left: x,
        top: y,
    };

    const planet1Style = {
        left: planet1Position.x,
        top: planet1Position.y,
    };
    const planet2Style = {
        left: planet2Position.x,
        top: planet2Position.y,
    };
    return (
        <div tabIndex='0' onKeyDown={onKeyDown} className='game-container'>
            <div className='player' style={playerStyle} />
            <div className='planet' style={planet1Style}></div>
            <div className='planet' style={planet2Style}></div>
        </div>
    );
};

export default Canvas;
