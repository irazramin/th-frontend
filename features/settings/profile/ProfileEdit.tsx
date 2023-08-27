import React, {useEffect} from "react";
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
import {IProfile, Profile} from "./Profile";
import ProfileForm from "./ProfileForm";
import {yupResolver} from "@hookform/resolvers/yup";

const Edit = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {user = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IProfile>({
        criteriaMode: "all",
        resolver: yupResolver(Profile.updateValidation()),
        context: {isCreateMode: false}
    });

    useEffect(() => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.authMS('api/v1/auth/user'),
            storeName: 'user',
            defaultValue: null
        }));
    }, []);

    useEffect(() => {
        if (user?.data != null) {
            reset(user.data);
        }
    }, [user?.data]);

    const onsubmit: SubmitHandler<IProfile> = (data: any) => {
        dispatch(callApi({
            method: HttpHethod.PUT,
            url: UrlHelper.authMS('api/v1/auth/profile'),
            storeName: 'user',
            body: Profile.toFormData(data),
            defaultValue: null,
            showToast: true
        }));

        if (user?.code == 200) {
            reset();
        }
    }

    return (
        <>
            <>
                <TitleCard title="Profile Settings">
                    <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>Back</ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <ProfileForm
                        onSubmit={handleSubmit(onsubmit)}
                        register={register}
                        errors={errors}
                        editMode={true}
                    />
                </DefaultCard>
            </>
        </>
    );
}

export default Edit