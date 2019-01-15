import * as types from '../constants/actionNames';

const axios = require('axios');

const initialState = {
  id: 3,
  points: 5,
  question: {
    id: 8,
    content: 'I love __',
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
    1: 'card1',
    2: 'card2',
    3: 'card3',
    4: 'card4',
    5: 'card5',
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
