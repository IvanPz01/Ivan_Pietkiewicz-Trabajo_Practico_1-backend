const { Sequelize, Model, DataTypes } = require('sequelize');

// conexion con la base de datos  
sequelize.authenticate()
  .then(() => { 
    console.log('Conexión a base de datos exitosa');
 })
  .catch((error) => console.log('Error al conectar a base de datos', error));

app.use("/", require("./routes/galleries.routes"));

app.listen(process.env.PORT, () => {
  console.log(`Servidor en ${process.env.APP_URL}:${process.env.PORT}`);
});
