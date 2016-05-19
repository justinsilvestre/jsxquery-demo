const jsxQuery = require('jsxquery');
const MiniCart = require('./MiniCart.jsx')

class GlobalNavigation extends jsxQuery.Component {
  render() {
    const { userIsLoggedIn, userFirstName } = this.props;
    
    const welcomeMessage = <p id="welcome-message">Welcome, {userFirstName}!</p>
    const logInLink = <a id="log-in-link" href="#">Log in</a>

    return (
      <nav id="main-menu">
        <section id="account">
          {userIsLoggedIn ? welcomeMessage : logInLink}
        </section>

        <ul id="main-menu-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Catalog</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </nav>
    );
  }
};


module.exports = GlobalNavigation;