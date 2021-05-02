const fs = require('fs');
const usersFile = require('./users.txt')

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write(greetingHtml);
    return res.end();
  }

  if (url === '/' && method === "POST") {
    const body = [];
    req.on('data', (chunk) => {
      console.log('chunk: ', chunk)
      body.push(chunk);
    });

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log('parsedBody: ', parsedBody)
      const newUser = parsedBody.split('=')[1];
      fs.writeFile('users.txt', newUser, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      })
    });
  }

  if (url === '/users') {
    console.log('usersFile: ', usersFile)
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html')
  res.write(greetingHtml)
  res.end();
}


let usersHtml = `
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
  <h1>Users:<h1>
  <div>
    <ul>
      <li>james</li>
      <li>ginny</li>
      <li>selma</li>
    </ul>
  </div>
</body>
</html>
  `
let greetingHtml = `
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
  <h1>hello, welcome to node js</h1>
  <form>
    <p>Create new user</p>
    <p><input type="text" name="newUser" method="POST" placeholder="Enter new user name" /></p>
    <button type="submit">Create new user</button>
  </form>
</body>
</html>
`

exports.handler = requestHandler;