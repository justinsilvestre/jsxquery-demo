var path = require('path');
var jsxQueryBuild = require('jsxquery-build');

var schemaPath = path.join(__dirname, 'examples', 'filetree.jsx'); 
var options = {
  markupOutputDirectory: path.join(__dirname, 'examples', 'html'),
  test: true,
  babelOptions: { presets: ['es2015'] },
}
jsxQueryBuild(schemaPath, options);
