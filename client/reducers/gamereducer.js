import * as types from '../constants/actionNames';

const axios = require('axios');

const initialState = {
  id: 3,
  points: 5,
  question: {
    id: 8,
    content: 'I GET BY WITH A LITTLE HELP FROM?',
  },
  players: [
    {
      name: 'Frank',
      id: 3,
      points: 5,
      turn: true,
    },
    {
      name: 'Donte',
      id: 1,
      points: 20,
      turn: false,
    },
    {
      name: 'Mario',
      id: 2,
      points: 10,
      turn: false,
    },
  ],
  answerCards: {
    1: 'The Force',
    2: 'Tom Cruise',
    3: 'An ugly face.',
    4: 'Some got-damn peace and quiet.',
    5: 'The milk man.',
  },
  submissions: {
    1: 'Poor people',
    2: 'Being rich.',
  },
  turn: true,
  submitId: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_CHANGE: {
      return {
        name: action.payload,
        phone: action.payload,
        password: action.payload,
      };
    }

    default:
      return state;
  }
};

export default loginReducer;
