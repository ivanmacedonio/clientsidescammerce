import { LoginForm } from '../components/molecules/LoginForm';
import { Box } from '@mui/material';
import image from '../assets/mockup.png';

export const Login = () => {
  return (
    <>
      <Box margin="2rem 0" display="flex" gap={'5%'}>
        <Box width="40%" height="60vh" sx={{ backgroundColor: '#CBE4E9' }}>
          <img src={image} alt="" width="90%" height="auto" />
        </Box>
        <LoginForm />
      </Box>
    </>
  );
};
