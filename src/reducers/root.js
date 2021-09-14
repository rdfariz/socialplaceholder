import { ACTIONS } from '../constants';

const initialState = {
  isLoading: false,
  isError: false
};

export default function reducer (state = initialState, action) {
  const { type, isLoading, isError } = action;
  const { SET_LOADING, SET_ERROR } = ACTIONS;

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading
      };
    case SET_ERROR:
      return {
        ...state,
        isError
      };
    default:
      return state;
  }
}
