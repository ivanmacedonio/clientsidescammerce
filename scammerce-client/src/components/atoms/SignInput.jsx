import { TextField, InputAdornment } from '@mui/material';
export const SignInput = ({
  label,
  onChange,
  value,
  type,
  name,
  error,
  touched,
  icon,
  onClickAdornment,
}) => {
  return (
    <TextField
      helperText={!!touched && error}
      error={touched && !!error}
      sx={{
        borderBottom: !!error ? 'none' : 'solid 1px #C8C8C8',
        width: '50%',
      }}
      onChange={onChange}
      value={value}
      variant="standard"
      label={label}
      autoComplete="off"
      type={type}
      name={name}
      slotProps={{
        inputLabel: {
          sx: { fontWeight: 400 },
        },
        input: {
          sx: { fontWeight: 400 },
          endAdornment: (
            <InputAdornment position='end' sx={{ cursor: 'pointer' }}>
              <span onClick={onClickAdornment}>{icon}</span>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};
