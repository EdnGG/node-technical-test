import express from 'express'
const router = express.Router()

const jwt = require('jsonwebtoken')

const {verificarAuth, verificarAdministrador } = require('../middlewares/auth')

// Importar el modelo User
import User from '../models/user.js'

// hash Password
const bcrypt = require('bcrypt')
const saltRounds = 10

//Filtering fields on http-PUT
const _ = require('underscore')

// Get 
// router.get('/', async (req, res) => {

//   // const body = {
//   //   nombre: req.body,
//   //   email: req.body,
//   //   role: req.body,
//   // }
//   try {

// /************************** */
//   // const commitUserGithub = ''
//   //   res.json(commitUserGithub)

//     res.send('Hello world')


//   } catch (error) {
//     return res.status(500).json({
//       mensaje: 'Something was wrong',
//       error
//     })
//   }
// })

// POST Login
router.post('/login', async (req, res) => {
  const body = req.body
  try {
    // Validating email
    const userDB = await User.findOne({ email: body.email })
    if (!userDB) {
      return res.status(400).json({
        message: 'Email not found'
      })
    } 

    // Validating Password
    if (!bcrypt.compareSync(body.pass, userDB.pass)) {
      return res.status(400).json({
        
        message: 'Wrong password '
      })
    }

    // Generar token
    const token = jwt.sign({
      data: userDB
    }, 'secret', {expiresIn: 60 * 60})

    res.json({
      userDB,
      token
    })

  } catch (err) {
    return res.status(400).json({
      mensaje: 'Something was wrong',
      error
    })
  }
})

// POST  New User (Signup)
router.post('/signup', async (req, res) => {

  const body = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  }
  // Encriptando el password
  body.pass = bcrypt.hashSync(req.body.pass, saltRounds)
  try {

/************************** */
  const userDB = await User.create(body)
    res.json(userDB)

    // tokes is not necessary cuz user has been created
    // res.json({
    //   usuarioDB,
    //   token
    // })


  } catch (error) {
    return res.status(500).json({
      mensaje: 'Something was wrong',
      error
    })
  }
})

// PUT User (Actualizar usuario)
router.put('/user/:id', [verificarAuth, verificarAdministrador], async(req, res) => { 
  const _id = req.params.id
  /*
  con 'underscore' limitamos los campos que el usuario puede modificar
  '_.pick()'
  */
  const body = _.pick(req.body, ['nombre', 'email', 'pass', 'activo'])
  if (body.pass) {
    body.pass = bcrypt.hashSync(req.body.pass, saltRounds)
  }
  try {
    /*
      En esta parte: {new: true} es necesaria, de lo contrario nos devolveria
      el usuario sin actualizar
      En esta parte: {runValidators: true} es para que valide los roles
    */
    const usuarioDB = await User.findByIdAndUpdate(_id, body, { new: true, runValidators: true })
    return res.json(usuarioDB)
    
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Something was wrong',
      error
    })
  }

})

module.exports = router