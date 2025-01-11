import { Header } from '../components/molecules/Header';
import { Footer } from '../components/molecules/Footer';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../styles/theme';
export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};
