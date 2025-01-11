import { Box, Typography, Stack } from '@mui/material';
import { CTAButton } from '../atoms/CTAButton';
import { motion } from 'motion/react';
import {onEnterAnims} from '../../utils/defaultAnims';

export const Banner = () => {
  const BANNER_TITLE = 'ENHACE YOUR JBL EXPERIENCE';
  const BANNER_IMAGE_URL =
    'https://www.jbl.com.ar/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw147da48a/JBL_Quantum%20800_Product%20Image_ANGLE_White.png?sw=537&sfrm=png';
  return (
    <Box
      component={motion.div}
      initial={onEnterAnims.initial}
      animate={onEnterAnims.animate}
      transition={onEnterAnims.transition}
      width="990px"
      height="400px"
      sx={{ backgroundColor: 'black', margin: '3rem' }}
      display="flex"
      justifyContent="space-between"
    >
      <Stack padding="5rem" gap={3}>
        <Typography variant="body1" color="#2E8450">
          Exclusivos
        </Typography>
        <Typography variant="h1" color="white" width="80%" lineHeight="3rem">
          {BANNER_TITLE}
        </Typography>
        <CTAButton title={'Adquirir ahora'} color={'#2E8450'} />
      </Stack>
      <Box component="img" src={BANNER_IMAGE_URL} width="auto" height="auto" />
    </Box>
  );
};
