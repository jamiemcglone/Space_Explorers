import React from 'react';
import Navigation from '../components/Navigation';
import PlayGameButton from '../components/PlayGameButton';
import Leaderboard from '../components/Leaderboard';
import PlayerService from '../service/PlayerService';
import styled from 'styled-components';
import NasaAPIkey from './../config.js'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HomepageContainer = ({ planets }) => {
    const [allPlayers, setAllPlayers] = useState([]);
    const [imageToDisplay, setImageToDisplay] = useState("");
    useEffect(() => {
        PlayerService.getPlayers().then((players) => setAllPlayers(players));
        PictureOfDay();
    }, []);



    const PictureOfDay = function () {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${NasaAPIkey}`)
            .then(res => res.json())
            .then(imageToDisplay => setImageToDisplay(imageToDisplay.url))
    }



    const HomePageWrapper = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        gap: 1rem;
        `;

    const ImageFlexItem = styled.div`
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        width: 30%;
        background-color: transparent;
        height: auto;
        gap: 0.5rem;
    `;

    const Image = styled.img`
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
        border: 1px solid yellow;

    `;

    const LeaderboardAndGameFlexContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        flex-wrap: nowrap;
        width: 30%;
    `;

    const SolarButton = styled.button`
        background: grey;
        padding: 10px;
        width: 100%;
        border-radius: 4px;
        text-decoration: none;
        text-align: center;
        margin: auto;
        font-size: 1.05rem;
    `;


    return (
        <main>
            <Navigation planets={planets} />
            <HomePageWrapper>
                <ImageFlexItem>
                    <Image src={imageToDisplay} alt="astromony picture" />
                    <Link to="/solarsystem"><SolarButton>Learn more about the Solar System</SolarButton></Link>
                </ImageFlexItem>
                <LeaderboardAndGameFlexContainer>
                    <Leaderboard players={allPlayers} />
                    <PlayGameButton />
                </LeaderboardAndGameFlexContainer>
            </HomePageWrapper>
        </main>
    );
};

export default HomepageContainer;
