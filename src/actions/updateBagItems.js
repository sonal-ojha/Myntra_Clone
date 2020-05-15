function addItemToCart(item) {
  return {
    type: 'ADD_ITEM_TO_BAG',
    payload: item,
  }
}

export const addItemToBag = (product) => {
  return (dispatch => {
    dispatch(addItemToCart(product));
  })
}

// Remove item from bag

function removeItem(productId) {
  return {
    type: 'REMOVE_ITEM_FROM_BAG',
    payload: productId
  }
}

export const removeItemFromBag = (productId) => {
  return (dispatch => {
    dispatch(removeItem(productId));
  })
}