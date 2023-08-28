const asistCtrl = {};
const asistencia = require('../models/user.model')


// Controlador para crear usuario
asistCtrl.confirmarAisit = async (req, res) => {
    const { nombre_usuario, presencia } = req.body;
  
    try {
      // Se verifica si el usuario ya existe
      const AsisConfimation = await asistencia.findOne({
        where: {
            nombre_usuario,
            presencia
        },
      });

      if (AsisConfimation) {
        throw {
          status: 400,
          message: "Ya esta presente",
        };
      }

      const nuevaAsist = new asistencia({
        nombre_usuario,
        presencia
      });

// Se guarda el ususario
const usuarioCreado = await asistencia.save();

if (!usuarioCreado) {
        throw {
          message: "Error al crear el usuario",
        };
      }
}
    catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
          message: error.message || "Error al crear el usuario",
        });
      }
    };


module.export = asistCtrl