import { object, string } from 'yup';
export const registerSchema = () => {
  return object({
    name: string().required('El campo es obligatorio'),
    last_name: string().required('El campo es obligatorio'),
    phone: string()
      .required('El campo es obligatorio')
      .matches(/^[0-9]+$/, 'El teléfono solo debe contener números'),
    email: string()
      .email('El campo debe tener el formato de un correo electronico')
      .required('El campo es obligatorio'),
    password: string().required('El campo es obligatorio'),
    password_2: string().required('El campo es obligatorio'),
    role: string().required()
  });
};
