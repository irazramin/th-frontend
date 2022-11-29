import React from 'react';
import Head from "next/head";
import './auth-layout.module.css';

const AuthLayout = ({children}: any) => {
    return (
        <div className="body">
            <Head>
                <title>Login</title>
                <meta charSet="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"/>
                <link href="/css/auth.css" rel="stylesheet"/>
            </Head>
            <div className="reg-page">
                <section className="side-img half-width">
                    <img src="/images/auth/image.svg" alt=""/>
                </section>
                <section className="half-width form-part login-part">
                    <div className="wrapper">
                        <div className="header-text">
                            <h4>Use it for free</h4>
                            <h1>Login to <span className="diff-color">TalentHub.</span></h1>
                            <h4 className="already-account">
                                Don't have an account?
                                <a href="#" className="diff-color">Sign up</a>
                            </h4>
                        </div>
                        <form action="#">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-icon">
                                    <input type="email" name="email" placeholder="Email"/>
                                    <i className="bx bx-envelope icon"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="input-icon">
                                    <input type="password" name="password" placeholder="Password"/>
                                    <i className='bx bx-key icon'/>
                                </div>
                            </div>
                            <div className="tools">
                                <div className="remember-me">
                                    <input type="checkbox" name="remember-me" />
                                    <label htmlFor="remember-me">Keep me remember</label>
                                </div>
                                <a href="#" className="forget-password">Forget password?</a>
                            </div>
                            <div className="action-btn">
                                <button className="btn sign-up">Login</button>
                                <button className="btn google-sign">
                                    <i className="bx bxl-google icon"/>
                                    login with google
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AuthLayout