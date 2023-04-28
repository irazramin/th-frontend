import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-responsive-modal/styles.css';
import type {AppProps} from 'next/app'
import NextNProgress from 'nextjs-progressbar';
import {store} from "../store";
import {Provider} from "react-redux";
import ToastMessage from "../components/toast/ToastMessage";
import React from "react";

export default function App({Component, pageProps}: AppProps) {
    return <>
        <NextNProgress color="#18b59a" startPosition={0.3} stopDelayMs={200} height={4.5} showOnShallow={true}/>
        <Provider store={store}>
            <Component {...pageProps} />
            <ToastMessage/>
        </Provider>
    </>

}

// export default wrapper.withRedux(App);
