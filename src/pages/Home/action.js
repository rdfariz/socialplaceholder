import { ACTIONS } from '../../constants';
import { SERVICES } from '../../configs';
import fetch from '../../utils/fetch';
// import { history } from '../../store/configureStore';

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
        dispatch(setFailed(false));
        dispatch(setData(res));
        dispatch(setLoading(false));
      })
      .catch((err) => {
        dispatch(setFailed(true));
        dispatch(setLoading(false));
      });
  };
}

export function setData (data) {
  return {
    type: ACTIONS.SET_POST_LIST,
    data,
  };
}

export function setFailed (isFailed) {
  return {
    type: ACTIONS.SET_FAILED,
    isFailed,
  };
}

export function setLoading (isLoading) {
  return {
    type: ACTIONS.SET_LOADING,
    isLoading,
  };
}
