export function addToCartRequest(id) {
  return {
    type: '@CART/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@CART/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@CART/REMOVE',
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@CART/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@CART/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}
