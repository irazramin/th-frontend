import React, {useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {AppDispatch, RootState} from "../../../store";
import {callApi} from "../../../slices/apiSlice";
import {HttpHethod} from "../../../constants";
import {UrlHelper} from "../../../helpers";
import {UserPortalLayout} from "../../../layouts";
import {DefaultCard, TitleCard} from "../../../components/cards";
import {ButtonGreenSm} from "../../../components/buttons";
import {IEducation} from "./Education";
import EducationForm from "./EducationForm";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const Edit = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {userEducation = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IEducation>({
        criteriaMode: "all",
        resolver: yupResolver(yup.object().shape({
            institute: yup.string().required("Institute is required"),
            address: yup.string().required("Address is required"),
            website: yup.string().required("Website is required"),
            course: yup
                .string()
                .required("Course is required"),
            degree: yup
                .string()
                .required("Degree number is required"),
            start: yup
                .string()
                .required("Start number is required"),
            end: yup
                .string()
                .required("End number is required"),
            // current: yup
            //     .string()
            //     .required("Current number is required"),
        }))
    });

    useEffect(() => {
        let id = router?.query?.id ?? '';
        if (id.length) {
            dispatch(callApi({
                method: HttpHethod.GET,
                url: UrlHelper.authMS('api/v1/user-education/' + id),
                storeName: 'userEducation',
                defaultValue: null
            }));
        }
    }, [router?.query?.id]);

    useEffect(() => {
        if (userEducation?.data != null) {
            reset(userEducation.data);
        }
    }, [userEducation?.data]);

    const onsubmit: SubmitHandler<IEducation> = data => {
        let id = router?.query?.id ?? '';
        dispatch(callApi({
            method: HttpHethod.PUT,
            url: UrlHelper.authMS('api/v1/user-education/' + id),
            storeName: 'userEducation',
            body: data,
            defaultValue: null,
            showToast: true
        }));

        reset();
    }
    return (
        <>
            <UserPortalLayout>
                <TitleCard title="Edit">
                    <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>Back</ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <EducationForm
                        onSubmit={handleSubmit(onsubmit)}
                        register={register}
                        errors={errors}
                        editMode={true}
                    />
                </DefaultCard>
            </UserPortalLayout>
        </>
    );
}

export default Edit