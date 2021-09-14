import { ACTIONS } from '../../constants';
import { SERVICES } from '../../configs';
import fetch from '../../utils/fetch';

export function getUserDetail (id) {
  return (dispatch) => {
    const options = {
      method: 'GET',
      url: SERVICES.GET_USER_DETAIL(id)
    };

    dispatch(setLoading(true));

    return fetch(options)
      .then((res) => {
        dispatch(setError(false));
        dispatch(setData(res));
        dispatch(setLoading(false));
      })
      .catch((err) => {
        dispatch(setError(true));
        dispatch(setLoading(false));
      });
  };
}


export function getUserPosts (id) {
  return (dispatch) => {
    const options = {
      method: 'GET',
      url: SERVICES.GET_USER_POSTS(id)
    };

    dispatch(setLoading(true));

    return fetch(options)
      .then((res) => {
        dispatch(setError(false));
        dispatch(setDataUserPosts(res));
        dispatch(setLoading(false));
      })
      .catch((err) => {
        dispatch(setError(true));
        dispatch(setLoading(false));
      });
  };
}

export function getUserAlbums (id) {
  return (dispatch) => {
    const options = {
      method: 'GET',
      url: SERVICES.GET_USER_ALBUMS(id)
    };

    dispatch(setLoading(true));

    return fetch(options)
      .then((res) => {
        dispatch(setError(false));
        dispatch(setDataUserAlbums(res));
        dispatch(setLoading(false));
      })
      .catch((err) => {
        dispatch(setError(true));
        dispatch(setLoading(false));
      });
  };
}

export function setData (data) {
  return {
    type: ACTIONS.SET_USER_DETAIL,
    data,
  };
}

export function setDataUserPosts (data) {
  return {
    type: ACTIONS.SET_USER_POSTS,
    data,
  };
}

export function setDataUserAlbums (data) {
  return {
    type: ACTIONS.SET_USER_ALBUMS,
    data,
  };
}

export function setError (isError) {
  return {
    type: ACTIONS.SET_ERROR,
    isError,
  };
}

export function setLoading (isLoading) {
  return {
    type: ACTIONS.SET_LOADING,
    isLoading,
  };
}
