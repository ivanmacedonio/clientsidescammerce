import { Box, Stack, Typography } from '@mui/material';
import { theme } from '../../styles/theme';
import { motion } from "motion/react"
import {onEnterAnims} from '../../utils/defaultAnims';

export const SectionChip = ({ title }) => {
  const color = theme.palette.red;
  const square = (
    <Box
      width="13px"
      height="30px"
      sx={{ backgroundColor: color, borderRadius: '0.2rem' }}
    />
  );
  return (
    <Stack direction="row" alignItems="center" gap={2}>
      {square}
      <Typography variant='body1' component={motion.p}  sx={{ color: color }}>{title}</Typography>
    </Stack>
  );
};
