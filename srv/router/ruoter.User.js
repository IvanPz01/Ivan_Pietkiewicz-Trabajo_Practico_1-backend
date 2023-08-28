const { Router } = require("express");

const {crearUsuario, eliminarUsuario } = require('../controllers/User.Controllers')

const router = Router();

// Rutas para Crear Usuarios

router.get('/NewUser', crearUsuario );

// Rutas para Eliminar usuario
router.get('/api/:id', eliminarUsuario);

module.exports = router;