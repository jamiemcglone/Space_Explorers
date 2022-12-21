import { useState } from 'react';
import styled from 'styled-components';
import PlayerService from '../../service/PlayerService';

const EndGameContainer = styled.div`
    position: absolute;
    background-color: gray;
    border-radius: 5px;
    width: 60%;
    height: 35%;
    left: 20%;
    top: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
`;
const AddPlayerForm = styled.form`
    display: flex;
    gap:15px;
    justify-content:center;
    align-items: center;
    height: 2rem;
`;
const EndGameBtn = styled.button`
    background-color: white;
    width: 10rem;
    height: 2rem;
    border-radius: 5px;
    color: black;
`;

const EndGameScreen = ({ restartGame, score }) => {
    const [name, setName] = useState('');
    const handleNameChange = (event) => setName(event.target.value);
    const handleSubmit = (event) => {
        event.preventDefault();
        PlayerService.addPlayer({
            name: name,
            score: score,
        });
        restartGame();
    };
    return (
        <EndGameContainer>
            Congratulations! You completed the game. Would you like to:
            <EndGameBtn onClick={restartGame}>try again</EndGameBtn>
            Or get added to our Leaderboard
            <AddPlayerForm onSubmit={handleSubmit}>
                
                <input onChange={handleNameChange} type='text' id='name' name='name' value={name} placeholder="Add your Player Name" />
                <EndGameBtn type='submit' name='submit' value='Add to the Leaderboard'>
                    Add to Leaderboard
                </EndGameBtn>
            </AddPlayerForm>
        </EndGameContainer>
    );
};

export default EndGameScreen;
