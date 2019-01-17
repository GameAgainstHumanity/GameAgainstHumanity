import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'; 
import App from './containers/App';
import store from './reducers/store';
import Styles from './scss/application.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
