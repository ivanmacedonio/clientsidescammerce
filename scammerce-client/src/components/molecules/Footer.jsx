import { Box, Stack, Typography } from '@mui/material';

export const Footer = () => {
  const TITLE = "MYMERCHANT"
  return (
    <Box position="fixed" bottom={0} width="100vw">
      <Box
        sx={{
          backgroundColor: 'black',
          padding: '10px',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" color="white">Copyright {TITLE} 2025. All right reserved</Typography>
      </Box>
    </Box>
  );
};
