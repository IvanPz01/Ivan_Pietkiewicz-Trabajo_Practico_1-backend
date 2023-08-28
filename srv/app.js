const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
require('dotenv').config();

// se exportan las rutas a variables
const userRoutes = require('./router/ruoter.User');
const eventRuters = require('./router/router.Asist');
const asistRuters = require('./router/router.Event');
const { body, validationResult } = require("express-validator");
const app = express();

// middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rutas
app.use('/', userRoutes);
app.use('/', eventRuters);
app.use('/', asistRuters);


// post para el express validator
app.post(
  "/usuario",
  body("email").notEmpty().isEmail(),
  body("contraseña").notEmpty(),
  (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      return res.json(req.body);
    }
    console.log(req.body);
    res.status(400).json(errors.array());
  }
);


require("./models/user.model")
require("./models/event.model")
require("./models/assist.model")

const { sequelize } = require('./dataBase/db');


// conexion con la base de datos  
sequelize.sync({ force: true })
  .then(() => {
    console.log('Conexión a base de datos exitosa');
  })
  .catch((error) => console.log('Error al conectar a base de datos'));
require('./models/relaciones.model');
app.listen(process.env.PORT, () => {
  console.log(`Servidor en ${process.env.APP_URL}:${process.env.PORT}`);
});
