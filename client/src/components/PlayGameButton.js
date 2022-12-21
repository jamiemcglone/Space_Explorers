import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StartGameButton = styled.button`
    background: grey;
    padding: 10px;
    width:10rem;
    border-radius: 4px;
    top: 510px;
    left: 840px;
    position: absolute;
    text-decoration: none;
`;

const PlayGameButton = () => {

    return <StartGameButton><Link to='/game' class="startGameButton">Play a game</Link></StartGameButton>;
};

export default PlayGameButton;
