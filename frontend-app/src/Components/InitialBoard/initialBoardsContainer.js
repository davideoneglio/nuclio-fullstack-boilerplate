import { connect } from 'react-redux';
import InitialBoard from "./initialBoard";

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(null, mapDispatchToProps)(InitialBoard);
