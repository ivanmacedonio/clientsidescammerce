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
import visa from '../assets/visa.svg';
import master from '../assets/master.svg';
import maestro from '../assets/maestro.svg';
import paypal from '../assets/paypal.svg';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { checkoutSchema } from '../schemas/checkout';
import { useProductStore } from '../store/useProductStore';
import { useAuthStore } from '../store/useAuthStore';
import { CouponRow } from '../components/atoms/CouponRow';
import { CheckoutDTO } from '../utils/dtos';

export const Checkout = () => {
  const { storagedProduct, executePayment, isLoading } = useProductStore();
  const { email } = useAuthStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      DNI: '',
      city: '',
      phone: '',
      Nro: '',
      Vto: '',
      CVV: '',
    },
    validationSchema: checkoutSchema,
    onSubmit: (values) => {
      const checkoutDTO = new CheckoutDTO(
        values.DNI,
        values.fullName,
        values.phone,
        email,
        values.Nro,
        values.CVV.toString(),
        values.Vto,
      );
      executePayment(checkoutDTO);
    },
  });

  const INPUT_OPTIONS = [
    {
      title: 'Nombre completo *',
      value: formik.values.fullName,
      error: formik.errors.fullName,
      touched: formik.touched.fullName,
      name: 'fullName',
      type: 'text',
    },
    {
      title: 'Dirección de facturación *',
      value: formik.values.address,
      error: formik.errors.address,
      touched: formik.touched.address,
      name: 'address',
      type: 'text',
    },
    {
      title: 'DNI',
      value: formik.values.DNI,
      error: formik.errors.DNI,
      touched: formik.touched.DNI,
      name: 'DNI',
      type: 'text',
    },
    {
      title: 'Ciudad *',
      value: formik.values.city,
      error: formik.errors.city,
      touched: formik.touched.city,
      name: 'city',
      type: 'text',
    },
    {
      title: 'Numero telefónico *',
      value: formik.values.phone,
      error: formik.errors.phone,
      touched: formik.touched.phone,
      name: 'phone',
      type: 'text',
    },
  ];

  const ProductOverview = ({ image_url, title, price }) => {
    return (
      <Stack
        direction="row"
        alignItems="center"
        gap={2}
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" gap={1}>
          <img src={image_url} alt={title} width="8%" />
          <Typography fontWeight={400} noWrap fontSize="13px">
            {title}
          </Typography>
        </Box>
        <Typography fontWeight={400}>${price}</Typography>
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

  return (
    <Box
      sx={{ padding: '3vh 15vw' }}
      component={'form'}
      onSubmit={formik.handleSubmit}
    >
      <Typography variant="h1" fontWeight={400}>
        Detalles de pago
      </Typography>
      <Stack direction="row" gap={20}>
        <Box width="40%" marginTop="1rem">
          <Stack gap={1.5}>
            {INPUT_OPTIONS.map((input, index) => {
              return (
                <BackgroundedInput
                  onChange={formik.handleChange}
                  key={index}
                  overText={input.title}
                  error={!!input.touched && !!input.error}
                  helperText={!!input.error && input.error}
                  name={input.name}
                  type={input.type}
                  value={input.value}
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
          <Box>
            <ProductOverview
              image_url={storagedProduct.image_url}
              title={storagedProduct.name}
              price={storagedProduct.price}
            />
            <PriceRow
              title={'Subtotal:'}
              price={
                storagedProduct.price -
                (storagedProduct.price * storagedProduct.discount) / 100
              }
            />
            <PriceRow title={'Envío:'} price={0} />
            <PriceRow title={'Total:'} price={storagedProduct.price} />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
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
            <Box marginY="2rem">
              <Stack gap={1} width="60%">
                <TextField
                  onChange={formik.handleChange}
                  label={'Número'}
                  value={formik.values.Nro}
                  error={!!formik.touched.Nro && !!formik.errors.Nro}
                  helperText={!!formik.errors.Nro && formik.errors.Nro}
                  name="Nro"
                  type="text"
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
                <Box display="flex" gap={2} justifyContent="space-between">
                  <TextField
                    onChange={formik.handleChange}
                    label={'Vencimiento'}
                    value={formik.values.Vto}
                    error={!!formik.touched.Vto && !!formik.errors.Vto}
                    helperText={!!formik.errors.Vto && formik.errors.Vto}
                    name="Vto"
                    type="date"
                    variant="outlined"
                    slotProps={{
                      input: {
                        sx: { fontWeight: 400, padding: 0 },
                      },
                      inputLabel: {
                        sx: { fontWeight: 400, fontSize: '15px' },
                        shrink: true
                      },
                    }}
                  />
                  <TextField
                    onChange={formik.handleChange}
                    label={'CVV'}
                    value={formik.values.CVV}
                    error={!!formik.touched.CVV && !!formik.errors.CVV}
                    helperText={!!formik.errors.CVV && formik.errors.CVV}
                    name="CVV"
                    type="number"
                    variant="outlined"
                    slotProps={{
                      input: {
                        sx: { fontWeight: 400, padding: 0, width: "50%" },
                      },
                      inputLabel: {
                        sx: { fontWeight: 400, fontSize: '15px' },
                      },
                    }}
                  />
                </Box>
                <CTAButton
                  title={'Pagar'}
                  color={theme.palette.red}
                  args={{ marginTop: '1rem' }}
                  type={'submit'}
                />
              </Stack>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
