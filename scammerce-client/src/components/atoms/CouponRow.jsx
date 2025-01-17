import { CTAButton } from './CTAButton';
import { Box, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import { theme } from '../../styles/theme';

export const CouponRow = () => {
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
      <CTAButton
        title={'Aplicar cupón'}
        onClick={() => {
          toast.error('El cupon no es válido');
        }}
        color={theme.palette.red}
      />
    </Box>
  );
};
