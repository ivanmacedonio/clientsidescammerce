import { Box, Stack, Typography, Divider } from '@mui/material';
import { products } from '../mocks/products';
import { renderStars } from '../utils/renderStars';
import { CTAButton } from '../components/atoms/CTAButton';
import { theme } from '../styles/theme';
import { useNavigate } from 'react-router';
// import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
// import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';

export const Detail = () => {
  const nav = useNavigate();

  const AddProductsButton = () => {
    return <></>
  }

  return (
    <Box display="flex" justifyItems="center" padding="10vh 20vw" gap={15}>
      <Box
        width="40%"
        sx={{
          backgroundColor: 'gray',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img src={products[0].image} alt={products[0].title} />
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
          <Typography fontWeight={400} color="#009933">
            En Stock
          </Typography>
        </Stack>
        <Typography fontWeight={400} fontSize="1.3rem">
          $ {products[0].price}.00
        </Typography>
        <Typography fontWeight={400} marginTop="0.8rem">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
          atque error ipsum officia debitis illo praesentium animi earum dolorem
          quis aliquam esse illum provident voluptatibus reiciendis, ipsa fugit
          nobis blanditiis?
        </Typography>
        <Divider sx={{ marginY: '1.5rem' }} />
        <Stack direction="row" alignItems="center">
          <CTAButton
            title={'Comprar'}
            color={theme.palette.red}
            onClick={() => {
              nav('/checkout');
            }}
          />
        </Stack>
        {/* <Box sx={{ border: 'solid 1px gray', borderRadius: '15px' }}></Box> */}
      </Stack>
    </Box>
  );
};
