const jsxQuery = require('jsxquery');
const MainMenu = require('./MainMenu')
const MiniCart = require('./MiniCart.jsx')

class GlobalHeader extends jsxQuery.Component {
  render() {
    const { logoImage } = this.props;

    return (
      <header id="global-header">
        <img src={logoImage} alt="" />
        <MainMenu {...this.props} />
        <MiniCart {...this.props} />
      </header>
    );
  }
};


module.exports = GlobalHeader;