const jsxQuery = require('jsxquery');


function productLi(productData, i) {
  return (<li class="product">
    <span class="index">{i}</span>
    <span class="product-name">{productData.name}</span>
    <span class="product-price">{productData.price}</span>
  </li>);
}

var Iteration = jsxQuery.createClass({
  render() {
    return (<ul>
      {this.props.productList.map(productLi)}
    </ul>);
  },
});

const testDataArray = [
  {
    name: 'applesauce',
    price: '$3.50',
  },
  {
    name: 'pork chops',
    price: '$7.20'
  },
  {
    name: 'crumpets',
    price: '£2.80',
  }
];

export default Iteration;

module.exports =
(<html>
  <head>
    <meta charset="utf8" />
    <title>Dynamic values</title>
  </head>
  <body>

    <h1>The Original</h1>
    <pre>{<Iteration productList="${catalog.allProducts}" />.markup()}</pre>

    <h1>With Test Data Array</h1>
    <Iteration productList={testDataArray} />
    
  </body>
</html>);
