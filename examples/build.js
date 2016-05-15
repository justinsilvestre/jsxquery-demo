var exec = require('child_process').exec;

var controlFlow = 'npm run build-file examples/controlFlow.jsx examples/html/controlFlow.html';
var dynamicValues = 'npm run build-file examples/dynamicValues.jsx examples/html/dynamicValues.html';
var iteration = 'npm run build-file examples/iteration.jsx examples/html/iteration.html';

exec([controlFlow, dynamicValues, iteration].join(' && '))
  .stdout.on('data', function(data) {
      console.log(data); 
  });;

