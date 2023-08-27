import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {AppDispatch, RootState} from "../../../store";
import {callApi} from "../../../slices/apiSlice";
import {HttpHethod} from "../../../constants";
import {UrlHelper} from "../../../helpers";
import {DefaultCard, TitleCard} from "../../../components/cards";
import {ButtonGreenSm} from "../../../components/buttons";
import {IPassword, Password} from "./Password";
import PasswordForm from "./PasswordForm";
import {yupResolver} from "@hookform/resolvers/yup";

const Edit = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {password = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IPassword>({
        criteriaMode: "all",
        resolver: yupResolver(Password.updateValidation()),
        context: {isCreateMode: false}
    });

    const onsubmit: SubmitHandler<IPassword> = (data: any) => {
        dispatch(callApi({
            method: HttpHethod.PUT,
            url: UrlHelper.authMS('api/v1/auth/password-change'),
            storeName: 'password',
            body: Password.toJson(data),
            defaultValue: null,
            showToast: true
        }));

    }

    return (
        <>
            <TitleCard title="Change Password">
                <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>Back</ButtonGreenSm>
            </TitleCard>
            <DefaultCard>
                <PasswordForm
                    onSubmit={handleSubmit(onsubmit)}
                    register={register}
                    errors={errors}
                    editMode={true}
                />
            </DefaultCard>
        </>
    );
}

export default Edit