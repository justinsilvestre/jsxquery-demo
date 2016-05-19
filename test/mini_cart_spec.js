const expect = require('expect');
const jsxQuery = require('jsxquery');

const setupDom = require('./helpers/setupDom');
const MiniCart = require('../components/MiniCart.jsx');
const cart = require('./fixtures/cart');

describe('Mini-cart component', () => {
  const emptyCartMessage = 'Your shopping cart is empty.';
  const emptyCartMessageInQuotes = JSON.stringify(emptyCartMessage);

  describe('when cart is empty', () => {
    before((done) =>
      setupDom(<MiniCart {...cart.emptyCart} />, done)
    );

    it('displays no items in cart', () => {
      expect($('.mini-cart-item').length).toEqual(0)
    });

    it('renders empty cart message', () => {
      expect($(`p:contains(${emptyCartMessageInQuotes})`).length).toEqual(1)
    });
  })

  describe('when cart is not empty', () => {
    before((done) =>
      setupDom(<MiniCart {...cart.cartWithThreeItems} />, done)
    );

    it('displays as many cart items as are present', () => {
      expect($('.mini-cart-item').length).toEqual(3)
    });

    it('does not render empty cart message', () => {
      expect($(`p:contains(${emptyCartMessageInQuotes})`).length).toEqual(0)
    });
  }); 
});