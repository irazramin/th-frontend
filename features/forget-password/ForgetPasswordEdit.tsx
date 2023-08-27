import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {IPassword, Password} from "./Password";
import PasswordForm from "./PasswordForm";
import {yupResolver} from "@hookform/resolvers/yup";
import {AppDispatch, RootState} from "../../store";
import {callApi} from "../../slices/apiSlice";
import {HttpHethod} from "../../constants";
import {UrlHelper} from "../../helpers";

const Edit = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {forgetPassword = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IPassword>({
        criteriaMode: "all",
        resolver: yupResolver(Password.updateValidation()),
        context: {isCreateMode: false}
    });

    const onsubmit: SubmitHandler<IPassword> = (data: any) => {
        const body = {
            password: data?.password,
            confirmPassword: data?.confirmPassword,
            email: router?.query?.email
        }

        dispatch(callApi({
            method: HttpHethod.POST,
            url: UrlHelper.authMS('api/v1/auth/forget-password'),
            storeName: 'forgetPassword',
            body: Password.toJson(body),
            defaultValue: null,
            showToast: true
        }));

        if (forgetPassword.code == 200) {
            window.location.href = "/login";
        }

    }

    return (
        <>
            <PasswordForm
                onSubmit={handleSubmit(onsubmit)}
                register={register}
                errors={errors}
                editMode={true}
            />
        </>
    );
}

export default Edit