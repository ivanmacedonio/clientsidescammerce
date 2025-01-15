import { Box, Stack, Typography } from '@mui/material';
import { CTAButton } from '../atoms/CTAButton';
import { SignInput } from '../atoms/SignInput';
import { theme } from '../../styles/theme';
import { NavLink } from 'react-router';
import { smoothTextEnterAnims } from '../../utils/defaultAnims';
import { motion } from 'motion/react';
import { useParams, useNavigate } from 'react-router';
import { useFormik } from 'formik';
import { registerSchema } from '../../schemas/register';
import { useAuthStore } from '../../store/useAuthStore';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';

export const RegisterForm = () => {
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState({
    first: true,
    second: true,
  });
  const { shop_id } = useParams();
  const { register, isLoading } = useAuthStore();
  const formik = useFormik({
    initialValues: {
      name: '',
      last_name: '',
      phone: '',
      email: '',
      password: '',
      password_2: '',
      role: 'user',
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      if (values.password !== values.password_2) {
        formik.setFieldError('password_2', 'Las Contraseñas deben ser iguales');
        return;
      }
      console.log(values)
      const { status } = await register(values, shop_id);
      if (status < 299) {
        setTimeout(() => {
          nav(`/${shop_id}/login`);
        }, 2000);
      }
    },
  });

  const INPUTS = [
    {
      label: 'Nombre',
      name: 'name',
      type: 'text',
      onChange: formik.handleChange,
      value: formik.values.name,
      error: formik.errors.name,
      touched: formik.touched.name,
      icon: null,
      onClickAdornment: null,
    },
    {
      label: 'Apellido',
      name: 'last_name',
      type: 'text',
      onChange: formik.handleChange,
      value: formik.values.last_name,
      error: formik.errors.last_name,
      touched: formik.touched.last_name,
      icon: null,
      onClickAdornment: null,
    },
    {
      label: 'Celular',
      name: 'phone',
      type: 'text',
      onChange: formik.handleChange,
      value: formik.values.phone,
      error: formik.errors.phone,
      touched: formik.touched.phone,
      icon: null,
      onClickAdornment: null,
    },
    {
      label: 'Email',
      name: 'email',
      type: 'text',
      onChange: formik.handleChange,
      value: formik.values.email,
      error: formik.errors.email,
      touched: formik.touched.email,
      icon: null,
      onClickAdornment: null,
    },
    {
      label: 'Contraseña ',
      name: 'password',
      type: showPassword.first ? 'text' : 'password',
      onChange: formik.handleChange,
      value: formik.values.password,
      error: formik.errors.password,
      touched: formik.touched.password,
      icon: <VisibilityIcon />,
      onClickAdornment: () => {
        setShowPassword((prev) => ({
          ...prev,
          ['first']: !showPassword.first,
        }));
      },
    },
    {
      label: 'Repite tu contraseña',
      name: 'password_2',
      type: showPassword.second ? 'text' : 'password',
      onChange: formik.handleChange,
      value: formik.values.password_2,
      error: formik.errors.password_2,
      touched: formik.touched.password_2,
      icon: <VisibilityIcon />,
      onClickAdornment: () => {
        setShowPassword((prev) => ({
          ...prev,
          ['second']: !showPassword.second,
        }));
      },
    },
  ];
  return (
    <Box width="50%">
      <Typography
        variant="h1"
        fontWeight={400}
        component={motion.h1}
        initial={smoothTextEnterAnims.initial}
        animate={smoothTextEnterAnims.animate}
        transition={smoothTextEnterAnims.transition}
      >
        Crear una cuenta
      </Typography>
      <Typography
        variant="h2"
        color="#C9C9C9"
        fontWeight={400}
        component={motion.h2}
        initial={smoothTextEnterAnims.initial}
        animate={smoothTextEnterAnims.animate}
        transition={smoothTextEnterAnims.transition}
      >
        Completa los campos y accede a las mejores ofertas
      </Typography>
      <Stack
        marginTop="1.5rem"
        gap={1}
        component={'form'}
        onSubmit={formik.handleSubmit}
      >
        {INPUTS.map((input, index) => {
          return (
            <SignInput
              key={index}
              label={input.label}
              type={input.type}
              name={input.name}
              value={input.value}
              onChange={input.onChange}
              error={input.error}
              touched={input.touched}
              icon={input.icon}
              onClickAdornment={input.onClickAdornment}
            />
          );
        })}
        <CTAButton
          title={'Crear'}
          type={'submit'}
          color={theme.palette.red}
          args={{ marginTop: '2rem', width: '30%' }}
          loading={isLoading}
        />
      </Stack>
      <Stack
        direction="row"
        gap={1}
        marginTop="1rem"
        color="rgb(122, 122, 122)"
      >
        <Typography variant="body2">Ya tienes una cuenta?</Typography>
        <Typography
          variant="body2"
          fontWeight={500}
          sx={{ textDecoration: 'underline' }}
          component={NavLink}
          to={`/${shop_id}/login`}
        >
          Ingresar
        </Typography>
      </Stack>
    </Box>
  );
};
