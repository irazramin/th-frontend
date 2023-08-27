import Cookies from 'js-cookie';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';

const AuthLayout = ({children}: any) => {

    const router = useRouter();

    useEffect(() => {
        let authUser: any = Cookies.get('auth_user');

        if (authUser != null) {
            authUser = JSON.parse(authUser);
            if (authUser?.userType === 1) {
                router.push("/portal/admin/dashboard").then((r) => r);
            } else if (authUser?.userType === 2) {
                router.push("/portal/employer/dashboard").then((r) => r);
            } else if (authUser?.userType === 3) {
                router.push("/portal/user/dashboard").then((r) => r);
            }
        }
    }, []);

    return (
        <>
            <div>
                {children}
            </div>
        </>
    );
};

export default AuthLayout;