import React from 'react';

<input
          className="text-center"
          type="text"
          placeholder="Name"
          id="nameInput"
          name="nameInput"
          required
        />

const EndGameScreen = ({restartGame, score}) => {
    
const handleSubmit =(event) =>{
    event.preventDefault()
    console.log("event")
}
    return (
        <div className = "end-game-screen">
            Congratulations you completed the game would you like to get added to our Leaderboard or
            try again.
          <form onSubmit ={handleSubmit}>
                <label htmlFor="name">Player Name:</label>
                <input type="text" id="name" name="name" value="name"/>
                <button type="submit" name="submit" value="Add to the Leaderboard"></button>
          </form>
            <button onClick={restartGame}>try again</button>

        </div>
    );
};

export default EndGameScreen;
