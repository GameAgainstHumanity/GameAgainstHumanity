import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
// import store from '../../client/reducers/signupReducer';
import App from '../ssr/app'; // blank app
// import Answers from '../../client/components/Answers'

module.exports = function render(initialState) {
  // Model the initial state
  // const store = configureStore(initialState);
  const content = renderToString(
    <App />,
  );
  const preloadedState = {};
  return { content, preloadedState };
};
