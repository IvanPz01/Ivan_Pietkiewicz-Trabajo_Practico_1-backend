const { Router } = require('express');

const { crearEvento,
    obtenerEvento,
    obtenereventos,
    actualizarEvento,
    eliminarEvento  } = require('../controllers/Event.controllers')

    const router = Router();


    // Crear evento
    router.post('/', crearEvento);

    // Obtener un solo evento
    router.get('/Evento', obtenerEvento);

    // Obtener todos los eventos
    router.get('/Eventos', obtenereventos);

    // Actualizar el evento
    router.put('/Evento/:id', actualizarEvento);

    // Eliminar un evento
    router.delete('/Event/delete/:id', eliminarEvento);