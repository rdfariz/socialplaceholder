import { ACTIONS } from '../../constants';

const initialState = {
  user: {},
  userPosts: [],
  userAlbums: []
};

export default function reducer (state = initialState, action) {
  const { type, data } = action;
  const { SET_USER_DETAIL, SET_USER_POSTS, SET_USER_ALBUMS } = ACTIONS;

  switch (type) {
    case SET_USER_DETAIL:
      return {
        ...state,
        user: data
      };
    case SET_USER_POSTS:
      return {
        ...state,
        userPosts: data
      };
    case SET_USER_ALBUMS:
      return {
        ...state,
        userAlbums: data
      };
    default:
      return state;
  }
}
