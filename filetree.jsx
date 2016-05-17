var jsxQuery = require('jsxquery');
var HelloWorld = require('./components/HelloWorld.jsx');

module.exports = {
  myFirstJsp: <HelloWorld />,
  mySecondJsp: <HelloWorld />,
  aDirectory: {
    aSubDirectoryWithOneFile: {
      anotherJsp: <HelloWorld />,
    },
    yetAnotherJsp: <HelloWorld />
  }
};