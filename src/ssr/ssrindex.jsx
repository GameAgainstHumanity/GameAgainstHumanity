import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
// import store from '../client/reducers/store';
import App from './app';

const state = window.__STATE__;
delete window.__STATE__;
// const store = configureStore(state);
hydrate(
  <App />,
  document.querySelector('#app'),
);
