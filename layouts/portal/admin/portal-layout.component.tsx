import React from 'react';
import Head from "next/head";
import {Sidebar, Topbar} from './partials';
import './portal-layout.module.css';

const PortalLayout = ({children}: any) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"/>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                      integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
                      crossOrigin="anonymous" referrerPolicy="no-referrer"/>
                <link href="/css/portal.css" rel="stylesheet"/>
                <title>Portal</title>
            </Head>
            <div className="body bootstrap-wrapper">
                <Sidebar/>
                <section id="content">
                    <Topbar/>
                    <main>
                        {children}
                    </main>
                </section>
            </div>
        </>
    );
}

export default PortalLayout