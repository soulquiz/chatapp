const express = require('express')
const app = express()
const path = require('path')

const APP_PORT = process.env.port || 8080

const server = app.listen(APP_PORT, () => {
  console.log(`App running on port ${APP_PORT}`)
})

const io = require('socket.io').listen(server)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index')
})

io.on('connection', function (socket) {
  console.log('hello')
})
