import React, { useEffect, useState } from 'react';
//import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@material-ui/core';
import createCache from '@emotion/cache';
//import { useStore } from '@/redux/store/store';
import theme from '@/src/theme';
import '@/styles/main.scss';



export const cache = createCache({ key: 'css', prepend: true });

export default function MyApp({ Component, pageProps }) {
  //const store = useStore(pageProps.initialReduxState);
  
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  

  return (
    <CacheProvider value={cache}>
      {/* <Provider store={store}> */}
      
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      
      {/* </Provider> */}
    </CacheProvider>
  );
}
