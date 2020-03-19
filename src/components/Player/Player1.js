import { connect } from 'react-redux';
import Player from './Player';


const mapStateToProps = (state) => {
    return {
        score: state.player1,
        serving: state.player1Serving,
        title: 'Player 1',
        button: state.button 
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => { dispatch({ type: "PLAYER1_SCORED" })},

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);