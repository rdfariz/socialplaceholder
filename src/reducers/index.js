import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import root from './root';
import home from '../pages/Home/reducer';
import profil from '../pages/Profile/reducer';
import postDetail from '../pages/PostDetail/reducer';
import users from '../pages/Users/reducer';
import userDetail from '../pages/UsersDetail/reducer';

const rootReducer = combineReducers({
  root,
  home,
  profil,
  postDetail,
  users,
  userDetail,
  routing: routerReducer
});

export default rootReducer;
