import { ADD_NUMBER, RESET_NUMBER, SUBTRACT_NUMBER } from '../action-types/counter-types';

const initialState = {
  value: 0,
  message: 'Redux IS AWESOME.',
  error: null,
  loading: false,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    // Counter
    case ADD_NUMBER:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case SUBTRACT_NUMBER:
      return {
        ...state,
        value: state.value - action.payload,
      };
    case RESET_NUMBER:
      return {
        ...state,
        value: 0,
      };

    default:
      return state;
  }
};

export default counterReducer;
