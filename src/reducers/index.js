import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import home from '../pages/Home/reducer';
import profil from '../pages/Profile/reducer';
import postDetail from '../pages/PostDetail/reducer';

const rootReducer = combineReducers({
  home,
  profil,
  postDetail,
  routing: routerReducer
});

export default rootReducer;
