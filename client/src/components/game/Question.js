import React, { useState } from 'react';
import FeedbackQuestion from './FeedbackQuestion';

const Question = ({ questionToDisplay }) => {

    const [userAnswer, setUserAnswer] = useState(null)
    
    const handleUserAnswer = (event) => {
        event.preventDefault()
        setUserAnswer(event.target.answer.value)
      }

    return (
        <div className="question">
            <p>We are in question</p>
            <form onSubmit={handleUserAnswer}>
                <div>{questionToDisplay.question}
                    <input type={"radio"} id={questionToDisplay.options.a} name="answer" value='a' />
                    <label htmlFor={questionToDisplay.options.a}>{questionToDisplay.options.a}</label>
                    <input type={"radio"} id={questionToDisplay.options.b} name="answer" value='b' />
                    <label htmlFor={questionToDisplay.options.b}>{questionToDisplay.options.b}</label>
                    <input type={"radio"} id={questionToDisplay.options.c} name="answer" value='c'/>
                    <label htmlFor={questionToDisplay.options.c}>{questionToDisplay.options.c}</label>
                </div>

                <button className="answer-btn">
                    Check your answer
                </button> 
            </form>
            {userAnswer ? 
                <FeedbackQuestion userAnswer={userAnswer} correctAnswer={questionToDisplay.correctAnswer} extension={questionToDisplay.extension} options={questionToDisplay.options}/> : null
            }
        </div>
    );
};

export default Question;