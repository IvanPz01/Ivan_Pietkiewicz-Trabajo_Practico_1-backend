const { Router } = require("express");

const validateSchema = require('../middleware/validation')
const UserSchermaCreate = require('../models/user.validacion')

const usuarioCtrl = require('../controllers/User.Controllers')

const router = Router();

// Rutas para Crear Usuarios

router.post('/NewUser', UserSchermaCreate, validateSchema, usuarioCtrl.crearUsuario);

// Rutas para Eliminar usuario
router.get('/api/:id', usuarioCtrl.eliminarUsuario);

module.exports = router;