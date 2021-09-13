import { ACTIONS } from '../../constants';

const initialState = {
  post: {},
  comments: [],
  isLoading: false,
  isError: false
};

export default function reducer (state = initialState, action) {
  const { type, data, isLoading } = action;
  const { SET_LOADING, SET_POST_DETAIL, SET_POST_COMMENTS } = ACTIONS;

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
    case SET_LOADING:
      return {
        ...state,
        isLoading
      };
    default:
      return state;
  }
}
