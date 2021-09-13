import React from 'react';
import { render } from 'react-dom';
import configureStore from './configs/store';
import App from './App';

const store = configureStore();

render(
  <div>
    <App store={store} />
  </div>,
  document.getElementById('root')
);