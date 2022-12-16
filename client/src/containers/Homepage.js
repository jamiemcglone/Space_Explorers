import React from 'react';
import Navigation from '../components/Navigation';
import PlayGameButton from '../components/PlayGameButton';
import Leaderboard from '../components/Leaderboard';

const Homepage = () => {
    return (
        <main>
            <Navigation />
            <Leaderboard />
            <PlayGameButton />
        </main>
    );
};

export default Homepage;
