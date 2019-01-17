import * as types from '../constants/actionNames';

const axios = require('axios');
const initialState = {
  currentText: '',
  question: {
    id: 8,
    content: 'I love food__'
  },
  players: [
    {
      name: 'Mario',
      points: 0,
      id: 1,
      turn: true,
      cards: ['1st card', '2nd card', '3rd card', '4th card', '5th card'],
      answer: '',
    },
    {
      name: 'Donte',
      points: 0,
      id: 2,
      turn: false,
      cards: [],
      answer: '',
    },
    {
      name: 'Frank',
      points: 0,
      id: 3,
      turn: false,
      cards: [],
      answer: '',
    }  
  ],
  turn: true,
  submitId: null,
};

// const initialState = {
//   id: 3,
//   points: 5,
//   question: {
//     id: 8,
//     content: 'I love __',
//   },
//   players: [
//     {
//       name: 'Frank',
//       id: 3,
//       points: 5,
//       turn: true,
//     },
//     {
//       name: '',
//       id: 1,
//       points: 20,
//       turn: false,
//     },
//     {
//       name: '',
//       id: 2,
//       points: 10,
//       turn: false,
//     },
//   ],
//   answerCards: {
//     1: 'card1',
//     2: 'card2',
//     3: 'card3',
//     4: 'card4',
//     5: 'card5',
//   },
//   turn: true,
//   submitId: null,
// };
const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_CHANGE: {
      return {
        ...state,
        currentText: action.payload,
        
      };
    }
    case types.HANDLE_JOIN_SUBMIT: {
      action.payload.preventDefault();
      const arrCopy = state.arr.slice();
      arrCopy.push(state.currentText);
      return {
        arr: arrCopy,
        currentText: '',
      }
    }

    default:
      return state;
  }
};

export default gameReducer;
