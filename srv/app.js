const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
require('dotenv').config();


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(require('./router/ruoter.User'))


const { sequelize } = require('./dataBase/db');
const { appendFile } = require('fs/promises');

// conexion con la base de datos  
sequelize.authenticate()
  .then(() => { 
    console.log('Conexión a base de datos exitosa');
 })
  .catch((error) => console.log('Error al conectar a base de datos', error));

app.listen(process.env.PORT, () => {
  console.log(`Servidor en ${process.env.APP_URL}:${process.env.PORT}`);
});
