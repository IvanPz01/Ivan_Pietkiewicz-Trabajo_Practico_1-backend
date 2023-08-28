const EventCtrl = {};
const evento = require('../models/user.model')


// Controlador para crear usuario
EventCtrl.crearEvento = async (req, res) => {
    const { nomre_evento, fecha, cantidad_personas } = req.body;
  
    try {
      // Se verifica si el usuario ya existe
      const existeEvento = await evento.findOne({
        where: {
            nomre_evento,
            fecha,
            cantidad_personas,
        },
      });

      if (existeEvento) {
        throw {
          status: 400,
          message: "Ya existe un evento",
        };
      }

      const nuevoEvento = new evento({
        nomre_evento,
        fecha,
        cantidad_personas,
      });

// Se guarda el ususario
const eventoCreado = await nuevoEvento.save();

if (!eventoCreado) {
        throw {
          message: "Error al crear el evento",
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


// Ctrl para obtener datos de un único evento
EventCtrl.obtenerEvento = async (req, res) => {
    const { id } = req.params;
  
    try {
      const evento = await evento.findByPk(id);
  
      if (!evento) {
        throw {
          status: 404,
          message: "No se ha encontrado el usuario",
        };
      }
  
      return res.json(evento);
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        message: error.message,
      });
    }
  };
  

  // Controlador para obtener todos los eventos
EventCtrl.obtenereventos = async (req, res) => {
    try {
      const evento = await evento.findAll({
        where: {
          estado: true,
        },
      });
  
      if (!evento) {
        throw {
          status: 404,
          message: "No se encontraron usuarios",
        };
      }
  
      return res.status(200).json(evento);
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        message: error.message || "Error al obtener los usuarios",
      });
    }
  };


  //Controlador para actualizar evento
EventCtrl.actualizarEvento = async (req, res) => {
    const { id } = req.params;
  
    const { nomre_evento,fecha,cantidad_personas, } = req.body;
  
    try {
      const eventoActualizado = await evento.update(
        {
            nomre_evento,
            fecha,
            cantidad_personas,
        },
        {
          where: {
            id,
          },
        }
      );
  
      if (!eventoActualizado) {
        throw {
          status: 400,
          message: "No se pudo actualizar el usuario",
        };
      }
  
      return res.json({
        message: "Usuario actualizado correctamente",
        eventoActualizado,
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        message:
          error.message || "Error de servidor, contacte al area de sistemas",
      });
    }
  };
  
  // Ctrl para eliminar un evento de forma lógica
  usuarioCtrl.eliminarEvento = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Se cambia el estado del registro a false para indicar que el usuario fue eliminado
      const eventoEliminado = evento.update(
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


  module.export = EventCtrl
