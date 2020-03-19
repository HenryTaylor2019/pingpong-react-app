import React from "react";
import Header from './components/Header.js';
import WinnerMessage from './components/WinnerMessage';
import Player1 from './components/Player/Player1';
import Player2 from './components/Player/Player2';
import ResetButton from './ResetButton.js';

const App = ({ player1Score, player2Score, handlePlayer1Score, handlePlayer2Score, handleReset, serving, button }) => (
    <React.Fragment>
    
        <Header />

        <div className="row mb-4">
            <Player1 />
            <Player2 />
        </div>

        <WinnerMessage />
        <hr />
        
        <ResetButton handleReset={ handleReset } />

    </React.Fragment>
);

export default App;