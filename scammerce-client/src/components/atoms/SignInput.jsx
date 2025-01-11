import { TextField } from '@mui/material';
export const SignInput = ({ label }) => {
  return (
    <TextField
      id="standard-basic"
      sx={{ borderBottom: 'solid 1px #C8C8C8', width: '50%' }}
      variant="standard"
      label={label}
      autoComplete="off"
      slotProps={{
        inputLabel: {
            sx: {fontWeight: 400}
        },
        input: {
            sx: {fontWeight: 400}
        }
      }}
    />
  );
};
