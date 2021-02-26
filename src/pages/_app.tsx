import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import GlobalStyles from '../styles/GlobalStyles';
import ThemeProvider from '../contexts/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <ToastContainer />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
