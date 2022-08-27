
var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: './dist/',
  port: 2000,
  name: 'my-http-server',
});


server.start(function () {
  console.log('Server Started At Port ', server.port);
});


