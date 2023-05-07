import React, {useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {AppDispatch, RootState} from "../../../store";
import {callApi} from "../../../slices/apiSlice";
import {HttpHethod} from "../../../constants";
import {UrlHelper} from "../../../helpers";
import {AdminPortalLayout} from "../../../layouts";
import {DefaultCard, TitleCard} from "../../../components/cards";
import {ButtonGreenSm} from "../../../components/buttons";
import {IUser, User} from "./User";
import UserForm from "./UserForm";
import {yupResolver} from "@hookform/resolvers/yup";

const Edit = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {user = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IUser>({
        criteriaMode: "all",
        resolver: yupResolver(User.updateValidation()),
        context: {isCreateMode: false}
    });

    useEffect(() => {
        let id = router?.query?.id ?? '';
        if (id.length) {
            dispatch(callApi({
                method: HttpHethod.GET,
                url: UrlHelper.authMS('api/v1/user/' + id),
                storeName: 'user',
                defaultValue: null
            }));
        }
    }, [router?.query?.id]);

    useEffect(() => {
        if (user?.data != null) {
            reset(user.data);
        }
    }, [user?.data]);

    const onsubmit: SubmitHandler<IUser> = (data: any) => {
        let id = router?.query?.id ?? '';

        dispatch(callApi({
            method: HttpHethod.PUT,
            url: UrlHelper.authMS('api/v1/user/' + id),
            storeName: 'user',
            body: User.toFormData(data),
            defaultValue: null,
            showToast: true
        }));

        reset();
    }

    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Edit">
                    <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>Back</ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <UserForm
                        onSubmit={handleSubmit(onsubmit)}
                        register={register}
                        errors={errors}
                        editMode={true}
                    />
                </DefaultCard>
            </AdminPortalLayout>
        </>
    );
}

export default Edit