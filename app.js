require("dotenv").config();
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')


let username = 'EdnGG'

app.use(morgan('tiny'))
//'CORS' permite acceder a la app desde otro dominio
app.use(cors())
// 'express.json()', sirve para las respuestas
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use(require('./routes/routes'))

// Setting PORT
app.set("Port", process.env.PORT || 3000);

app.listen(app.get('Port'), () => {
  console.log('Port listening on: ', app.get('Port') )
})