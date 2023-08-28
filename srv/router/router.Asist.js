const { Router } = require("express");

const { confirmarAisit } = require('../controllers/Asist.controllers')

const router = Router();

// Rutas para Crear Usuarios

router.get('/NewUser', confirmarAisit );

// Rutas para Eliminar usuario
router.get('/api/:id', );

module.exports = router;