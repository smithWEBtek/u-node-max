const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write(messageForm);
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log('chunk: ', chunk)
      body.push(chunk);
    });

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log('parsedBody: ', parsedBody)
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      })
    });
  }

  res.setHeader('Content-Type', 'text/html')
  res.write(html)
  res.end();
}

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

let messageForm = `
  <html>
  <head>
  <title>Enter message</title>
  </head>
  <body>
  <form action="/message" method="POST">
  <input type="text" name="message">
  <button type="submit">Send</button>
  </form>
  </body>
  </html>
  `
// 1)
  // module.exports = {
  //   handler: requestHandler,
  //   someText: 'Some hard coded text.'
  // };

  // 2)
  // module.exports.handler = requestHandler;
  // module.exports.someText = "Some text";

  // 3)
  exports.handler = requestHandler;
  exports.someText = "Some text again";