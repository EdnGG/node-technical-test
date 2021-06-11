import express from 'express'
const router = express.Router()

const jwt = require('jsonwebtoken')

const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

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

// 

async function verify( token = '') {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,  
  });
  const payload = ticket.getPayload();
  // console.log(payload.name)
  // console.log(payload.email)
  // console.log(payload.picture)

  return {
    name: payload.name,
    email: payload.email,
    imgUrl: payload.picture,
    // google: true
  }
}


//

// POST Login (GOOGLE AUTH)

router.post('/google', async (req, res) => {
  console.log('Google user: ', req.body)

  const body = {
    name: req.body.name,
    email: req.body.email,
    image: req.body.imgUrl,
    // token: req.body.id_token
    // role: req.body.role,
  }

  try {

  const token = await req.body.id_token
  console.log('token: ', token)
  
  let googleUser = await verify( token )
    .catch(err => {
      return res.status(403).json({
        ok: false,
        err
    })
  })

  // const userDB = await User.create(body)
  // res.json(userDB)
  
    // // Validating email
    // const userDB = await User.findOne({ email: googleUser.email })


    if (!userDB) {
    
    const userDB = await User.create(body)
  res.json(userDB)
    //   return res.status(400).json({
    //     message: 'Email not found'
    //   })
    } 

    // if (userDB) {
    //     return res.json({
    //       ok: true,
    //       user: userDB,
    //       token
    //     })
    // }
    else {
    // if user dosen't exist on DB
      let user = new User()

      user.name = googleUser.name
      user.email = googleUser.email
      user.image = googleUser.imgUrl
      // user.google = true,
      // user.
      user.pass = "123123123"

      user.save((err, userDB) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            err
          })
        }

        let token = jwt.sign({
          user: userDB
          }, 'secret',{ expiresIn: process.env.CADUCIDAD_TOKEN })

        res.json({
          ok: true,
          user: userDB,
          token
        })

      })
    }

  } catch (err) {
    return res.status(400).json({
      mensaje: 'Something was wrong',
      err
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

  const userDB = await User.create(body)
    res.json(userDB)

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