var connect = require('connect');
var serveStatic = require('serve-static');
function execute(command) {
    const exec = require('child_process').exec
  
    exec(command, (err, stdout, stderr) => {
      process.stdout.write(stdout)
    })
}
  

connect().use(serveStatic(__dirname)).listen(65201, function(){
    console.log('Server running on 65201...');
});

var command='start http://localhost:65201/index.html';
execute(command) // start command is different on linux and MacOS