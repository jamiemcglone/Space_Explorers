import React from 'react';
import FeedbackQuestion from './FeedbackQuestion';
import { Link } from 'react-router-dom';

const Question = ({ questionToDisplay }) => {
    console.log(questionToDisplay);

    // const handleAnswer = (userAnswer, questionToDisplay) => {
    //     if (userAnswer === {correctAnswer})
    //             console.log('Well done, your answer is correct');
    //         else; 
    //             console.log("The correct answer was `${correctAnswer}")
    //   }

    return (
        <div className="question">

            <div>{questionToDisplay.question}
                <ul>    
                {/* option instead of list */}
                    <li>{questionToDisplay.options.a}</li>
                    <li>{questionToDisplay.options.b}</li>
                    <li>{questionToDisplay.options.c}</li>
                </ul>
            </div>
            <button type="button" className="answer-btn"
            // onClick={handleAnswer}
            >Check your answer</button>

            <FeedbackQuestion />
        </div>
    );
};

export default Question;