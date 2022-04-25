import 'antd/dist/antd.css';
import '../styles/globals.scss';

import { PersistGate } from 'redux-persist/integration/react';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { Spin } from 'antd';

import { persistor } from '@redux/index';
import logger from '@libs/logger';

import store from '../src/redux/store/store';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    useEffect(() => {
        const handleStart = (url: string) => {
            logger.debug('🚀 handleStart ~ url', url);
        };
        const handleStop = () => {
            logger.debug('🚀 LoadingStop', 'LoadingStop');
        };
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleStop);
        router.events.on('routeChangeError', handleStop);
        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleStop);
            router.events.off('routeChangeError', handleStop);
        };
    }, [router]);
    return (
        <Provider store={store}>
            <PersistGate loading={<Spin />} persistor={persistor}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    );
}
export default appWithTranslation(MyApp);
