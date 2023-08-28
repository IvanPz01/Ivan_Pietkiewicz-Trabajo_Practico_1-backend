const { sequelize, DataTypes } = require('../dataBase/db')

const usuario = sequelize.define(
    'user',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincremet: true
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
          contraseña: {
            type: DataTypes.STRING(100),
            allowNull: false,
          },
    });
    usuario.sync({ force: true }).then(() => {
        console.log("Tabla de Usuario creada");
      });