const { response } = require('express');
const bcryptjs = require('bcryptjs')

const User = require('../models/user.js');

const { generarJWT } = require('../helpers/generar-jwt');
const { googleVerify } = require('../helpers/google-verify');

const googleSignin = async(req, res = response) => {

    const id_token  = req.body.id_token;
    // id_token llega vacio
    //console.log('token: ', id_token)
    // console.log('res.body: ', res.body)
    
    try {
        const { email, name, image } = await googleVerify( id_token );
        
        let user = await User.findOne({ email });

        if ( !user ) {
            // Tengo que crearlo
            const data = {
                name,
                email,
                pass: ':P',
                image,
                google: true
            };

            user = new User( data );
            let newUser = await user.save();
            console.log('newUser', newUser)
            // // Generar el JWT
            const token = await generarJWT(newUser._id);
            
            res.json({
                user: newUser,
                token
            });
        }

        // Si el usuario en DB
        if (user) {
            res.json({
                user,
                token: await generarJWT(user._id)
            });
            // return res.status(401).json({
            //     msg: 'Hable con el administrador, usuario bloqueado'
            // });
        }
        
    } catch (error) {

        res.status(400).json({
            msg: 'Token de Google no es válido ' + error
        })

    }
}



module.exports = {
    googleSignin
}
