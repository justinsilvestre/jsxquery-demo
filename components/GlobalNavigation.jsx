const jsxQuery = require('jsxquery');

class GlobalNavigation extends jsxQuery.Component {
  render() {
    const { userIsLoggedIn, userFirstName } = this.props;
    
    const welcomeMessage = <p id="welcome-message">Welcome, {userFirstName}!</p>
    const logInLink = <a id="log-in-link" href="#">Log in</a>

    return (
      <nav id="global-menu">
        <section id="account">
          {userIsLoggedIn ? welcomeMessage : logInLink}
        </section>

        <ul id="global-menu-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Catalog</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </nav>
    );
  }
};


module.exports = GlobalNavigation;