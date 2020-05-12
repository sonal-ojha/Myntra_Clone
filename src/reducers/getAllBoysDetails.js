function fetchAllBoysData(state, action) {
  const { payload } = action;
  return {
    ...state,
    allBoysProducts: payload.data,
  }
}

export function getAllBoysDetails(state = {}, action) {
  switch(action.type) {
    case 'GET_ALL_BOYS_PRODUCTS': return fetchAllBoysData(state, action);
    default: return state;
  }
}