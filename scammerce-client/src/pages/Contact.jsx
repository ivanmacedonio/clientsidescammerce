import { Box, Stack, Typography } from '@mui/material';
import { BackgroundedInput } from '../components/atoms/BackgroundedInput';
import { CTAButton } from '../components/atoms/CTAButton';
import { theme } from '../styles/theme';
import { motion } from 'motion/react';
import { smoothTextEnterAnims } from '../utils/defaultAnims';
import { useEffect } from 'react';

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ padding: '8vh 20vw' }}>
      <Typography
        variant="h1"
        fontWeight={400}
        component={motion.h1}
        initial={smoothTextEnterAnims.initial}
        animate={smoothTextEnterAnims.animate}
        transition={smoothTextEnterAnims.transition}
      >
        Ponte en contacto
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
        Nuestros operadores te darán una respuesta en menos de 24 horas
      </Typography>
      <Stack gap={4} marginY="4rem" width="80%">
        <Stack direction="row" gap={3}>
          <BackgroundedInput label={'Tu nombre'} />
          <BackgroundedInput label={'Tu correo'} />
        </Stack>
        <BackgroundedInput label={'Mensaje'} multiline={true} />
        <Box justifyContent="end" display="flex">
          <CTAButton color={theme.palette.red} title={'Enviar'} />
        </Box>
      </Stack>
    </Box>
  );
};
