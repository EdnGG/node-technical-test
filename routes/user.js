import express from 'express'
const router = express.Router()

const jwt = require('jsonwebtoken')

//

const { check } = require('express-validator');

// const { validarCampos } = require('../middlewares/validar-campos');

const { googleSignin } = require('../controllers/auth');


//

const {verificarAuth, verificarAdministrador } = require('../middlewares/auth')

// Importar el modelo User
import User from '../models/user.js'

// hash Password
const bcrypt = require('bcrypt')
const saltRounds = 10

//Filtering fields on http-PUT
const _ = require('underscore')

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

/*************** */

router.post('/google',
  // [
    // check('id_token', 'El id_token es necesario').not().isEmpty(),
    // validarCampos
// ],
  googleSignin);



 /*****************/

// router.post('/google', async (req, res) => {
//   console.log('Hello from Google login route')

//   const { token_id } = req.body
//   console.log('Google user: ', req.body)
//   console.log('Token id: ', token_id)
// })

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

  const userDB = await User.create(body)
    res.json(userDB)

  } catch (error) {
    return res.status(500).json({
      mensaje: 'Something was wrong',
      error
    })
  }
})

module.exports = router