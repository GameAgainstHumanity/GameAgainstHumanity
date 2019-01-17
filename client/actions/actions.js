import * as types from '../constants/actionNames';

export const handleChange = (e) => { 
  return{ 
  type: types.HANDLE_CHANGE,
  payload: e.target.value
  }
};

export const handleJoinSubmit = (e) => {
  e.preventDefault();
  return {
    type: types.HANDLE_JOIN_SUBMIT,
    payload: e
  }  
}
