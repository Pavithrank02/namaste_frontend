const express = require('express')
const PORT = 3001

const app = express();

app.use((req, res, next) => {
  res.setHeader('Context-Security-Policy', "frame-ancestors 'self'")
  res.cookie('sessionID', '12345', {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  })
  next();
})
app.use(express.static('public'))



app.get('/iframe2', (req, res) => {
  res.sendFile(__dirname + '/public/iframe2.html')
})
app.get('/iframe1', (req, res) => {
  res.sendFile(__dirname + '/public/iframe1.html')
})
app.listen(PORT, () => {
  console.log("server is running on port", PORT)
})