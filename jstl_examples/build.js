var exec = require('child_process').exec;

var controlFlow = 'npm run build-file examples/controlFlow.jsx examples/html/controlFlow.html';
var dynamicValues = 'npm run build-file examples/dynamicValues.jsx examples/html/dynamicValues.html';
var iteration = 'npm run build-file examples/iteration.jsx examples/html/iteration.html';

var execP = (command) => new Promise((res, rej) =>
  exec(command, (err, stdout, stderr) => { console.log(stdout); console.log(stderr); err ? rej() : res(); })
);

execP(controlFlow)
  .then(() => execP(dynamicValues))
  .then(() => execP(iteration));