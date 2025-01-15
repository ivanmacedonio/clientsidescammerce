import { object, string } from 'yup';
export const loginSchema = () => {
  return object({
    email: string().email("El campo debe tener el formato de un correo electronico").required("El campo es obligatorio"),
    password: string().required("El campo es obligatorio")
  })
};
