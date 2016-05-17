var repl = require('repl');
var debug = require('debuglog');
var vm = require('vm');
var babel = require('babel-core');
var jsxQuery = require('jsxquery');

var defaultEval = function (code, context, file, cb) {
  var err, result;
  // first, create the Script object to check the syntax
  try {
    var script = vm.createScript(code, {
      filename: file,
      displayErrors: false
    });
  } catch (e) {
    err = e;
    debug('parse error %j', code, e);
  }

  if (!err) {
    try {
      if (this.useGlobal) {
        result = script.runInThisContext({ displayErrors: false });
      } else {
        result = script.runInContext(context, { displayErrors: false });
      }
    } catch (e) {
      err = e;
      if (err && process.domain) {
        debug('not recoverable, send to domain');
        process.domain.emit('error', err);
        process.domain.exit();
        return;
      }
    }
  }

  cb(err, result);
}

/*
* start babel repl
*/

var babelOptions = {
  plugins: [jsxQuery.babelTransformNamespacedNames,
    ['transform-react-jsx', { pragma: 'jsxQuery.createElement' }],
    jsxQuery.babelTransformConditionalExpressions
    ]
}

var start = function (options) {
  var defaults = {
    prompt: "> ",
    userGlobal: true,
    eval: function (code, context, file, cb) {
      code = babel.transform(code, babelOptions).code;
      defaultEval.call(this, code, context, file, cb);
    }
  };

  options = options || {};

  for (var k in defaults) {
    if (!(k in options)) options[k] = defaults[k];
  }

  return repl.start(options);
};

var replServer = start.call(repl, {
  prompt: "jsxquery-sandbox > ",
  useColor: true
});

replServer.context.jsxQuery = jsxQuery;
