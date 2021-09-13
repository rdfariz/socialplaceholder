import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Component from './component';
import * as actions from './action';

function mapStateToProps(state) {
  return {
    ...state.home
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

const Connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Connected;
