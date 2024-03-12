const express = require('express')
const PORT = 3001

const app = express();

const redirectToHttps = (req, res, next) => {
  if (req.headers['x-forward-proto'] !== 'https') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''))
  }
  next()
}
app.use(redirectToHttps);
app.use((req, res, next) => {
  res.removeHeader("X-Powered-By");
  res.setHeader('Referrer-Policy', 'origin');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')

  next();
})


app.get('/list', (req, res) => {
  res.send([{
    id: 1,
    title: "Namaste Frontend Design"
  }])
})
app.listen(PORT, () => {
  console.log("server is running on port", PORT)
})