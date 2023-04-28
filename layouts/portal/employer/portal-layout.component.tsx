import React, { useEffect } from 'react';
import Head from "next/head";
import {Sidebar, Topbar} from './partials';
import './portal-layout.module.css';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';


const PortalLayout = ({children}: any) => {

    const router = useRouter();

    useEffect(() => {
        let authUser: any = Cookies.get('auth_user');

        if (authUser) {
            authUser = JSON.parse(authUser);
            if (authUser?.userType != 2) {
                if (authUser?.userType === 1) {
                    router.push("/portal/admin/dashboard").then((r) => r);
                } else if (authUser?.userType === 3) {
                    router.push("/portal/user/dashboard").then((r) => r);
                } else {
                    Cookies.remove('auth_user');
                    router.push("/login").then((r) => r);
                }
            }
        } else {
            Cookies.remove('auth_user');
            router.push("/login").then((r) => r);
        }
    }, []);


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