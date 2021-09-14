import { ACTIONS } from '../../constants';
import { SERVICES } from '../../configs';
import fetch from '../../utils/fetch';
// import { history } from '../../store/configureStore';

export function getPostDetail (id) {
  return (dispatch) => {
    const options = {
      method: 'GET',
      url: SERVICES.GET_POST_DETAIL(id)
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

export function getPostComments (id) {
  return (dispatch) => {
    const options = {
      method: 'GET',
      url: SERVICES.GET_POST_COMMENTS,
      params: {
        postId: id
      }
    };

    dispatch(setLoading(true));

    return fetch(options)
      .then((res) => {
        dispatch(setError(false));
        dispatch(setDataComments(res));
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
    type: ACTIONS.SET_POST_DETAIL,
    data,
  };
}

export function setDataComments (data) {
  return {
    type: ACTIONS.SET_POST_COMMENTS,
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
