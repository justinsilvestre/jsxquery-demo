const expect = require('expect');
const fs = require('fs');
const jsxQuery = require('jsxquery');
const setupDom = require('./helpers/setupDom');
const GlobalNavigation = require('../components/GlobalNavigation.jsx');
const user = require('./fixtures/user');
const cart = require('./fixtures/cart');

describe('JS for global navigation menu', () => {
  describe('for collapsible mini-cart', () => {
    beforeEach(setupDom(<GlobalNavigation {...cart.cartWithThreeItems} {...user.userIsLoggedIn} />,
      fs.readFileSync('./js/globalNavigation.js', 'utf8')))

    it('starts off with mini-cart hidden', () => {
      expect($('#mini-cart-panel').css('display')).toEqual('none');
    })

    it('shows mini-cart when button is clicked', (done) => {
      $('#show-mini-cart').trigger('click');

      // wait 400ms for slideDown() to finish
      setTimeout(() => {
        expect($('#mini-cart-panel').css('display')).toNotEqual('none');
        done();
      }, 400)
    });

    it('hides mini-cart when button is clicked', (done) => {
      $('#show-mini-cart').trigger('click');
      $('#hide-mini-cart').trigger('click');

      // wait 400ms for slideUp() to finish
      setTimeout(() => {
        expect($('#mini-cart-panel').css('display')).toNotEqual('none');
        done();
      }, 400)
    })
  });
});
