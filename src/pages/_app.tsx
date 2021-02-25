import GlobalStyles from '../styles/GlobalStyles';
import { dark, light } from '../styles/theme';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThemeProvider from '../contexts/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <ThemeProvider>
        <GlobalStyles />
        <ToastContainer />
        <Component {...pageProps} />
      </ThemeProvider>
    </ChallengesProvider>
  );
}

export default MyApp;
