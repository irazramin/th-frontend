import React, {useState} from "react";
import Head from "next/head";
import {SubmitHandler, useForm} from "react-hook-form";
import Link from "next/link";
import {AuthLayout} from "../../layouts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpen, faKey, faUserAlt,} from "@fortawesome/free-solid-svg-icons";
import ErrorText from "../../components/texts/ErrorText";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {HttpHethod} from "../../constants";
import {UrlHelper} from "../../helpers";
import {callApi} from "../../slices/apiSlice";

enum userTypeEnum {
  employer = "2",
  user = "3",
}

interface IFormInput {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  confirmPassword: String;
  userType: userTypeEnum;
}

const Registration = (): JSX.Element => {
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
        firstName: yup.string().required("Email is required"),
        lastName: yup.string().required("Email is required"),
        email: yup.string().required("Email is required"),
        password: yup.string().required("Email is required"),
        confirmPassword: yup.string().required("Password is required"),
        userType: yup.string().required("Email is required"),
      })
    ),
  });

  const { isLoading = false, login = { data: null } } = useSelector(
    (state: RootState) => state.callApi
  );

  const [isMounted, setIsMounted] = useState(false);

  const onsubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);

    dispatch(
      callApi({
        method: HttpHethod.POST,
        url: UrlHelper.authMS("api/v1/auth/register"),
        storeName: "login",
        body: data,
        defaultValue: null,
        showToast: true,
      })
    );

    reset();
  };

  return (
    <>
      <AuthLayout>
        <div className="body">
          <Head>
            <title>Registration</title>
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
            <section className="half-width form-part">
              <div className="wrapper">
                <div className="header-text">
                  <h4>Start for free</h4>
                  <h1>
                    Sign up to <span className="diff-color">TalentHub.</span>
                  </h1>
                  <h4 className="already-account">
                    Already have an account?
                    <Link href="/login" className="diff-color">
                      Log in
                    </Link>
                  </h4>
                </div>
                <form onSubmit={handleSubmit(onsubmit)}>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <div className="input-icon">
                      <input
                        {...register("firstName")}
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                      />
                      <FontAwesomeIcon icon={faUserAlt} className="icon" />
                    </div>
                    <ErrorText name="firstName" errors={errors} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <div className="input-icon">
                      <input
                        {...register("lastName")}
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                      />
                      <FontAwesomeIcon icon={faUserAlt} className="icon" />
                    </div>
                    <ErrorText name="lastName" errors={errors} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <div className="input-icon">
                      <input
                        {...register("email")}
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
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
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="input-icon">
                      <input
                        {...register("confirmPassword")}
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                      />
                      <FontAwesomeIcon icon={faKey} className="icon" />
                    </div>
                    <ErrorText name="confirmPassword" errors={errors} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Registration as</label>
                    <div className="input-icon">
                      <select {...register("userType")}>
                        <option>Select</option>
                        <option value="2">Employer</option>
                        <option value="3">Job Seeker</option>
                      </select>
                    </div>
                    <ErrorText name="userType" errors={errors} />
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
};

export default Registration;
