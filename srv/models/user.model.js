const { sequelize, DataTypes } = require('../dataBase/db')

const usuario = sequelize.define(
  'user',
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre_usuario: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: {
        args: true,
        messge: "El email ya existe",
      },
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  });

module.exports = usuario;