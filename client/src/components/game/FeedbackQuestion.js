import React from 'react';
import styled from 'styled-components';

const FeedbackBtn = styled.button`
    background-color: white;
    width: 10rem;
    height: 2rem;
    border-radius: 5px;
    color: black;
`;

const FeedbackQuestion = ({
    userAnswer,
    correctAnswer,
    extension,
    options,
    countScore,
    checkAnswerCorrect,
}) => {
    let message = ' ';

    if (userAnswer === correctAnswer) {
        message = `Well done you, that's correct! ${extension}`;
        checkAnswerCorrect();
    } else {
        message = `Sorry, the correct answer is ${options[correctAnswer]}. ${extension}`;
    }

    return (
        <>
            <h2>{message}</h2>
            <FeedbackBtn onClick={countScore}>Continue the game</FeedbackBtn>
        </>
    );
};

export default FeedbackQuestion;
