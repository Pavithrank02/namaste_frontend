const express = require('express')
const PORT = 3001
const cors = require("cors")

const app = express();
const allowOrigin = ['http://127.0.0.1:5502']
const corsOptions = {
  origin: function (origin, callback) {
    if (allowOrigin.indexOf(origin) !== - 1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error("cors not"))
    }
  }
}

app.use(cors(corsOptions))
app.get('/list', (req, res) => {
  res.send([{
    id: 1,
    title: "Namaste Frontend Design"
  }])
})
app.listen(PORT, () => {
  console.log("server is running on port", PORT)
})