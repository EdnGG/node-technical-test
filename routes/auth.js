const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');


const { googleSignin } = require('../controllers/auth');


const router = Router();

router.post('/google',[
    check('id_token', 'El id_token es necesario').not().isEmpty(),
    // validarCampos
], googleSignin );

 
module.exports = router;