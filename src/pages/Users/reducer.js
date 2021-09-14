import { ACTIONS } from '../../constants';

const initialState = {
  users: []
};

export default function reducer (state = initialState, action) {
  const { type, data } = action;
  const { SET_USER_LIST } = ACTIONS;

  switch (type) {
    case SET_USER_LIST:
      return {
        ...state,
        users: data
      };
    default:
      return state;
  }
}
