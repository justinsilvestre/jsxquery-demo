var jsxQuery = require('jsxquery');

var HelloWorld = jsxQuery.createClass({
  render: function() {
    var pageTitle = this.props.pageTitle;
    var headerText = this.props.headerText;
    
    return (
      <html>
        <head>
          <title>{pageTitle}</title>
        </head>
        <body>
          <h1>{headerText}</h1>
        </body>
      </html>
    );
  },
})

module.exports = HelloWorld;
