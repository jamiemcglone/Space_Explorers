import React from 'react';
import QuizPlanetList from './QuizPlanetList';
import { useState, useEffect } from 'react';
import './Canvas.css';
import PlanetService from '../../service/PlanetService';

const Canvas = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [questionToDisplay, setQuestionToDisplay] = useState('');
    const planet1Position = { x: 0, y: 0 };
    const planet2Position = { x: 150, y: 150 };
    const planet3Position = { x: 500, y: 500 };

    const [allPlanets, setAllPlanets] = useState([
        { name: 'Venus', coordinate: { x: 0, y: 0 }, question: 'question venus' },
        { name: 'Mercury', coordinate: { x: 150, y: 150 }, question: 'question Mercury' },
        { name: 'mars', coordinate: { x: 500, y: 500 }, question: 'question Mars' },
    ]);

    function onKeyDown(e) {
        e.preventDefault();
        if (e.key === 'ArrowUp') {
            if(y>0 ){setY(prevState => prevState - 10)};
            setQuestionToDisplay('');
        } else if (e.key === 'ArrowDown') {
            if(y<950){setY(prevState => prevState + 10)};
            setQuestionToDisplay('');
        } else if (e.key === 'ArrowLeft') {
            if(x>0){setX(prevState => prevState - 10);}
            setQuestionToDisplay('');
        } else if (e.key === 'ArrowRight') {
            if(x<950){setX(prevState => prevState + 10);}
            setQuestionToDisplay('');
        } else if (e.key === ' ') {
            openPlanet();
        }
    }

    const handleQuestion = () => {
        setQuestionToDisplay('');
    };
    const openPlanet = () => {
        return allPlanets.map((planet) => {
            if (x === planet.coordinate.x) {
                setQuestionToDisplay(planet.question);
            }
        });
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
    const planet3Style = {
        left: planet3Position.x,
        top: planet3Position.y,
    };

    return (
        <div tabIndex='0' onKeyDown={onKeyDown} className='game-container'>
            <div className='player' style={playerStyle} />
            <div className='planet' style={planet1Style}>
                Venus
            </div>
            <div className='planet' style={planet2Style}>
                {' '}
                mercury
            </div>
            <div className='planet' style={planet3Style}>
                Mars
            </div>
            {questionToDisplay?<div className='question'>
                {questionToDisplay}
                <button onClick={handleQuestion}></button>
            </div>:null}
        </div>
    );
};

export default Canvas;
