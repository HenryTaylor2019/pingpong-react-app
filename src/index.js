import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './data/store';
import { Provider } from 'react-redux';


// assigning the action dispatches to variables to use as values to our props
const handlePlayer1Score = () => {
    store.dispatch({ type: "PLAYER1_SCORED" }) 
}

const handlePlayer2Score = () => {
    store.dispatch({ type: "PLAYER2_SCORED" }) 
}

const handleReset = () => {
    store.dispatch({ type: "RESET" }) 
}

const state = store.getState();
// Pass Props to app to call in App.js
ReactDOM.render(

    <Provider 
        store={ store }
    >
        <App 
            player1Score={state.player1} 
            player2Score={state.player2} 
            handlePlayer1Score={ handlePlayer1Score }
            handlePlayer2Score={ handlePlayer2Score}
            handleReset={ handleReset }
            serving={ state.player1Serving ? 'player1' : 'player2' }
            button={ state.button }
        />
    </Provider>, 

    document.getElementById('root')
);






