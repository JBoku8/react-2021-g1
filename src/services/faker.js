import Axios from 'axios';

const FakerUrl = process.env.REACT_APP_FAKER_API;

export const getFakerBooks = async ({ quantity = 1 }) => {
  try {
    const response = await Axios.get(`${FakerUrl}/books?_quantity=${quantity}`);
    return response.data.data;
  } catch (error) {
    console.trace(error);
    return undefined;
  }
};

export const getFakerCompanies = async (quantity = 1) => {
  try {
    const response = await Axios.get(`${FakerUrl}/companies?_quantity=${quantity}`);
    return response.data.data;
  } catch (error) {
    console.trace(error);
    return undefined;
  }
};

export const getTodoItemsAsync = async (start = 0, limit = 5) => {
  const res = await Axios.get(
    `${process.env.REACT_APP_API_URL}/todos?_start=${start}&_limit=${limit}&`,
  );
  return res.data;
};
