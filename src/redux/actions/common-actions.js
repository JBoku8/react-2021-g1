import { getFakerCompanies } from '../../services';
// eslint-disable-next-line
import {
  ADD_NUMBER,
  SUBTRACT_NUMBER,
  RESET_NUMBER,
  GET_COMPANIES_REQUEST,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_FAILURE,
  // eslint-disable-next-line
} from '../action-types';

export const addNumberAction = (payload) => ({
  type: ADD_NUMBER,
  payload,
});

export const subtractNumberAction = (payload) => ({
  type: SUBTRACT_NUMBER,
  payload,
});

export const resetNumberAction = () => ({
  type: RESET_NUMBER,
});

// companies

export const getCompaniesRequest = () => ({
  type: GET_COMPANIES_REQUEST,
});

export const getCompaniesSuccess = (payload) => ({
  type: GET_COMPANIES_SUCCESS,
  payload,
});

export const getCompaniesFailure = (payload) => ({
  type: GET_COMPANIES_FAILURE,
  payload,
});

export const getCompaniesAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(getCompaniesRequest());
      const result = await getFakerCompanies(5);
      dispatch(getCompaniesSuccess(result));
    } catch (error) {
      dispatch(getCompaniesFailure(error));
    }
  };
};
