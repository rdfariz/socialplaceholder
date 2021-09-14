import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import pages from './pages';
import { ROUTES } from './configs';
import './index.css';

function App (props) {
  const { store } = props;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>  
          <Route component={pages.Home} exact path={ROUTES.HOME()} />
          <Route component={pages.Profil} path={ROUTES.PROFILE()} />
          <Route component={pages.PostDetail} path={ROUTES.POST_DETAIL(':id')} />
          <Route component={pages.UsersDetail} path={ROUTES.USERS_DETAIL(':id')} />
          <Route component={pages.Users} path={ROUTES.USERS()} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired
};


export default App;
