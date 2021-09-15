import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Component from './component';
import * as actions from './action';

export function mapStateToProps(state) {
  return {
    root: { ...state.root },
    ...state.home
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

const Connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Connected;
