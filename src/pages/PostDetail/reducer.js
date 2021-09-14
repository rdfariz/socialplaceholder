import { ACTIONS } from '../../constants';

const initialState = {
  post: {},
  comments: []
};

export default function reducer (state = initialState, action) {
  const { type, data } = action;
  const {
    SET_POST_DETAIL, SET_POST_COMMENTS, INSERT_POST_COMMENT, UPDATE_POST_COMMENT, DELETE_POST_COMMENT
  } = ACTIONS;

  switch (type) {
    case SET_POST_DETAIL:
      return {
        ...state,
        post: Object.assign(state.post, data)
      };
    case SET_POST_COMMENTS:
      return {
        ...state,
        comments: data,
      };
    case INSERT_POST_COMMENT:
      return {
        ...state,
        comments: [...state.comments, data]
      };
    case UPDATE_POST_COMMENT: {
      const newState = {...state};
      const finalState = newState.comments.map((el) => {
        if (el.id === data.id) { return data; }
        return el;
      })

      return {
        ...state,
        comments: finalState
      };
    };
    case DELETE_POST_COMMENT: {
      const newState = {...state};
      const finalState = newState.comments.filter(item => item.id !== data);
      return {
        ...state,
        comments: finalState
      };
    };
    default:
      return state;
  }
}
