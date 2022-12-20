import React from 'react';
import QuizPlanetList from './QuizPlanetList';
import EndGameScreen from './EndGameScreen';
import { useState } from 'react';
import styled from 'styled-components';
import './Canvas.css';
import Question from './Question';


const Canvas = ({ planets }) => {
    const [x, setX] = useState(250);
    const [y, setY] = useState(250);
    const [questionToDisplay, setQuestionToDisplay] = useState('');
    const [gameOver, setGameOver] = useState();

        const Planet = styled.img.attrs((props) => props)`
        
        width:50px;
        height:50px;
        position:absolute;
        top:${(props) => props.y}px;
        left:${(props) => props.x}px;
        `;
    
    console.log(planets);
    let planetNodes = planets.map((planet) => {
        return<Planet y = {planet.coordinates.y} x={planet.coordinates.x} src={planet.image}/>
        
    });


    function onKeyDown(e) {
        e.preventDefault();
        if (e.key === 'ArrowUp') {
            if (y > 0) {
                setY((prevState) => prevState - 10);
            }
            setQuestionToDisplay('');
        } else if (e.key === 'ArrowDown') {
            if (y < 500) {
                setY((prevState) => prevState + 10);
            }
            setQuestionToDisplay('');
        } else if (e.key === 'ArrowLeft') {
            if (x > 0) {
                setX((prevState) => prevState - 10);
            }
            setQuestionToDisplay('');
        } else if (e.key === 'ArrowRight') {
            if (x < 950) {
                setX((prevState) => prevState + 10);
            }
            setQuestionToDisplay('');
        } else if (e.key === ' ') {
            openPlanet();
        }
    }
    const handleQuestion = () => {
        setQuestionToDisplay('');
    };
    const openPlanet = () => {
        planets.map((planet) => {
            if (x === planet.coordinates.x && y=== planet.coordinates.y) {
            setQuestionToDisplay(planet.questions[0]);
            }
        });
    };
    const handleGameOverClick = () => {
        gameOver ? setGameOver(false) : setGameOver(true);
    };
    const playerStyle = {
        left: x,
        top: y,
    };

    // const planet1Style = {
    //     left: planet1Position.x,
    //     top: planet1Position.y,
    // };
    // const planet2Style = {
    //     left: planet2Position.x,
    //     top: planet2Position.y,
    // };
    // const planet3Style = {
    //     left: planet3Position.x,
    //     top: planet3Position.y,
    // };

    return (
        <>
            <div tabIndex='0' onKeyDown={onKeyDown} className='game-container'>
                <div className='player' style={playerStyle} />
                <div>{planetNodes}</div>
                {questionToDisplay ? (
                    <Question questionToDisplay= {questionToDisplay}/>
        
                ) : null}
                <div className='game-over-button' onClick={handleGameOverClick}>
                    Finish Game
                </div>
            </div>
            
            {gameOver ? <EndGameScreen handleGameOverClick={handleGameOverClick} /> : null}
        </>
    );
};

export default Canvas;
