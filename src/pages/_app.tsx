import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import { theme } from '../styles/theme';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ToastContainer />
        <Component {...pageProps} />
      </ThemeProvider>
    </ChallengesProvider>
  );
}

export default MyApp;
