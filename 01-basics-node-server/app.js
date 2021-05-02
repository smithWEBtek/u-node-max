
const http = require('http');
const routes = require('./routes');

console.log('someText: ', routes.someText)
const server = http.createServer(routes.handler);

server.listen(3000);
 