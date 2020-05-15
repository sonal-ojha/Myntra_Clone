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

function removeProductFromCart(state, action) {
  const { payload } = action; // product Id
  const copyOfItemInBag = [...state.bagProducts];
  // Find Index
  const indexOfProduct = copyOfItemInBag.findIndex(item => item.id === payload);
  // Remove item from array
  copyOfItemInBag.splice(indexOfProduct, 1);
  return {
    ...state,
    bagProducts: copyOfItemInBag,
  }
}

export function updateBagData(state = initialState, action) {
  switch(action.type) {
    case 'ADD_ITEM_TO_BAG': return addItemToCart(state, action);
    case 'REMOVE_ITEM_FROM_BAG': return removeProductFromCart(state, action);
    default: return state;
  }
}