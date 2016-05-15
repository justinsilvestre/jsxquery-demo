const jsxQuery = require('jsxquery');

const DynamicValues = jsxQuery.createClass({
  render() {
    const { jstlExpression, cOutTag } = this.props

    return (<div>
      <p className={jstlExpression}>This is from a JSTL Expression: {jstlExpression}</p>
      <p>This is from a c:out tag: {cOutTag}</p>
    </div>);
  }  
})

const jstlProps = {
  jstlExpression: '${someValue == anotherValue}',
  cOutTag: <c:out val="${someOtherValue}" />,
};

const testProps = {
  jstlExpression: 'Ta-dah!',
  cOutTag: 'Replaced!',
};

module.exports = 
(<html>
  <head><title>Dynamic values</title></head>
  <body>

    <h1>The Original</h1>
    <pre>{<DynamicValues {...jstlProps} />.markup()}</pre>

    <h1>With Test Data</h1>
    <DynamicValues {...testProps} />
    
  </body>
</html>);