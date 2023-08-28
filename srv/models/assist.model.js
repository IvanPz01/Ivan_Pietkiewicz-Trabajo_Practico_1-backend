const dataTypes = require('sequelize/lib/data-types');
const { sequelize, DataTypes } = require('../dataBase/db')
const evento = require('../models/event.model')


const asistencia = sequelize.define(
    'Asist',
    {
        id_asistencia: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_persona: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        presencia: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    });

module.exports = asistencia;