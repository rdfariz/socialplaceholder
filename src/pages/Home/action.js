import { ACTIONS } from '../../constants';
import { SERVICES } from '../../configs';
import fetch from '../../utils/fetch';

export function getPosts (params) {
  return (dispatch) => {
    const options = {
      method: 'GET',
      url: SERVICES.GET_POST_LIST,
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

export function addPost (params) {
  return (dispatch) => {
    const options = {
      method: 'POST',
      url: SERVICES.GET_POST_LIST,
      data: { ...params }
    };

    dispatch(setLoading(true));

    return fetch(options)
      .then((res) => {
        dispatch(setError(false));
        dispatch(insertData(res));
        dispatch(setLoading(false));
      })
      .catch((err) => {
        dispatch(setError(true));
        dispatch(setLoading(false));
      });
  };
}

export function insertData (data) {
  return {
    type: ACTIONS.INSERT_POST_LIST,
    data,
  };
}

export function setData (data) {
  return {
    type: ACTIONS.SET_POST_LIST,
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
