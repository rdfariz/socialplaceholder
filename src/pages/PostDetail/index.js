import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Component from './component';
import * as actions from './action';
import { getPosts } from '../Home/action';

function mapStateToProps(state) {
  return {
    home: { ...state.home },
    ...state.postDetail
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...actions,
      getPosts
    }, dispatch)
  };
}

const Connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Connected;
