import initial from '../initial';
import incrementP1Score from './handlePlayer1Score';
import incrementP2Score from './handlePlayer2Score';
import changeServer from './changeServer';

// getWinner works out who is the winner be seeing if either player has reached 21 or if the margin is only two points after 21
    const getWinner = state => {
     
        const decideWinner = (state.player1 >= 21 || state.player2 >= 21) && (state.player1 - state.player2 >= 2 || state.player2 - state.player1 >= 2 ); // boolean to see if there is a winner

        const higherScore = state.player1 > state.player2 ? 1 : 2; //who has higher score

        const newWinner = decideWinner ? higherScore : 0 //see if there is a winner

        return {
            ...state,
            winner: newWinner,
        }
    }

    const disableButton = state => {

        const decideWinner = (state.player1 >= 21 || state.player2 >= 21) && (state.player1 - state.player2 >= 2 || state.player2 - state.player1 >= 2 ) ;

        return {
            ...state,
            button: decideWinner,
        }
    }

const reducer = (state, action) => {
    switch (action.type) {
        case "PLAYER1_SCORED": 
        return disableButton(getWinner(changeServer(incrementP1Score(state))));
    
        case "PLAYER2_SCORED": 
        return disableButton(getWinner(changeServer(incrementP2Score(state))));

        case "RESET": 
        return initial

        default: return state;
    }
}

export default reducer;