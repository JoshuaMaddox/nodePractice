//Server that does math when end point is called 
const PORT = 8000
const http = require('http')
const md5 = require('md5')

const server = http.createServer((req, res) => {

  // https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50
 
  let { url, method } = req
  let [ empty, gravatar, email ] = url.split('/')
  newEmail = md5(email)

  if(method === 'GET') { 
    switch(gravatar){
      case 'gravatar':
        res.write(`http://www.gravatar.com/avatar/${newEmail}.jpg`)
        res.end()
        break 
      default:
        res.statusCode = 404
        res.end('404 Not Found')
    }
  } else {
    res.statusCode = 405
    res.end('405 Not Found')
  }
})

server.listen(PORT, err => {
  console.log(err ||  `Server listening on port ${PORT}`)
})