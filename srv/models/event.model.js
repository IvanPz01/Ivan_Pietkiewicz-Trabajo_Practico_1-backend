
const dataTypes = require('sequelize/lib/data-types');
const { sequelize, DataTypes } = require('../dataBase/db');
const usuario = require('../models/user.model');


const Event = sequelize.define(
    'evento',
    {
        id_evento: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_evento: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: {
                args: true,
                messge: 'El evento ya existe'
            }
        },
        fecha: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        cantidad_persona: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });


module.exports = Event;