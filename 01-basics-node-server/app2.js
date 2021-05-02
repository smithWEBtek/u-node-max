const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url;
  if(url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html')
  res.write(html)
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