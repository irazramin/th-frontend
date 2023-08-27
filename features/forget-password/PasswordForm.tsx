import React from 'react';
import ErrorText from "../../components/texts/ErrorText";
import Head from "next/head";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";

const UserForm = ({register, errors, editMode = false, onSubmit}: any) => {
    const router = useRouter();
    return (
        <div className="body">
            <Head>
                <title>Login</title>
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
                                <label htmlFor="email">Email</label>
                                <div className="input-icon">
                                    <input
                                        {...register("email")}
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        readOnly
                                        defaultValue={router?.query?.email}
                                        value={router?.query?.email}
                                    />
                                    <FontAwesomeIcon icon={faEnvelopeOpen} className="icon"/>
                                </div>
                                <ErrorText name="email" errors={errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="input-icon">
                                    <input
                                        {...register("password")}
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                    />
                                    <FontAwesomeIcon icon={faEnvelopeOpen} className="icon"/>
                                </div>
                                <ErrorText name="password" errors={errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <div className="input-icon">
                                    <input
                                        {...register("confirmPassword")}
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                    />
                                    <FontAwesomeIcon icon={faEnvelopeOpen} className="icon"/>
                                </div>
                                <ErrorText name="confirmPassword" errors={errors}/>
                            </div>
                            <div className="action-btn">
                                <button className="btn sign-up">save</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UserForm;
