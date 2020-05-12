import { boysData } from '../data';

function fetchBoysData(data) {
  return {
    type: 'GET_ALL_BOYS_PRODUCTS',
    payload: data,
  }
}

export const getAllBoysProducts = () => {
  return (dispatch => {
    // Dispatch Actions
    dispatch(fetchBoysData(boysData));
  })
}