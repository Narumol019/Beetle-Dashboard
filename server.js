// server.js
const express = require('express')
const path = require('path')
const history = require('connect-history-api-fallback')
const serveStatic = require('serve-static')
const app = express()

app.use(serveStatic(__dirname + '/dist'))

app.use(
  history({
    disableDotRule: true,
    verbose: true
  })
)

app.get('/*', function (req, res) {
  res.render(path.join(__dirname + '/dist/index.html'))
})

const port = process.env.PORT || 8000
app.listen(port)
console.log('server started ' + port)
