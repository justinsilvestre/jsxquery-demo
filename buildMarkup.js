const path = require('path');
const args = require('minimist')(process.argv.slice(2));
const { markup: buildMarkupFile, requireJsxQuery } = require('jsxquery-build')

const [inputFileRelative, outputFileRelative] = args._;
const { force } = args;
const inputFile = path.join(process.cwd(), inputFileRelative);
const outputFile = path.join(process.cwd(), outputFileRelative);

const el = requireJsxQuery(inputFile, { presets: ['es2015'] });

buildMarkupFile(el, outputFile, force);
