import { Box, Stack, Typography, Divider, Button } from '@mui/material';
import { products } from '../mocks/products';
import { renderStars } from '../utils/renderStars';
import { CTAButton } from '../components/atoms/CTAButton';
import { theme } from '../styles/theme';
import { useNavigate } from 'react-router';
import { ProductList } from '../components/molecules/ProductList';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { onEnterAnims } from '../utils/defaultAnims';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';

export const Detail = () => {
  const nav = useNavigate();
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

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
            src={products[0].image}
            alt={products[0].title}
            initial={onEnterAnims.initial}
            animate={onEnterAnims.animate}
            transition={onEnterAnims.transition}
          />
        </Box>
        <Stack width="50%" gap={1}>
          <Typography fontWeight={500} fontSize="1.2rem">
            {products[0].title}
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
            $ {products[0].price}.00
          </Typography>
          <Typography fontWeight={400} fontSize="14px" marginTop="0.8rem">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            atque error ipsum officia debitis illo praesentium animi earum
            dolorem quis aliquam esse illum provident voluptatibus reiciendis,
            ipsa fugit nobis blanditiis?
          </Typography>
          <Divider sx={{ marginY: '1.5rem' }} />
          <Box alignItems="center">
            <CTAButton
              title={'Comprar'}
              color={theme.palette.red}
              onClick={() => {
                nav('/checkout');
              }}
            />
            <GeneralInfoBox />
          </Box>
        </Stack>
      </Box>

      <ProductList slice_in={4} chip_title={'Podría interesarte'} />
    </Box>
  );
};
