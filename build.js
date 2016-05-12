var path = require('path'); // this is a native Node module for dealing with file paths
var jsxQueryBuild = require('jsxquery-build');

var schemaPath = path.join(__dirname, 'filetree.jsx'); // this is a system-agnostic way of writing './filetree.jsx'
var options = {
  markupOutputDirectory: path.join(__dirname, 'jsp'), // './jsp'
}
jsxQueryBuild(schemaPath, options);
