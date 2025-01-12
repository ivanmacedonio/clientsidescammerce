import { Box, Button } from '@mui/material';

export const CTAButton = ({ title, color, args, onClick }) => {
    return (
    <Box>
      <Button
        sx={{
          backgroundColor: color,
          color: "white",
          padding: "12px 40px",
          ...args
        }}
        onClick={onClick}
      >
        {title}
      </Button>
    </Box>
  );
};
