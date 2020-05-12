const initialState = {
  bagProducts: [],
};

function addItemToCart(state, action) {
  const { payload } = action;
  return {
    ...state,
    bagProducts: [ ...state.bagProducts, payload],
  }
}

export function updateBagData(state = initialState, action) {
  switch(action.type) {
    case 'ADD_ITEM_TO_BAG': return addItemToCart(state, action);
    default: return state;
  }
}