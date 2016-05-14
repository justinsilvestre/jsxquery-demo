var exec = require('child_process').exec;

exec('npm run build-file examples/controlFlow.jsx examples/html/controlFlow.html');
exec('npm run build-file examples/dynamicValues.jsx examples/html/dynamicValues.html');
exec('npm run build-file examples/iteration.jsx examples/html/iteration.html');
