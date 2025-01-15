import { Box, Stack, Typography } from '@mui/material';
import { CTAButton } from '../atoms/CTAButton';
import { SignInput } from '../atoms/SignInput';
import { theme } from '../../styles/theme';
import { NavLink } from 'react-router';
import { smoothTextEnterAnims } from '../../utils/defaultAnims';
import { motion } from 'motion/react';
import { useParams, useNavigate } from 'react-router';
import { useFormik } from 'formik';
import { loginSchema } from '../../schemas/login';
import { useAuthStore } from '../../store/useAuthStore';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const LoginForm = () => {
  const { shop_id } = useParams();
  const { login, isLoading } = useAuthStore();
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const { status } = await login(values, shop_id);
      if (status < 399) {
        setTimeout(() => {
          nav(`/${shop_id}/`);
        }, 2000);
      }
    },
  });

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
        Ingresar en una cuenta
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
        component={'form'}
        onSubmit={formik.handleSubmit}
        marginTop="3rem"
        gap={2}
      >
        <SignInput
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
          touched={formik.touched.email}
          label={'Email'}
          type={'text'}
          name={'email'}
        />
        <SignInput
          label={'Contraseña'}
          error={formik.errors.password}
          touched={formik.touched.password}
          onChange={formik.handleChange}
          value={formik.values.password}
          onClickAdornment={() => {
            setShowPassword(!showPassword);
          }}
          type={showPassword ? 'text' : 'password'}
          name={'password'}
          icon={<VisibilityIcon />}
        />
        <CTAButton
          type={'submit'}
          title={'Ingresar'}
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
        <Typography variant="body2">¿No tienes una cuenta?</Typography>
        <Typography
          variant="body2"
          fontWeight={500}
          sx={{ textDecoration: 'underline' }}
          component={NavLink}
          to={`/${shop_id}/register`}
        >
          Crear una cuenta
        </Typography>
      </Stack>
    </Box>
  );
};
