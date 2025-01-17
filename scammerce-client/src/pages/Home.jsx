import { Box, Divider } from '@mui/material';
import { CategorySection } from '../components/molecules/CategorySection';
import { ProductList } from '../components/molecules/ProductList';
import { Conditions } from '../components/molecules/Conditions';
import { useEffect, useState } from 'react';
import { useProductStore } from '../store/useProductStore';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box sx={{ padding: '0 15rem', justifyContent: 'center' }}>
        <CategorySection />
        <ProductList
          hasCountdown={true}
          chip_title={'Hot Sales!'}
          category_title={'Ventas Flash'}
          cta_text={'Explorar todas las ofertas'}
          from={0}
          to={10}
        />
        <Divider />
        <ProductList
          hasCountdown={false}
          chip_title={'Más Productos!'}
          category_title={'Explorar la tienda'}
          cta_text={'Ver todos los productos'}
          from={10}
          to={25}
        />
        <Divider />
        <Conditions />
      </Box>
    </>
  );
};
