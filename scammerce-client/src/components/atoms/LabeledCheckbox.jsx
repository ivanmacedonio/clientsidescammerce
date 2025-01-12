import { Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { theme } from '../../styles/theme';

export const LabeledCheckbox = ({ text, margin }) => {
  return (
    <>
      <FormGroup> 
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                '&.Mui-checked': {
                  color: theme.palette.red,
                },
              }}
            />
          }
          label={text}
          sx={{
            margin: margin,
          }}
          slotProps={{
            typography: {
              fontWeight: 400,
            },
          }}
        />
      </FormGroup>
    </>
  );
};
