import Component from './listPage.jsx';
import * as selectors from './selectors';
import * as actions from  './actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    list: selectors.getlist(state),
});

const mapDispatchToProps = dispatch => ({
    setTask: payload => dispatch(actions.setTask(payload)),
    checkTask: payload => dispatch(actions.checkTask(payload)),
    deleteTask: payload => dispatch(actions.deleteTask(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);