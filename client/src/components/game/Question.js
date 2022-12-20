import React, { useState } from 'react';
import FeedbackQuestion from './FeedbackQuestion';

const Question = ({ questionToDisplay, countScore, checkAnswerCorrect}) => {

    const [userAnswer, setUserAnswer] = useState(null)
    
    const handleUserAnswer = (event) => {
        event.preventDefault()
        setUserAnswer(event.target.answer.value)
        console.log(event.target.answer.value)
      }

    return (
        <div className="question">
            <form onSubmit={handleUserAnswer}>
                <div>{questionToDisplay.question}
                    <input type={"radio"} id={questionToDisplay.options.a} name="answer" value='a' />
                    <label htmlFor={questionToDisplay.options.a}>{questionToDisplay.options.a}</label>
                    <input type={"radio"} id={questionToDisplay.options.b} name="answer" value='b' />
                    <label htmlFor={questionToDisplay.options.b}>{questionToDisplay.options.b}</label>
                    <input type={"radio"} id={questionToDisplay.options.c} name="answer" value='c'/>
                    <label htmlFor={questionToDisplay.options.c}>{questionToDisplay.options.c}</label>
                </div>

                <button type="submit" className="answer-btn">
                    Check your answer
                </button> 
            </form>
            {userAnswer ? 
                <FeedbackQuestion 
                userAnswer={userAnswer} 
                correctAnswer={questionToDisplay.correctAnswer} 
                extension={questionToDisplay.extension} 
                options={questionToDisplay.options} 
                countScore = {countScore}
                setUserAnswer={setUserAnswer}
                checkAnswerCorrect = {checkAnswerCorrect}
                /> 
                : null
            }
        </div>
    );
};

export default Question;