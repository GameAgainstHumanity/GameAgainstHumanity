import * as types from '../constants/actionNames';

const axios = require('axios');

const initialState = {
  players: [
    {
      
    },
  ],
  turn: true,
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
