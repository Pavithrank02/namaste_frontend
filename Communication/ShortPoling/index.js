const express = require('express')
const PORT = 3001

const app = express();

let data = "Intial data"

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.get('/getData', (req, res) => {
  res.send({
    data
  })
})

app.get('/updatedData', (req, res) => {
  data = "Updated data"
  res.send({
    data
  })
})
app.listen(PORT, () => {
  console.log("server is running on port", PORT)
})