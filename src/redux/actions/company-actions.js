import { getFakerCompanies } from '../../services';
// eslint-disable-next-line
import {
  GET_COMPANIES_REQUEST,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_FAILURE,
  // eslint-disable-next-line
} from '../action-types/company-types';

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
