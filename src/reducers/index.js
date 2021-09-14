import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import root from './root';
import home from '../pages/Home/reducer';
import postDetail from '../pages/PostDetail/reducer';
import users from '../pages/Users/reducer';
import userDetail from '../pages/UserDetail/reducer';
import userAlbums from '../pages/UserAlbums/reducer';
import albums from '../pages/Albums/reducer';

const rootReducer = combineReducers({
  root,
  form: formReducer,
  home,
  postDetail,
  users,
  userDetail,
  userAlbums,
  albums,
  routing: routerReducer
});

export default rootReducer;
