import { object, string } from 'yup';
export const registerSchema = () => {
  return object({
    name: string()
      .required('El campo es obligatorio')
      .max(25, 'El campo no debe tener más de 25 dígitos'),
    last_name: string()
      .required('El campo es obligatorio')
      .max(25, 'El campo no debe tener más de 25 dígitos '),
    phone: string()
      .required('El campo es obligatorio')
      .matches(/^[0-9]+$/, 'El teléfono solo debe contener números')
      .max(12, 'El campo no debe tener más de 12 dígitos')
      .min(9, 'El campo no debe tener menos de 9 dígitos'),
    email: string()
      .email('El campo debe tener el formato de un correo electronico')
      .required('El campo es obligatorio'),
    password: string()
      .required('El campo es obligatorio')
      .max(25, 'El campo no debe tener más de 25 dígitos ')
      .min(5, 'El campo no debe tener menos de 5 dígitos'),
    password_2: string()
      .required('El campo es obligatorio')
      .max(25, 'El campo no debe tener más de 25 dígitos ')
      .min(5, 'El campo no debe tener menos de 5 dígitos'),
    role: string().required(),
  });
};
