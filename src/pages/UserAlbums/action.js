import { ACTIONS } from '../../constants';
import { SERVICES } from '../../configs';
import fetch from '../../utils/fetch';

export function getAlbumsInfo (id) {
  return (dispatch) => {
    const options = {
      method: 'GET',
      url: SERVICES.GET_ALBUMS_INFO(id)
    };

    dispatch(setLoading(true));

    return fetch(options)
      .then((res) => {
        dispatch(setError(false));
        dispatch(setInfo(res));
        dispatch(setLoading(false));
      })
      .catch((err) => {
        dispatch(setError(true));
        dispatch(setLoading(false));
      });
  };
}

export function getAlbumsPhotos (id) {
  return (dispatch) => {
    const options = {
      method: 'GET',
      url: SERVICES.GET_ALBUMS_PHOTOS(id)
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

export function setData (data) {
  return {
    type: ACTIONS.SET_ALBUMS_PHOTOS,
    data,
  };
}

export function setInfo (data) {
  return {
    type: ACTIONS.SET_ALBUMS_INFO,
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
