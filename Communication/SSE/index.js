const express = require('express')
const PORT = 3001

const app = express();

let data = "Intial data"

app.get('/sse', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Connection', 'keep-alive')
  res.setHeader('Cache-Control', 'no-cache')

  res.write("data: welcome to the server \n\n")


  const intervalId = setInterval(() => {
    res.write(`data: Server time ${new Date().toLocaleDateString()} \n\n`)
  }, 5000)

  req.on('close', () => {
    clearInterval(intervalId)
  })
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
  console.log("server is running on port", PORT)
})