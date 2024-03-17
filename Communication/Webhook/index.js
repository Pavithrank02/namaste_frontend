const express = require('express')
const PORT = 3001

const app = express();


app.post('/webhook', (req, res) => {
  const payload = req.body

  console.log("Recieved webhook payload:", payload)

  res.status(200).send("webhook is successful")
})

app.listen(PORT, () => {
  console.log("server is running on port", PORT)
})