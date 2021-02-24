import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import { theme } from '../styles/theme';

import { ChallengesProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ChallengesProvider>
  );
}

export default MyApp;
