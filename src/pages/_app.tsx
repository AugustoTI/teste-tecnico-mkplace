import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Container } from '../components/Container';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Component {...pageProps} />
      </Container>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
