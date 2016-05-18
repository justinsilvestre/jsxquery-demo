module.exports.emptyCart = {
  cartIsEmpty: true,
  cartHasItems: false,
  cartCount: 0,
  cartItems: [],
};

function cartItem(name, sku) {
  return {
    auxiliaryData: {
      productRef: name,
      catalogRef: sku,
    },
  };
}

module.exports.cartWithThreeItems = {
  cartIsEmpty: false,
  cartHasItems: true,
  cartCount: 3,
  cartItems: [
    cartItem('Some Product', 123456789),
    cartItem('Another Product', 908765432),
    cartItem('Last Product', 928767890),
  ],
};
