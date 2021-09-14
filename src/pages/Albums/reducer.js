import { ACTIONS } from '../../constants';

const initialState = {
  albums: [],
};

export default function reducer (state = initialState, action) {
  const { type, data } = action;
  const { SET_ALBUMS_LIST } = ACTIONS;

  switch (type) {
    case SET_ALBUMS_LIST:
      return {
        ...state,
        albums: data
      };
    default:
      return state;
  }
}
