import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

import { Router } from './routes';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}
