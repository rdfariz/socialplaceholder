import { ACTIONS } from '../../constants';
import { SERVICES } from '../../configs';
import fetch from '../../utils/fetch';

export function getAlbums (params) {
  return (dispatch) => {
    const options = {
      method: 'GET',
      url: SERVICES.GET_ALBUMS_LIST,
      params
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
    type: ACTIONS.SET_ALBUMS_LIST,
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
