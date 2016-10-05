//Server that does math when end point is called 
const PORT = 8000
const http = require('http')

const server = http.createServer((req, res) => {
 
  let { url, method } = req
  let [ firstSlash, math, operator, numOne, numTwo  ] = url.split('/')

  numOne = parseInt(numOne)
  numTwo = parseInt(numTwo)

  if(method === 'GET') {
    switch(operator){
      case 'add':
        res.write(JSON.stringify(numOne + numTwo))
        res.end()
        break 
      case 'subtract':
        res.write(JSON.stringify(numOne - numTwo))
        res.end()
        break 
      case 'divide':
        res.write(JSON.stringify(numOne / numTwo))
        res.end()
        break
      case 'multiply':
        res.write(JSON.stringify(numOne * numTwo))
        res.end()
        break 
      case 'square':
        res.write(JSON.stringify(numOne * numOne))
        res.end()
        break
      case 'cube':
        res.write(JSON.stringify(numOne * numOne * numOne))
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