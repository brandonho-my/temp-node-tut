const http = require('http');

const server = http.createServer((req,res) => {
  if(req.url === '/') {
    res.end('This is the home page')
  }
  if(req.url === '/about') {
    res.end('This is the about page')
  }
  res.end(`
  <h1>404</h1>
  <p>Page not found</p>
  <a href="/">Back to home</a>
  `)
})

server.listen(5000)