const express = require('express')
const bodyParser = require('body-parser')
const PORT = 5111
const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'public, max-age-86400')
  res.setHeader('Expires',)
  next()
})

app.use(express.static(path.join(__dirname + 'public'), {
  etag: false,
  cacheControl: false,
  lastModified: false,
})

)

app.listen(PORT, () => {
  console.log("server is running in", PORT)
})