import React from 'react';

const EndGameScreen = ({handleGameOverClick}) => {
    

    return (
        <div>
            Congratulations you completed the game would you like to get added to our Leaderboard or
            try again <button onClick={handleGameOverClick}>try again</button>
        </div>
    );
};

export default EndGameScreen;
