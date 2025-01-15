import { Box, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export const CTAButton = ({ title, color, args, onClick, type, loading }) => {
  return (
    <Box>
      <Button
        type={type}
        sx={{
          backgroundColor: color,
          color: 'white',
          padding: '12px 40px',
          ...args,
        }}
        onClick={onClick}
      >
        {loading ? <CircularProgress sx={{color: "white"}} size={"30px"} /> : title}
      </Button>
    </Box>
  );
};
