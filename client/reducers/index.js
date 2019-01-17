import { combineReducers } from 'redux';

// import all reducers here

import gamereducer from './gamereducer';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  game: gamereducer,
});

// make the combined reducers available for import
export default reducers;
