import React from 'react';

const FeedbackQuestion = ({ userAnswer, correctAnswer, extension, options } ) => {
    let message = " "
    if (userAnswer === correctAnswer){
        message = `Well done you, that's correct! ${extension}`;
    }
    else {
        message = `Sorry, the correct answer is ${options[correctAnswer]}. ${extension}`;
    }
    return <div>
        <h1>{message}</h1>

        <button>Continue the game</button>
        </div>;
};

export default FeedbackQuestion;
