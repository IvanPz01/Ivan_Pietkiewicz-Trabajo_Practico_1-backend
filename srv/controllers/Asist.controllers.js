const asistCtrl = {};
const asistencia = require('../models/assist.model')


// Controlador para crear usuario
asistCtrl.confirmarAisit = async (req, res) => {
  const { nombre_persona, presencia } = req.body;

  try {
    // Se verifica si el usuario ya existe
    const AsisConfimation = await asistencia.findOne({
      where: {
        nombre_persona,
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
      nombre_persona,
      presencia
    });

    // Se registra la asistencia
    const asistenciaConfirmada = await nuevaAsist.save();

    if (!asistenciaConfirmada) {
      throw {
        message: "Error al confirmar la asistencia",
      };
    }
    return res.json(asistenciaConfirmada);
  }
  catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      message: error.message || "Error al crear el usuario",
    });
  }
};


module.exports = asistCtrl