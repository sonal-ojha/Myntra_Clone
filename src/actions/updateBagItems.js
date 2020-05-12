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