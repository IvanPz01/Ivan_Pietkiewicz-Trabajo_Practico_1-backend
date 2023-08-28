const usuario = require('../models/user.model');
const evento = require('../models/event.model');
const asistencia = require('../models/assist.model');


usuario.hasMany(evento, {
    foreignKey: "id_usuario"
})
evento.hasMany(asistencia, {
    foreignKey: "id_evento"
})