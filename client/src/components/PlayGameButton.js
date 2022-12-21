import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StartGame = styled.div`
    background: grey;
    padding: 10px;
    width:10rem;
    border-radius: 4px;
    top: 510px;
    left: 840px;
    text-decoration: none;
    text-align: center;
    margin: auto;
`;

const PlayGameButton = () => {

    return <Link to='/game' class="startGameButton"><StartGame>Play a game</StartGame>  </Link>;
};

export default PlayGameButton;
