const jsxQuery = require('jsxquery');

const ControlFlow = jsxQuery.createClass({
  render() {
    const testCondition = this.props.testCondition;
    
    return (<div>
      <div>{testCondition ? <span>Two elements</span> : <em>trigger c:choose.</em>}</div>
      <div>{testCondition ? 'Strings favor' : 'conditional expressions.'}</div>
      <div>{testCondition ? <span>Only one possible outcome</span> : null}</div>
      <div>{testCondition ? null : <span>means a c:if tag</span>}</div>
      <div>{testCondition ? 'unless you\'re just dealing with a string.' : null }</div>
    </div>);
  },
});


module.exports =
(<html>
  <head><title>Dynamic values</title></head>
  <body>

    <h1>The Original</h1>
    <pre>{<ControlFlow testCondition="condition == true" />.markup()}</pre>

    <h1>With Test Condition Set to TRUE</h1>
    <ControlFlow testCondition={true} />

    <h1>With Test Condition Set to FALSE</h1>
    <ControlFlow testCondition={false} />
    
  </body>
</html>);