const cartData = {
  cartIsEmpty: 'order.totalItemCount == 0',
  cartHasItems: 'order.totalItemCount > 0',
  cartCount: '${order.totalItemCount == 0}',
  cartItems: '${order.commerceItems}',
};

module.exports = cartData;