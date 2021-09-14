import { ACTIONS } from '../../constants';

const initialState = {
  posts: []
};

export default function reducer (state = initialState, action) {
  const { type, data } = action;
  const { SET_POST_LIST, INSERT_POST_LIST } = ACTIONS;

  switch (type) {
    case SET_POST_LIST:
      return {
        ...state,
        posts: data
      };
    case INSERT_POST_LIST:
      return {
        ...state,
        posts: [data, ...state.posts]
      };
    default:
      return state;
  }
}
