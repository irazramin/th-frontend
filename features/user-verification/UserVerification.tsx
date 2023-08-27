import React, {useEffect, useState} from "react";
import Head from "next/head";
import {AuthLayout} from "../../layouts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {useRouter} from "next/router";
import OTPInput from "react-otp-input";
import {ButtonGreenSm} from "../../components/buttons";
import {callApi} from "../../slices/apiSlice";
import {HttpHethod} from "../../constants";
import {UrlHelper} from "../../helpers";

const UserVerificationComponent = () => {
    const router = useRouter();
    const {email} = router.query;
    const dispatch = useDispatch<AppDispatch>();
    const [isMounted, setIsMounted] = useState(false);
    const [otpNum, setOtpNum]: any = useState(0);

    const {isLoading = false, registration = {data: null}, login = {data: null}, verify = {data: null}} = useSelector(
        (state: RootState) => state.callApi
    );

    const handleOtpInput = (e: any) => {
        setOtpNum(e)
    }

    const onsubmit = (e: any) => {
        e.preventDefault();

        const data = {
            _id: registration?.data?._id,
            email: email,
            otpCode: otpNum
        }

        dispatch(
            callApi({
                method: HttpHethod.POST,
                url: UrlHelper.authMS("api/v1/auth/verify-user"),
                storeName: "verify",
                body: data,
                defaultValue: null,
                showToast: true,
            })
        );

    }

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (verify?.data?.isVerified == true && isMounted) {
            router.push('/login');
        }
    }, [verify?.data?.isVerified, isMounted]);

    return (
        <>
            <AuthLayout>
                <div className="body">
                    <Head>
                        <title>UserVerification</title>
                        <meta charSet="UTF-8"/>
                        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0"
                        />
                        <link
                            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                            rel="stylesheet"
                        />
                        <link href="/css/auth.css" rel="stylesheet"/>
                    </Head>
                    <div className="reg-page">
                        <section className="side-img half-width">
                            <img src="/images/auth/image.svg" alt=""/>
                        </section>
                        <section className="half-width form-part login-part">

                            <div className="wrapper">
                                <h2 style={{fontSize: "16px", margin: "20px 0", textAlign: "center"}}>Enter your OTP
                                    number from your
                                    registered email</h2>
                                <div className="add-items">
                                    <div className="input-icon" style={{width: "100%"}}>
                                        <input type="text" name="name" style={{
                                            width: "100%",
                                            height: "100%",
                                            fontSize: "14px",
                                            padding: "10px",
                                            border: "none",
                                            backgroundColor: "#f3f3f3"
                                        }} placeholder="" defaultValue={router?.query?.email} readOnly/>

                                    </div>
                                </div>
                                <div className="otp">

                                    <form onSubmit={(e: any) => onsubmit(e)}>
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            marginRight: "0",
                                            flexDirection: "column"
                                        }}>
                                            <OTPInput value={otpNum} onChange={(e: any) => handleOtpInput(e)}
                                                      renderInput={(props) => <input {...props} />} numInputs={4}
                                                      renderSeparator={<span>-</span>}/>
                                        </div>
                                        <div style={{
                                            marginTop: "20px",
                                            display: "flex",
                                            justifyContent: "center",
                                            marginRight: "0"
                                        }}>
                                            <ButtonGreenSm>Submit</ButtonGreenSm>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </AuthLayout>
        </>
    );
};

export default UserVerificationComponent;
