const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url
  if (url === '/'){
    res.setHeader('Content-Type', 'text/html' )
    res.write('<html>')
    res.write('<head><title>Assignment1</title></head>')
    res.write('<body><form action="/create-user" method="post"><input type="text" name="username"></input><button type="submit">Send</button></form></body>')
    res.write('</html>')
    res.end()
  }
  
  if (url === '/users'){
    res.setHeader('Content-Type', 'text/html' )
    res.write('<html>')
    res.write('<head><title>Assignment1</title></head>')
    res.write('<body><ul><li>User1</li><li>User1</li></ul></body>')
    res.write('</html>')
    res.end()
  }
// send html resp 'page not found'
  if(url === '/create-user' && req.method === 'POST'){
    const body = []
    req.on('data', (chunk)=> {
      body.push(chunk)
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      console.log('parsedBody: ', parsedBody.split('=')[1])
    })
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
  }

})

server.listen(3000)