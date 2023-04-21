import React from 'react';
import Head from "next/head";
import {SubmitHandler, useForm} from "react-hook-form";
import {AuthLayout} from "../../layouts";
import Link from "next/link";
import {ErrorMessage} from "@hookform/error-message";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelopeOpen, faKey} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {fetchApi} from "../../features/postApiSlice"
import {useRouter} from "next/router";

interface IFormInput {
    email: string,
    password: string
}

const Login = () => {
    const router = useRouter();
    const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>({criteriaMode: "all"});
    const dispatch = useDispatch<AppDispatch>();
    const URL = 'auth/login'
    const {isLoading, apiResponse, error} = useSelector(((state: RootState) => state.postApi))

    const onsubmit: SubmitHandler<IFormInput> = data => {

        dispatch(fetchApi({
            url: "http://localhost:3032/api/v1/login",
            payload: data
        }));


        console.log(apiResponse)

        if (apiResponse?.data?.user?.userType === 1) {
            router.push("/portal/admin/dashboard").then(r => r)
        } else if (apiResponse?.data?.user?.usertype === 2) {
            router.push("/portal/employer/dashboard").then(r => r)
        } else if (apiResponse?.data?.user?.userType === 3) {
            router.push("/portal/user/dashboard").then(r => r)
        }

    }

    return (
        <>
            <AuthLayout>
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
                                        <Link href="/registration" className="diff-color">Sign up</Link>
                                    </h4>
                                </div>
                                <form onSubmit={handleSubmit(onsubmit)}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <div className="input-icon">
                                            <input {...register('email', {
                                                required: "This field is required.",
                                                // pattern:{
                                                //     value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                                //     message: "Enter a valid email"
                                                // }
                                            })} type="email" name="email" placeholder="Email"/>
                                            {/*<i className="bx bx-envelope icon"/>*/}
                                            <FontAwesomeIcon icon={faEnvelopeOpen} className='icon'/>
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
                                                           style={{fontSize: "17px"}}/> {message}</p>
                                                ))
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <div className="input-icon">
                                            <input {...register('password', {
                                                required: "This field is required.",
                                                // minLength: {
                                                //     value: 8,
                                                //     message: "password should be atleast 8 characters"
                                                // }
                                            })} type="password" name="password" placeholder="Password"/>
                                            <FontAwesomeIcon icon={faKey} className='icon'/>

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
                                                           style={{fontSize: "17px"}}/> {message}</p>
                                                ))
                                            }
                                        />
                                    </div>
                                    <div className="tools">
                                        <div className="remember-me">
                                            <input type="checkbox" name="remember-me"/>
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
            </AuthLayout>
        </>
    );
}

export default Login;
