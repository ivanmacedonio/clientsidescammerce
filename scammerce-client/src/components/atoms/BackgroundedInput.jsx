import { TextField, Typography, Box } from '@mui/material';

export const BackgroundedInput = ({
  label,
  multiline,
  overText,
  fontSize,
  height,
}) => {
  const TEXTFIELD_STYLE = {
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        border: '#F5F5F5',
      },
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
    },
    backgroundColor: 'gray',
    paddingBottom: multiline ? '5rem' : 0,
  };
  return (
    <>
      {overText && (
        <Typography fontWeight={400} fontSize="15px" sx={{ color: '#838383' }}>
          {overText}
        </Typography>
      )}
      <TextField
        focused={false}
        label={overText ? '' : label}
        variant="outlined"
        multiline={multiline}
        autoComplete="off"
        sx={TEXTFIELD_STYLE}
        fullWidth
        slotProps={{
          input: {
            sx: { fontWeight: 400, fontSize: fontSize, height: height },
          },
          inputLabel: {
            sx: { fontWeight: 400 },
          },
        }}
      />
    </>
  );
};
