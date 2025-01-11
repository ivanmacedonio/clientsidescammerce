import { Box, Stack, Typography } from '@mui/material';
import { CTAButton } from '../atoms/CTAButton';
import { SignInput } from '../atoms/SignInput';
import { theme } from '../../styles/theme';
import { NavLink } from 'react-router';

export const RegisterForm = () => {
  return (
    <Box width="50%">
      <Typography variant="h1" fontWeight={400}>
        Crear una cuenta
      </Typography>
      <Typography variant="h2" color="#C9C9C9" fontWeight={400}>
        Completa los campos y accede a las mejores ofertas
      </Typography>
      <Stack marginTop="3rem" gap={2}>
        <SignInput label={'Email'} />
        <SignInput label={'Contraseña'} />
        <SignInput label={'Repetir contraseña'} />
        <CTAButton
          title={'Crear'}
          color={theme.palette.red}
          args={{ marginTop: '2rem', width: '30%' }}
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
          to={'/login'}
        >
          Ingresar
        </Typography>
      </Stack>
    </Box>
  );
};
