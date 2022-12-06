import { useEffect } from 'react';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { SessionProvider } from 'next-auth/react'
import { AppContextProvider } from '../context/AppContext';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);

    return (
        <SessionProvider session={session}>
            <AppContextProvider>
                <Component {...pageProps} />
            </AppContextProvider>
        </SessionProvider>
    )
}

export default MyApp
