const express = require('express')
const PORT = 3001

const app = express();

let data = "Intial data"

const waitingList = []

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.get('/getData', (req, res) => {
  if (data !== req.query.lastData) {
    res.json({ data })

  } else {
    waitingList.push(res)
  }
})

app.get('/updatedData', (req, res) => {
  data = req.query.data

  while (waitingList.length > 0) {
    const client = waitingList.pop();
    client.json({ data })
  }

  res.send({ success: 'data updated successfully' })
})
app.listen(PORT, () => {
  console.log("server is running on port", PORT)
})