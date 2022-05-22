import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import { store } from '~/redux/store';
import { Provider } from 'react-redux';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
