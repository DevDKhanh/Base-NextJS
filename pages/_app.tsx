import { Provider } from 'react-redux';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '~/redux/store';
import '~/styles/globals.scss';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {getLayout(<Component {...pageProps} />)}
            </PersistGate>
        </Provider>
    );
}

export default MyApp;
