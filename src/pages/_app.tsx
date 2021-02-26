import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import GlobalStyles from '../styles/GlobalStyles';
import ThemeProvider from '../contexts/ThemeContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? 'with' : 'without'
        } shallow routing`
      );
    };

    router.events.on('routeChangeStart', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider>
        <GlobalStyles />
        <ToastContainer />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
