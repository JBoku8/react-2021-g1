import * as types from '../action-types';

const initialState = {
  counter: 0,
  message: 'Redux IS AWESOME.',
  error: null,
  auth: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    // Counter
    case types.ADD_NUMBER:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case types.SUBTRACT_NUMBER:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    case types.RESET_NUMBER:
      return {
        ...state,
        counter: 0,
      };

    // AUTH
    case types.SET_AUTH_USER:
      return {
        ...state,
        auth: action.payload,
      };

    case types.SET_AUTH_GUEST:
      return {
        ...state,
        auth: null,
      };

    default:
      return state;
  }
};