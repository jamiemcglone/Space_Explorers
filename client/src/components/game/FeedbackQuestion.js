import React from 'react';

const FeedbackQuestion = ({ userAnswer, correctAnswer, extension, options, countScore,checkAnswerCorrect }) => {
    let message = " ";


    if (userAnswer === correctAnswer) {
        message = `Well done you, that's correct! ${extension}`;
        checkAnswerCorrect()

    }
    else {
        message = `Sorry, the correct answer is ${options[correctAnswer]}. ${extension}`;
    
    }

    return (
        <div>
            <h1>{message}</h1>

            <button onClick = {countScore}>Continue the game</button>
        </div>
    )
};

export default FeedbackQuestion;
