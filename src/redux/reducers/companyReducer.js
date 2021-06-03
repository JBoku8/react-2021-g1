import {
  GET_COMPANIES_FAILURE,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_REQUEST,
} from '../action-types/company-types';

const initialState = {
  error: null,
  loading: false,
  data: [],
};

export const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    // companies
    case GET_COMPANIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_COMPANIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        data: null,
      };
    case GET_COMPANIES_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default companyReducer;
