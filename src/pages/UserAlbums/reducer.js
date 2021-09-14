import { ACTIONS } from '../../constants';

const initialState = {
  albumsInfo: {},
  photos: [],
};

export default function reducer (state = initialState, action) {
  const { type, data } = action;
  const { SET_ALBUMS_PHOTOS, SET_ALBUMS_INFO } = ACTIONS;

  switch (type) {
    case SET_ALBUMS_PHOTOS:
      return {
        ...state,
        photos: data
      };
    case SET_ALBUMS_INFO:
      return {
        ...state,
        albumsInfo: data
      }
    default:
      return state;
  }
}
