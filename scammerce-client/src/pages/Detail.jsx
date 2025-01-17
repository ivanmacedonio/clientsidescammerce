import { Box, Stack, Typography, Divider, Button } from '@mui/material';
import { products } from '../mocks/products';
import { renderStars } from '../utils/renderStars';
import { CTAButton } from '../components/atoms/CTAButton';
import { theme } from '../styles/theme';
import { useNavigate } from 'react-router';
import { ProductList } from '../components/molecules/ProductList';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { onEnterAnims } from '../utils/defaultAnims';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import { useParams } from 'react-router';
import { useProductStore } from '../store/useProductStore';
import { useAuthStore } from '../store/useAuthStore';

export const Detail = () => {
  const [product, setProduct] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { token } = useAuthStore();
  const { product_id } = useParams();
  const { getProductById, isLoading } = useProductStore();
  const { shop_id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setIsAuthenticated(Boolean(token));
  }, [isAuthenticated]);

  useEffect(() => {
    const fetchProduct = async () => {
      const productResponse = await getProductById(product_id);
      if (productResponse?.status > 300) {
        nav('/not-found');
        return;
      }
      setProduct(productResponse);
    };
    fetchProduct();
  }, [products]);

  const GeneralInfoBox = () => {
    return (
      <>
        <Stack
          direction="row"
          sx={{
            border: 'solid 1px gray',
            borderTopRightRadius: '5px',
            borderTopLeftRadius: '5px',
          }}
          gap={2}
          padding="2vh 1vw"
          marginTop="2rem"
          width="80%"
        >
          <LocalShippingOutlinedIcon />
          <Typography fontWeight={400}>
            Envío sin cargo en tu primer compra
          </Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            border: 'solid 1px gray',
            borderBottomRightRadius: '5px',
            borderBottomLeftRadius: '5px',
            borderTop: 'none',
          }}
          gap={2}
          width="80%"
          padding="2vh 1vw"
        >
          <KeyboardReturnOutlinedIcon />
          <Typography fontWeight={400}>Reembolso sin cargo</Typography>
        </Stack>
      </>
    );
  };

  return (
    <Box padding="10vh 20vw">
      <Box display="flex" justifyItems="center" gap={15}>
        <Box
          height="10%"
          width="auto"
          sx={{
            backgroundColor: 'gray',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <motion.img
            src={product?.image_url}
            alt={product?.name}
            initial={onEnterAnims.initial}
            animate={onEnterAnims.animate}
            transition={onEnterAnims.transition}
          />
        </Box>
        <Stack width="50%" gap={1}>
          <Typography fontWeight={500} fontSize="1.2rem">
            {product?.name}
          </Typography>
          <Stack direction="row" gap={1} alignItems="center">
            <Stack direction="row" gap={0}>
              {renderStars()}
            </Stack>
            <Divider orientation="vertical" sx={{ borderColor: '#8f8f8f' }} />
            <Typography fontWeight={500} fontSize="13px" color="#009933">
              En Stock
            </Typography>
          </Stack>
          <Typography fontWeight={400} fontSize="1.3rem">
            $ {product?.price}.00
          </Typography>
          <Typography fontWeight={400} fontSize="14px" marginTop="0.8rem">
            {product?.description}
          </Typography>
          <Divider sx={{ marginY: '1.5rem' }} />
          <Box alignItems="center">
            <CTAButton
              disabled={!isAuthenticated}
              title={isAuthenticated ? 'Comprar' : 'Debes iniciar sesión'}
              color={theme.palette.red}
              onClick={() => {
                nav(`/${shop_id}/checkout/${product_id}`);
              }}
            />
            <GeneralInfoBox />
          </Box>
        </Stack>
      </Box>

      <ProductList from={0} to={10} chip_title={'Podría interesarte'} />
    </Box>
  );
};
