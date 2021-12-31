import { ThemeProvider } from 'styled-components';

import { AuthProvider } from '@contexts/AuthContext';
import { Router } from '@routes';

import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
}
