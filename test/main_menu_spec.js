const expect = require('expect');
const jsxQuery = require('jsxquery');

const setupDom = require('./helpers/setupDom');
const MainMenu = require('../components/MainMenu.jsx');
const user = require('./fixtures/user');
const cart = require('./fixtures/cart');

describe('Main menu navigation component', () => {
  describe('when user is logged in', () => {
    before((done) =>
      setupDom(<MainMenu {...cart.cartWithThreeItems} {...user.userIsLoggedIn} />, done)
    );

    it('displays welcome message', () => {
      expect($('#welcome-message').length).toEqual(1)
    });

    it('does not render log-in link', () => {
      expect($('#log-in-link').length).toEqual(0)
    });
  });  

  describe('when user is not logged in', () => {
    before((done) =>
      setupDom(<MainMenu {...cart.cartWithThreeItems} {...user.userIsNotLoggedIn} />, done)
    );

    it('does not display welcome message', () => {
      expect($('#welcome-message').length).toEqual(0)
    });

    it('renders log-in link', () => {
      expect($('#log-in-link').length).toEqual(1)
    });
  })
});