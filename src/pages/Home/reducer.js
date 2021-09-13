import { ACTIONS } from '../../constants';

const initialState = {
  posts: [],
  isLoading: false,
  isError: false
};

export default function reducer(state = initialState, action) {
  const { type, data, isLoading } = action;
  const { SET_LOADING, SET_POST_LIST } = ACTIONS;

  switch (type) {
    case SET_POST_LIST:
      return {
        ...state,
        posts: data
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
