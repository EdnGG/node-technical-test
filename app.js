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

mongoose.connect(process.env.URI_CLOUD, options).then(
  () => {
    console.log('conectado a Mongo DB',)
  }, err => { 
    err
  } 
)

app.use(fileUpload({ useTempFiles: true }))


app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// app.use(require('./routes/auth'))
app.use(require('./routes/user'))
app.use(require('./routes/upload'))

// Midleware para vue.js router modo history
const history = require('connect-history-api-fallback')
app.use(history())

app.use(express.static(path.join(__dirname, 'public')))

app.set("Port", process.env.PORT || 3000);

app.listen(app.get('Port'), () => {
  console.log('Port listening on: ', app.get('Port') )
})