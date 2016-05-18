const jsxQuery = require('jsxquery');
const getProductUrl = require('../componentsData/cartDroplets').getProductUrl;

class MiniCart extends jsxQuery.Component {
  render() {
    const { cartIsEmpty, cartCount, cartItems } = this.props;

    return (
      <section id="mini-cart">
        {cartIsEmpty
          ? <p>Your shopping cart is empty.</p>
          : <p>You have <strong>{cartCount}</strong> items in your cart.</p>}

        <button id="show-mini-cart">Show Cart</button>

        <section id="mini-cart-panel" style="display: none">
          <button id="hide-mini-cart">Hide Cart</button>
          <ul id="mini-cart-items">
            {cartItems.map((item) =>
              <li class="mini-cart-item">
                {getProductUrl(item)}
                <h2><a href="${productUrl}">{item.auxiliaryData.productRef.displayName}</a></h2>
              </li>
            )}
          </ul>
        </section>
      </section>
    );
  }
};


module.exports = MiniCart;