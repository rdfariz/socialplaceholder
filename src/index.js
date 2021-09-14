import React from 'react';
import { render } from 'react-dom';
import configureStore from './configs/store';
import App from './App';

const store = configureStore();

render(
  <App store={store} />,
  document.getElementById('root')
);