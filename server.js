const express = require('express')
const app = express()
const path = require('path')

const APP_PORT = process.env.port || 8080

const server = app.listen(APP_PORT, () => {
  console.log(`App running on port ${APP_PORT}`)
})

const io = require('socket.io').listen(server)
const desIO = require('socket.io-client')('http://192.168.1.108:8080')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', function (req, res) {
  desIO.on('connect', function () {
    console.log('client2 connected')
  })
  desIO.emit('chat', 'client1 sent')
  res.render('index')
})

io.on('connection', function (socket) {
  console.log('hello')
})
