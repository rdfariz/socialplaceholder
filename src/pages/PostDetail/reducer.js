import { ACTIONS } from '../../constants';

const initialState = {
  post: {},
  comments: []
};

export default function reducer (state = initialState, action) {
  const { type, data } = action;
  const { SET_POST_DETAIL, SET_POST_COMMENTS } = ACTIONS;

  switch (type) {
    case SET_POST_DETAIL:
      return {
        ...state,
        post: data
      };
    case SET_POST_COMMENTS:
      return {
        ...state,
        comments: data,
      };
    default:
      return state;
  }
}
