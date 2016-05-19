const expect = require('expect');
const jsxQuery = require('jsxquery');

const setupDom = require('./helpers/setupDom');
const GlobalHeader = require('../components/GlobalHeader.jsx');
const user = require('./fixtures/user');
const cart = require('./fixtures/cart');

// we use proxyquire() instead of require() to get the scripts we are testing
// so that its references to jQuery point to the jQuery we're going to set up
// inside our test DOM.
const proxyquire = require("proxyquire");

describe('Global header scripts', () => {
  const el = <GlobalHeader {...cart.cartWithThreeItems} {...user.userIsLoggedIn} />;

  describe('setup()', () => {
    beforeEach((done) => {
      setupDom(el, () => {
        const script = proxyquire('../js/GlobalHeader.js', { 'jquery': global.$ });
        script.setup();
        done();
      });
    });

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
      $('#mini-cart-panel').show();
      $('#hide-mini-cart').trigger('click');

      // wait 400ms for slideUp() to finish
      setTimeout(() => {
        expect($('#mini-cart-panel').css('display')).toEqual('none');
        done();
      }, 400)
    });
  });
});
