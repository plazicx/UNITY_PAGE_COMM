# UNITY_PAGE_COMM

https://youtu.be/GXI3hqTRnnE?list=PLBzVDxmRlxHsRquQeDtuwjZftbz7520gG

https://www.patrykgalach.com/2020/04/27/unity-js-plugin/

https://bitbucket.org/gaello/unity-js-plugin/src/master/

in the folder where I build html5 of unity project there is a server.js :
----------------------------------------------------------------
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

----------------------------------------------------------------



then with nexe I can create server.exe there

and running it should give us unity with web-page communication!




