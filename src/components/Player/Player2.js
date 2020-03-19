import { connect } from 'react-redux';
import Player from './Player';


const mapStateToProps = (state) => {
    return {
        score: state.player2,
        serving: !state.player1Serving,
        title: 'Player 2',
        button: state.button 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => { dispatch({ type: "PLAYER2_SCORED" })},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);