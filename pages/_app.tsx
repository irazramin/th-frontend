import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import type {AppProps} from 'next/app'
import NextNProgress from 'nextjs-progressbar';
import {store} from "../store";
import {Provider} from "react-redux";

export default function App({Component, pageProps}: AppProps) {
    return <>
        <NextNProgress color="#18b59a" startPosition={0.3} stopDelayMs={200} height={4.5} showOnShallow={true}/>
        <Provider store={store} >
           <Component {...pageProps} />
       </Provider>
    </>

}

// export default wrapper.withRedux(App);
