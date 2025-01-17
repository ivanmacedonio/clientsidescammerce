import { object, string } from 'yup';
export const checkoutSchema = () => {
  return object({
    fullName: string().required('Este campo es obligatorio'),
    address: string().required('Este campo es obligatorio'),
    DNI: string()
      .required('Este campo es obligatorio')
      .min(5, 'Este campo debe superar los 9 caracteres')
      .max(15, 'Este campo no debe superar los 15 caracteres'),
    city: string().required('Este campo es obligatorio'),
    phone: string()
      .required('Este campo es obligatorio')
      .max(14, 'Este campo no debe superar los 14 caracteres')
      .min(9, 'Este campo debe superar los 9 caracteres')
      .matches(/^[0-9]+$/, 'El teléfono solo debe contener números'),
    Nro: string()
      .required('Este campo es requerido')
      .min(13, 'Este campo debe superar los 13 caracteres')
      .max(20, 'Este campo no debe superar los 20 caracteres'),
    Vto: string().required('Este campo es requerido'),
    CVV: string()
      .required('Este campo es requerido')
      .min(3, 'Este campo debe tener 3 caracteres')
      .max(3, 'Este campo debe tener 3 caracteres'),
  });
};
