import { Header } from '../components/molecules/Header';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../styles/theme';
import { ToastContainer } from 'react-toastify';
export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
      <ToastContainer position="bottom-center" closeOnClick pauseOnHover />
    </ThemeProvider>
  );
};
