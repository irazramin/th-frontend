import React from 'react';
import Head from "next/head";
import {SubmitHandler, useForm} from "react-hook-form";
import {ErrorMessage} from '@hookform/error-message';
import Link from "next/link";
import {AuthLayout} from "../../layouts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpen, faKey, faUserAlt} from "@fortawesome/free-solid-svg-icons";

interface IFormInput {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    confirmPassword: String
}

const Registration = (): JSX.Element => {
    const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>({criteriaMode: "all"});

    const onsubmit: SubmitHandler<IFormInput> = data => {
        fetch('http://localhost:5000/api/v1/auth/registration', {
            method:'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
                console.log(data);
            });

    }

    return (
        <>
            <AuthLayout>
                <div className="body">
                    <Head>
                        <title>Registration</title>
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
                        <section className="half-width form-part">
                            <div className="wrapper">
                                <div className="header-text">
                                    <h4>Start for free</h4>
                                    <h1>Sign up to <span className="diff-color">TalentHub.</span></h1>
                                    <h4 className="already-account">
                                        Already have an account?<Link href="/login" className="diff-color">
                                        Log in</Link
                                    >
                                    </h4>
                                </div>

                                <form onSubmit={handleSubmit(onsubmit)}>
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <div className="input-icon">
                                            <input {...register("firstName", {
                                                required: "This field is required.",
                                                maxLength: {
                                                    value: 50,
                                                    message: "This input exceed maxLength."
                                                }
                                            })} type="text" name="firstName" placeholder="First Name"/>

                                            <FontAwesomeIcon icon={faUserAlt} className='icon' />

                                        </div>
                                        <ErrorMessage
                                            errors={errors}
                                            name="firstName"
                                            render={({messages}) =>
                                                messages &&
                                                Object.entries(messages).map(([type, message]) => (
                                                    <p key={type} style={{
                                                        color: 'red',
                                                        marginTop: "10px",
                                                        fontSize: "14px",
                                                        fontWeight: "600",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "10px"
                                                    }} className='password-error-message'>
                                                        <i className='bx bx-error-circle'
                                                           style={{fontSize: "17px"}}></i> {message}</p>
                                                ))
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <div className="input-icon">
                                            <input {...register("lastName", {
                                                required: "This field is required.",
                                                maxLength: {
                                                    value: 50,
                                                    message: "This input exceed maxLength."
                                                }
                                            })} type="text" name="lastName" placeholder="Last Name"/>
                                            <FontAwesomeIcon icon={faUserAlt} className='icon' />

                                        </div>
                                        <ErrorMessage
                                            errors={errors}
                                            name="lastName"
                                            render={({messages}) =>
                                                messages &&
                                                Object.entries(messages).map(([type, message]) => (
                                                    <p key={type} style={{
                                                        color: 'red',
                                                        marginTop: "10px",
                                                        fontSize: "14px",
                                                        fontWeight: "600",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "10px"
                                                    }} className='password-error-message'>
                                                        <i className='bx bx-error-circle'
                                                           style={{fontSize: "17px"}}></i> {message}</p>
                                                ))
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <div className="input-icon">
                                            <input {...register("email", {
                                                required: "This field is required.",
                                                pattern: {
                                                    value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                                    message: "Enter a valid email"
                                                }
                                            })} type="email" name="email" placeholder="Email"/>
                                            <FontAwesomeIcon icon={faEnvelopeOpen} className='icon' />

                                        </div>
                                        <ErrorMessage
                                            errors={errors}
                                            name="email"
                                            render={({messages}) =>
                                                messages &&
                                                Object.entries(messages).map(([type, message]) => (
                                                    <p key={type} style={{
                                                        color: 'red',
                                                        marginTop: "10px",
                                                        fontSize: "14px",
                                                        fontWeight: "600",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "10px"
                                                    }} className='password-error-message'>
                                                        <i className='bx bx-error-circle'
                                                           style={{fontSize: "17px"}}></i> {message}</p>
                                                ))
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <div className="input-icon">
                                            <input
                                                {...register("password", {
                                                    required: "This field is required.",
                                                    minLength: {
                                                        value: 8,
                                                        message: "password should be atleast 8 characters"
                                                    }
                                                })}
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                            />
                                            <FontAwesomeIcon icon={faKey} className='icon' />

                                        </div>
                                        <ErrorMessage
                                            errors={errors}
                                            name="password"
                                            render={({messages}) =>
                                                messages &&
                                                Object.entries(messages).map(([type, message]) => (
                                                    <p key={type} style={{
                                                        color: 'red',
                                                        marginTop: "10px",
                                                        fontSize: "14px",
                                                        fontWeight: "600",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "10px"
                                                    }} className='password-error-message'>
                                                        <i className='bx bx-error-circle'
                                                           style={{fontSize: "17px"}}></i> {message}</p>
                                                ))
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <div className="input-icon">
                                            <input
                                                {...register("confirmPassword", {
                                                    required: "This field is required.",
                                                    minLength: {
                                                        value: 8,
                                                        message: "password should be atleast 8 characters"
                                                    }
                                                })}
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="Confirm Password"
                                            />
                                            <FontAwesomeIcon icon={faKey} className='icon' />
                                        </div>
                                        <ErrorMessage
                                            errors={errors}
                                            name="confirmPassword"
                                            render={({messages}) =>
                                                messages &&
                                                Object.entries(messages).map(([type, message]) => (
                                                    <p key={type} style={{
                                                        color: 'red',
                                                        marginTop: "10px",
                                                        fontSize: "14px",
                                                        fontWeight: "600",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "10px"
                                                    }} className='password-error-message'>
                                                        <i className='bx bx-error-circle'
                                                           style={{fontSize: "17px"}}></i> {message}</p>
                                                ))
                                            }
                                        />
                                    </div>

                                    <div className="action-btn">
                                        <button className="btn sign-up">Sign Up</button>
                                        <button className="btn google-sign">
                                            <i className="bx bxl-google icon"></i>Sign up with google
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </AuthLayout>
        </>
    );
}

export default Registration
