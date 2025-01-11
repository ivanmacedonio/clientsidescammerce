import { Box, Stack, Typography, Divider } from '@mui/material';
import { Banner } from './Banner';
import { motion } from 'motion/react';

export const CategorySection = () => {
  const CATEGORY_OPTIONS = [
    'Celulares',
    'Electrodomésticos',
    'Monitores',
    'Audio',
    'Teclados',
    'Mouse',
  ];
  return (
    <Box display="flex">
      <Stack gap={2} width="12vw" padding="3rem 0">
        {CATEGORY_OPTIONS.map((option) => {
          return (
            <Typography variant="body2" sx={{ fontWeight: 400 }} component={motion.body}>
              {option}
            </Typography>
          );
        })}
      </Stack>
      <Divider orientation="vertical" flexItem />
      <Banner />
    </Box>
  );
};
