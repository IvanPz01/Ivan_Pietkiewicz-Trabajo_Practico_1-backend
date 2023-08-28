const { Router } = require("express");

const asistCtrl = require('../controllers/Asist.controllers')

const router = Router();

// Rutas para Crear Usuarios

router.post('/NewUser', asistCtrl.confirmarAisit );

// Rutas para Eliminar usuario
router.get('/api/:id', );

module.exports = router;