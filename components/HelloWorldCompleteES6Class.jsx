const jsxQuery = require('jsxquery');

class HelloWorld extends jsxQuery.Component {
  render() {
    const { pageTitle, headerText } = this.props;
    
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
  }
}

module.exports = HelloWorld;
