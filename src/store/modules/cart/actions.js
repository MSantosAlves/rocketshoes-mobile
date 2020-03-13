export function addToCart(product) {
  return {
    type: '@CART/ADD',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@CART/REMOVE',
    id,
  };
}
