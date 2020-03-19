
const changeServer = state => {
    const total = state.player1 + state.player2;

    const getToTwenty = state.player1 >= 20 && state.player2 >= 20 

    const needToSwitch = getToTwenty ? total % 2 === 0 : total % 5 === 0;

    return {
        ...state,
        player1Serving: needToSwitch ? !state.player1Serving : state.player1Serving
    }
}

export default changeServer;