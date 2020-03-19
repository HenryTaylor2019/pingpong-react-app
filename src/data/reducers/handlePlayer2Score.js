
const incrementP2Score = (state) => {
    return {
        ...state,
        player2: state.player2 + 1
    };
};


export default incrementP2Score;