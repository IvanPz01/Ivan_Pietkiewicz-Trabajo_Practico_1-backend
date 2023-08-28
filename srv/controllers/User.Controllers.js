const usuarioCtrl = {};
const usuario = require('../models/user.model')


// Controlador para crear usuario
usuarioCtrl.crearUsuario = async (req, res) => {
  const { nombre_usuario, email, password } = req.body;

  try {
    // Se verifica si el usuario ya existe
    const existeUsuario = await usuario.findOne({
      where: {
        nombre_usuario,
        email,
        password,
      },
    });

    if (existeUsuario) {
      throw {
        status: 400,
        message: "El usuario ya existe",
      };
    }

    const nuevoUsuario = new usuario({
      nombre_usuario,
      email,
      password,
    });

    // Se guarda el ususario
    const usuarioCreado = await nuevoUsuario.save();

    if (!usuarioCreado) {
      throw {
        message: "Error al crear el usuario",
      };
    }
    return res.json(usuarioCreado);
  }
  catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      message: error.message || "Error al crear el usuario",
    });
  }
};

// Ctrl para eliminar un usuario de forma lógica
usuarioCtrl.eliminarUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuarioEliminado = usuario.update(
      {
        estado: false,
      },
      {
        where: {
          id,
          estado: true,
        },
      }
    );

    // Si la BD devuelve false, significa que no eliminó
    if (!usuarioEliminado) {
      throw {
        status: 400,
        message: "Error al eliminar usuario",
      };
    }

    // Si pasa la validación
    return res.json({
      message: "Usuario eliminado con éxito",
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 5000).json({
      message:
        error.message || "Error de servidor, contacte al área de sistemas",
    });
  }
};

module.exports = usuarioCtrl