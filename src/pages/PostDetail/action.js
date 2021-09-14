import { ACTIONS } from '../../constants';
import { SERVICES } from '../../configs';
import fetch from '../../utils/fetch';

export function getPostDetail (id) {
  return (dispatch) => {
    const options = {
      method: 'GET',
      url: SERVICES.GET_POST_DETAIL(id)
    };

    dispatch(setLoading(true));

    return fetch(options)
      .then(async (res) => {
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
      url: SERVICES.GET_POST_COMMENTS(id)
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

export function updatePost (params, id) {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      url: SERVICES.GET_POST_DETAIL(id),
      data: {
        ...params
      }
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

export function deletePost (id) {
  return (dispatch) => {
    const options = {
      method: 'DELETE',
      url: SERVICES.GET_POST_DETAIL(id)
    };

    dispatch(setLoading(true));

    return fetch(options)
      .then(() => {
        dispatch(setError(false));
        dispatch(setLoading(false));
        return true;
      })
      .catch((err) => {
        dispatch(setError(true));
        dispatch(setLoading(false));
        return false;
      });
  };
}

export function addPostComment (params, id) {
  return (dispatch) => {
    const options = {
      method: 'POST',
      url: SERVICES.GET_POST_COMMENTS(id),
      data: { ...params }
    };

    dispatch(setLoading(true));

    return fetch(options)
      .then((res) => {
        dispatch(setError(false));
        dispatch(insertDataComment(res));
        dispatch(setLoading(false));
      })
      .catch((err) => {
        dispatch(setError(true));
        dispatch(setLoading(false));
      });
  };
}

export function updatePostComment (params, id) {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      url: SERVICES.GET_COMMENT_DETAIL(id),
      data: { ...params }
    };

    dispatch(setLoading(true));

    return fetch(options)
      .then((res) => {
        dispatch(setError(false));
        dispatch(updateDataComment(res));
        dispatch(setLoading(false));
      })
      .catch((err) => {
        dispatch(setError(true));
        dispatch(setLoading(false));
      });
  };
}

export function deletePostComment (id) {
  return (dispatch) => {
    const options = {
      method: 'DELETE',
      url: SERVICES.GET_COMMENT_DETAIL(id)
    };

    dispatch(setLoading(true));

    return fetch(options)
      .then(() => {
        dispatch(setError(false));
        dispatch(deleteDataComment(id))
        dispatch(setLoading(false));
      })
      .catch(() => {
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

export function insertDataComment (data) {
  return {
    type: ACTIONS.INSERT_POST_COMMENT,
    data,
  };
}

export function updateDataComment (data) {
  return {
    type: ACTIONS.UPDATE_POST_COMMENT,
    data,
  };
}

export function deleteDataComment (data) {
  return {
    type: ACTIONS.DELETE_POST_COMMENT,
    data,
  };
}

export function setDataComments (data) {
  return {
    type: ACTIONS.SET_POST_COMMENTS,
    data,
  };
}

export function setDataUser (data) {
  return {
    type: ACTIONS.SET_POST_DETAIL_USER,
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
