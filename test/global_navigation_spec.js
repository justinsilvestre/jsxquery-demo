const expect = require('expect');
const jsxQuery = require('jsxquery');
const setupDom = require('./helpers/setupDom');
const GlobalNavigation = require('../components/GlobalNavigation.jsx');
const user = require('./fixtures/user');
const cart = require('./fixtures/cart');

describe('Global navigation menu component', () => {
  describe('when user is logged in', () => {
    before(setupDom(<GlobalNavigation {...cart.cartWithThreeItems} {...user.userIsLoggedIn} />));

    it('displays welcome message', () => {
      expect($('#welcome-message').length).toEqual(1)
    });

    it('does not render log-in link', () => {
      expect($('#log-in-link').length).toEqual(0)
    });
  });  

  describe('when user is not logged in', () => {
    before(setupDom(<GlobalNavigation {...cart.cartWithThreeItems} {...user.userIsNotLoggedIn} />));

    it('does not display welcome message', () => {
      expect($('#welcome-message').length).toEqual(0)
    });

    it('renders log-in link', () => {
      expect($('#log-in-link').length).toEqual(1)
    });
  })
});