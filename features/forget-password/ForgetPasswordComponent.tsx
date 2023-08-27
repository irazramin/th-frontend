import React from 'react';
import {useDispatch} from "react-redux";
import {callApi} from "../../slices/apiSlice";
import {HttpHethod} from "../../constants";
import {UrlHelper} from "../../helpers";
import {AppDispatch} from "../../store";
import Head from "next/head";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons";

const ForgetPasswordComponent = () => {
    const dispatch = useDispatch<AppDispatch>()
    const onSubmit = (e: any) => {
        e.preventDefault();

        const body = {
            email: e.target.email.value
        }
        dispatch(callApi({
            method: HttpHethod.POST,
            url: UrlHelper.authMS('api/v1/auth/forget-password-request'),
            storeName: 'forgetPassword',
            body: body,
            defaultValue: null,
            showToast: true
        }));

    }

    return (
        <>
            <div className="body">
                <Head>
                    <title>Forget Password</title>
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
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Enter your email</label>
                                    <div className="input-icon">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                        />
                                        <FontAwesomeIcon icon={faEnvelopeOpen} className="icon"/>
                                    </div>
                                </div>
                                <div className="action-btn">
                                    <button className="btn sign-up">send</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default ForgetPasswordComponent;

