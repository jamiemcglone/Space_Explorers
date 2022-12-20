import React from 'react';
import EndGameScreen from './EndGameScreen';
import { useState } from 'react';
import styled from 'styled-components';
import './Canvas.css';
import Question from './Question';



const Canvas = ({ planets }) => {
    const [x, setX] = useState(250);
    const [y, setY] = useState(250);
    const [score, setScore] = useState(0);
    const [questionToDisplay, setQuestionToDisplay] = useState('');
    const [gameOver, setGameOver] = useState();
    const [answerCorrect, setAnswerCorrect] = useState(false)

    const Planet = styled.img.attrs((props) => props)`
        
        width:50px;
        height:50px;
        position:absolute;
        top:${(props) => props.y}px;
        left:${(props) => props.x}px;
        `;

    console.log(planets);
    let planetNodes = planets.map((planet) => {
        return <Planet y={planet.coordinates.y} x={planet.coordinates.x} src={planet.image} />

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
            if (x === planet.coordinates.x && y === planet.coordinates.y) {
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

    const countScore = () => {
        setQuestionToDisplay('');
        if (answerCorrect === true){
        const newScore = score + 10;
        setScore(newScore); 
        setAnswerCorrect(false)}
    }

    const checkAnswerCorrect = () =>{
        setAnswerCorrect(true)}


return (
    <>
        <div tabIndex='0' onKeyDown={onKeyDown} className='game-container'>
            <div className='player' style={playerStyle} />
            <div>{planetNodes}</div>
            {questionToDisplay ? (
                <Question questionToDisplay={questionToDisplay} countScore={countScore} checkAnswerCorrect = {checkAnswerCorrect} />

            ) : null}
            <div className='game-over-button' onClick={handleGameOverClick}>
                Finish Game
            </div>
            {/* <div>Score: { }</div> */}
        </div>

        {gameOver ? <EndGameScreen handleGameOverClick={handleGameOverClick} /> : null}
    </>
);
};

export default Canvas;
