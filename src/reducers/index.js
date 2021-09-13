import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import home from '../pages/Home/reducer';
import profil from '../pages/Profile/reducer';
import PostDetail from '../pages/PostDetail/reducer';

const rootReducer = combineReducers({
  home,
  profil,
  PostDetail,
  routing: routerReducer
});

export default rootReducer;
