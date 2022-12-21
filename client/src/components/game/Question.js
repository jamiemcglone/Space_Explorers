import React, { useState } from 'react';
import styled from 'styled-components';
import FeedbackQuestion from './FeedbackQuestion';

const QuestionContainer = styled.div`
    position: absolute;
    background-color: gray;
    border-radius: 5px;
    width: 60%;
    height: 90%;
    left: 20%;
    top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
`;

const QuestionForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 2rem;
`;

const QuestionBtn = styled.button`
    background-color: white;
    width: 10rem;
    height: 2rem;
    border-radius: 5px;
    color: black;
`;

const Question = ({ questionToDisplay, countScore, checkAnswerCorrect }) => {
    const [userAnswer, setUserAnswer] = useState(null);

    const handleUserAnswer = (event) => {
        event.preventDefault();
        setUserAnswer(event.target.answer.value);
        console.log(event.target.answer.value);
    };

    return (
        <QuestionContainer className='question'>
            <QuestionForm onSubmit={handleUserAnswer}>
                {questionToDisplay.question}
                <input type={'radio'} id={questionToDisplay.options.a} name='answer' value='a' />
                <label htmlFor={questionToDisplay.options.a}>{questionToDisplay.options.a}</label>
                <input type={'radio'} id={questionToDisplay.options.b} name='answer' value='b' />
                <label htmlFor={questionToDisplay.options.b}>{questionToDisplay.options.b}</label>
                <input type={'radio'} id={questionToDisplay.options.c} name='answer' value='c' />
                <label htmlFor={questionToDisplay.options.c}>{questionToDisplay.options.c}</label>

                <QuestionBtn type='submit' className='answer-btn'>
                    Check your answer
                </QuestionBtn>
            </QuestionForm>
            {userAnswer ? (
                <FeedbackQuestion
                    userAnswer={userAnswer}
                    correctAnswer={questionToDisplay.correctAnswer}
                    extension={questionToDisplay.extension}
                    options={questionToDisplay.options}
                    countScore={countScore}
                    setUserAnswer={setUserAnswer}
                    checkAnswerCorrect={checkAnswerCorrect}
                />
            ) : null}
        </QuestionContainer>
    );
};

export default Question;
