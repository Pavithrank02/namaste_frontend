const express = require('express')
const PORT = 3001

const app = express();

app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self';" +
    "script-src 'self' 'nonce-randomKey' 'unsafe-inline' 'http://unsecure.com;'"
  )
  next();
})

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
  console.log("server is running on port", PORT)
})