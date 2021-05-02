// types of modules, core modules
// http
// https
// fs
// path
// os

// 1) with named function
// const http = require('http')
// function reqListener(req, res) {
// }
// http.createServer((reqListener));


// 2) with anonymous function
// const http = require('http')
// http.createServer(function(req, res){
// });


// 3) with arrow function
const http = require('http')

const server = http.createServer((req, res) => {
  // console.log('req: ', req.url, req.method, req.headers)
  // process.exit()

  res.setHeader('Content-Type', 'text/html')
  res.write(html);
  res.end();
});

server.listen(3000);

let html = `
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>My Node Site</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="">
  </head>
  <body>
    <h1>Hello and welcome to Node js</h1>
    <p>there is a lot to learn</p>
  </body>
</html>
`