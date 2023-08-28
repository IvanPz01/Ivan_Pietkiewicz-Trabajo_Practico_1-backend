import { checkSchema
 } from 'express-validator';

export const createUserSchema = checkSchema({
    nombre_usuario: {
        
    },
    email: {
    errorMessage: 'Invalid email',
    isEmail: true
  },
  contraseña: {
    isLength: {
      options: { min: 8 },
      errorMessage: 'Password should be at least 8 chars'
    }
  },
});