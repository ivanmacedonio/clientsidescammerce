import { Stack, Typography, Box } from '@mui/material';

export const ConditionItem = ({ title, description, icon }) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      width="200px"
      height="auto"
      margin="5rem 0"
      gap={0.5}
    >
      <Box
        sx={{
          backgroundColor: 'black',
          color: 'white',
          padding: '15px',
          borderRadius: '50%',
          marginBottom: '1rem',
          boxShadow: '0px 0px 0px 10px rgba(165, 165, 165, 0.7)',
        }}
      >
        {icon}
      </Box>

      <Typography fontSize="18px" noWrap>
        {title.toUpperCase()}
      </Typography>
      <Typography variant="body2" fontWeight={400} textAlign={'center'}>
        {description}
      </Typography>
    </Stack>
  );
};
