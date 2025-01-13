import { BackgroundedInput } from '../components/atoms/BackgroundedInput';
import {
  Box,
  Stack,
  Typography,
  Divider,
  Radio,
  FormControl,
  TextField,
  FormControlLabel,
} from '@mui/material';
import { CTAButton } from '../components/atoms/CTAButton';
import { theme } from '../styles/theme';
import { LabeledCheckbox } from '../components/atoms/LabeledCheckbox';
import { products } from '../mocks/products';
import visa from '../assets/visa.svg';
import master from '../assets/master.svg';
import maestro from '../assets/maestro.svg';
import paypal from '../assets/paypal.svg';
import { useEffect } from 'react';

export const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const INPUT_OPTIONS = [
    'Nombre completo *',
    'Dirección de facturación *',
    'Apartamento, piso, etc. (opcional)',
    'Ciudad *',
    'Numero telefónico *',
  ];

  const CardTextField = ({ placeholder }) => {
    return (
      <TextField
        label={placeholder}
        variant="outlined"
        slotProps={{
          input: {
            sx: { fontWeight: 400, padding: 0 },
          },
          inputLabel: {
            sx: { fontWeight: 400, fontSize: '15px' },
          },
        }}
      />
    );
  };

  const CouponRow = () => {
    return (
      <Box marginTop="1rem" display="flex" justifyContent="space-between">
        <TextField
          variant="outlined"
          label="Código de cupón"
          slotProps={{
            inputLabel: {
              sx: { fontWeight: 400 },
            },
            input: {
              sx: { fontWeight: 400 },
            },
          }}
        />
        <CTAButton title={'Aplicar cupón'} color={theme.palette.red} />
      </Box>
    );
  };

  const ProductOverview = ({ image_url, title, price }) => {
    return (
      <Stack
        direction="row"
        alignItems="center"
        gap={2}
        justifyContent="space-between"
        sx={{ backgroundColor: 'gray', paddingX: '1rem' }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <img src={image_url} alt={title} width="8%" />
          <Typography fontWeight={400} noWrap fontSize="13px">
            {title}
          </Typography>
        </Box>
        <Typography fontWeight={400} fontSize="13px">
          ${price}
        </Typography>
      </Stack>
    );
  };

  const PriceRow = ({ title, price }) => {
    return (
      <>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          marginTop="2rem"
        >
          <Typography fontWeight={400}>{title}</Typography>
          <Typography fontWeight={400}>${price}</Typography>
        </Box>
        <Divider sx={{ marginY: '0.5rem' }} />
      </>
    );
  };

  const CardForm = () => {
    return (
      <Box marginY="2rem">
        <Stack gap={1} width="50%">
          <CardTextField placeholder={'Numero'} />
          <Box display="flex" gap={2} justifyContent="space-between">
            <CardTextField placeholder={'Vencimiento'} />
            <CardTextField placeholder={'CVV'} />
          </Box>
          <CTAButton
            title={'Pagar'}
            color={theme.palette.red}
            args={{ marginTop: '1rem' }}
          />
        </Stack>
      </Box>
    );
  };

  const CartOverview = () => {
    return (
      <Box>
        <ProductOverview
          image_url={products[0].image}
          title={products[0].title}
          price={products[0].price}
        />
        <PriceRow title={'Subtotal:'} price={products[0].price} />
        <PriceRow title={'Envío:'} price={0} />
        <PriceRow title={'Total:'} price={products[0].price} />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <FormControl sx={{ marginTop: '1rem' }}>
            <FormControlLabel
              control={<Radio defaultChecked />}
              label="Banco"
              slotProps={{
                typography: {
                  fontWeight: 400,
                },
              }}
            />
          </FormControl>
          <Box justifyContent="end" display="flex" gap={1}>
            <img src={visa} width="8%" />
            <img src={master} width="8%" />
            <img src={maestro} width="8%" />
            <img src={paypal} width="8%" />
          </Box>
        </Box>
        <CouponRow />
        <CardForm />
      </Box>
    );
  };
  return (
    <Box sx={{ padding: '3vh 15vw' }}>
      <Typography variant="h1" fontWeight={400}>
        Detalles de pago
      </Typography>
      <Stack direction="row" gap={20}>
        <Box width="40%" marginTop="1rem">
          <Stack gap={1.5}>
            {INPUT_OPTIONS.map((input) => {
              return (
                <BackgroundedInput
                  overText={input}
                  fontSize="15px"
                  height="2.2rem"
                />
              );
            })}
          </Stack>
          <LabeledCheckbox
            text={'Guardar información para futuras compras'}
            margin={'1rem 0'}
          />
        </Box>
        <Box width="50%">
          <CartOverview />
        </Box>
      </Stack>
    </Box>
  );
};
