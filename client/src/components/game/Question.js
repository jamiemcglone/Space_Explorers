import React from 'react';
import FeedbackQuestion from './FeedbackQuestion';
import { Link } from 'react-router-dom';

const Question = ({ question }) => {

    const handleAnswer = (userAnswer, question) => {
        if (userAnswer == {correctAnswer})
                console.log('Well done, your answer is correct');
            else; 
                console.log("The correct answer was `${correctAnswer}")
      }

    return (
        <div className="question">

            <Link to={'/${questions}'}>{question}
                <ul>
                    <li>{question.option.a}</li>
                    <li>{question.option.b}</li>
                    <li>{question.option.c}</li>
                </ul>
            </Link>
            <button type="button" className="answer-btn"
            onClick={handleAnswer}
            >Check your answer</button>

            <FeedbackQuestion />
        </div>
    );
};

export default Question;