import { connect } from 'react-redux';
import WinnerMessage from './WinnerMessage';

const mapStateToProps = (state) => {
    return {
        winner: state.winner
    }
}


export default connect(mapStateToProps)(WinnerMessage);