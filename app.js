const express = require('express')
const app = express()
const path = require('path')

const APP_PORT = 8080

// // ตั้งค่า เพื่อให้ express ทำการ render view ที่โฟลเดอร์ views
// // และใช้ template engine เป็น pug
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(APP_PORT, () => {
  console.log(`App running on port ${APP_PORT}`)
})
