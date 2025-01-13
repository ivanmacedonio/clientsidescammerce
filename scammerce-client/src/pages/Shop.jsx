import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { smoothTextEnterAnims } from '../utils/defaultAnims';
import { motion } from 'motion/react';
import { ProductList } from '../components/molecules/ProductList';
import { useState, useEffect } from 'react';

export const Shop = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  const [selectedCategory, setSelectedCategory] = useState();
  const CategorySelector = () => {
    return (
      <FormControl sx={{marginTop: "2rem", width: "20%"}}>
        <InputLabel>Categoría</InputLabel>
        <Select
          label="Categoría"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
          }}
          slotProps={{
            input: {
                sx: {}
            }
          }}
        >
          <MenuItem value="Celulares">Celulares</MenuItem>
          <MenuItem value="Monitores">Monitores</MenuItem>
          <MenuItem value="Perifericos">Perifericos</MenuItem>
        </Select>
      </FormControl>
    );
  };

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
        Descubre Nuestros Productos
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
        Explora una selección única en nuestra tienda.
      </Typography>
      <CategorySelector />
      <ProductList />
    </Box>
  );
};
