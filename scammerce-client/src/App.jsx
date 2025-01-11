import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { Home } from './pages/Home';
import './styles/app.css';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
