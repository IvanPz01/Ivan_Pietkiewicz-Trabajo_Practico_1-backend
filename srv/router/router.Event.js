
const { Router } = require('express');
const EventCtrl = require('../controllers/Event.controllers');
const { Model } = require('sequelize');

const router = Router();


// Crear evento
router.post('/Evento/', EventCtrl.crearEvento);

// Obtener un solo evento
router.get('/Evento/', EventCtrl.obtenerEvento);

// Obtener todos los eventos
router.get('/Eventos/', EventCtrl.obtenereventos);

// Actualizar el evento
router.put('/Evento/:id', EventCtrl.actualizarEvento);

// Eliminar un evento
router.delete('/Event/:id', EventCtrl.eliminarEvento);

module.exports = router