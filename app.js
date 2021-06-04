require("dotenv").config();

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'


const app = express()

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}
// Conexion to Mongo Atlas
mongoose.connect(process.env.URI_CLOUD, options).then(
  () => {
    console.log('conectado a Mongo DB')
  }, err => {
    err
  } 
)

app.use(fileUpload({ useTempFiles: true }))


app.use(morgan('tiny'))
//'CORS' permite acceder a la app desde otro dominio
app.use(cors())
// 'express.json()', sirve para las respuestas
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use(require('./routes/user'))

// Midleware para vue.js router modo history
const history = require('connect-history-api-fallback')
app.use(history())
/*
El 'path' nos sirve pra ubicarnos dentro del servidor
*/
app.use(express.static(path.join(__dirname, 'public')))

// Setting PORT
app.set("Port", process.env.PORT || 3000);

app.listen(app.get('Port'), () => {
  console.log('Port listening on: ', app.get('Port') )
})