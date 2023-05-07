import React, {useEffect, useState} from "react";
import Head from "next/head";
import {SubmitHandler, useForm} from "react-hook-form";
import {AuthLayout} from "../../layouts";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpen, faKey} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {useRouter} from "next/router";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {callApi} from "../../slices/apiSlice";
import {HttpHethod} from "../../constants";
import {UrlHelper} from "../../helpers";
import ErrorText from "../../components/texts/ErrorText";
import Cookies from "js-cookie";

interface IFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    criteriaMode: "all",
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().required("Email is required"),
        password: yup.string().required("Password is required"),
      })
    ),
  });

  const { isLoading = false, login = { data: null } } = useSelector(
    (state: RootState) => state.callApi
  );

  const [isMounted, setIsMounted] = useState(false);

  const onsubmit: SubmitHandler<IFormInput> = (data, e) => {

    dispatch(
      callApi({
        method: HttpHethod.POST,
        url: UrlHelper.authMS("api/v1/auth/login"),
        storeName: "login",
        body: data,
        defaultValue: null,
        showToast: true,
      })
    );

    console.log(login)
   if(login.code === 200) {
     reset();
   }
    e?.preventDefault()

  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && login.time != null && login.code == 200) {
        if (login?.data?.user?.userType === 1) {
            router.push("/portal/admin/dashboard").then((r) => r);
        } else if (login?.data?.user?.userType === 2) {
            router.push("/portal/employer/dashboard").then((r) => r);
        } else if (login?.data?.user?.userType === 3) {
            router.push("/portal/user/dashboard").then((r) => r);
        } else {
            Cookies.remove('auth_user');
            router.push("/login").then((r) => r);
        }
    }
  }, [login?.time]);

  return (
    <>
      <AuthLayout>
        <div className="body">
          <Head>
            <title>Login</title>
            <meta charSet="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link
              href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
              rel="stylesheet"
            />
            <link href="/css/auth.css" rel="stylesheet" />
          </Head>
          <div className="reg-page">
            <section className="side-img half-width">
              <img src="/images/auth/image.svg" alt="" />
            </section>
            <section className="half-width form-part login-part">
              <div className="wrapper">
                <div className="header-text">
                  <h4>Use it for free</h4>
                  <h1>
                    Login to <span className="diff-color">TalentHub.</span>
                  </h1>
                  <h4 className="already-account">
                    Don't have an account?
                    <Link href="/registration" className="diff-color">
                      Sign up
                    </Link>
                  </h4>
                </div>
                <form onSubmit={handleSubmit(onsubmit)}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <div className="input-icon">
                      <input
                        {...register("email")}
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                      {/*<i className="bx bx-envelope icon"/>*/}
                      <FontAwesomeIcon icon={faEnvelopeOpen} className="icon" />
                    </div>
                    <ErrorText name="email" errors={errors} />
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
                      <FontAwesomeIcon icon={faKey} className="icon" />
                    </div>

                    <ErrorText name="password" errors={errors} />
                  </div>
                  <div className="tools">
                    <div className="remember-me">
                      <input type="checkbox" name="remember-me" />
                      <label htmlFor="remember-me">Keep me remember</label>
                    </div>
                    <a href="#" className="forget-password">
                      Forget password?
                    </a>
                  </div>
                  <div className="action-btn">
                    <button className="btn sign-up">Login</button>
                    <button className="btn google-sign">
                      <i className="bx bxl-google icon" />
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
};

export default Login;
