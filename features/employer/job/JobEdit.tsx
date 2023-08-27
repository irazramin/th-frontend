import React, {useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {AppDispatch, RootState} from "../../../store";
import {callApi} from "../../../slices/apiSlice";
import {HttpHethod} from "../../../constants";
import {UrlHelper} from "../../../helpers";
import {EmployerPortalLayout} from "../../../layouts";
import {DefaultCard, TitleCard} from "../../../components/cards";
import {ButtonGreenSm} from "../../../components/buttons";
import {IJob, Job} from "./Job";
import JobForm from "./JobForm";
import {yupResolver} from "@hookform/resolvers/yup";

const Edit = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {job = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const {register, handleSubmit, formState: {errors}, reset, watch} = useForm<IJob>({
        criteriaMode: "all",
        resolver: yupResolver(Job.updateValidation()),
        context: {isCreateMode: false}
    });

    useEffect(() => {
        let id = router?.query?.id ?? '';
        if (id.length) {
            dispatch(callApi({
                method: HttpHethod.GET,
                url: UrlHelper.jobMS('api/v1/job/' + id),
                storeName: 'job',
                defaultValue: null
            }));
        }
    }, [router?.query?.id]);

    useEffect(() => {
        if (job?.data != null) {
            reset(job.data);
        }
    }, [job?.data]);

    const onsubmit: SubmitHandler<IJob> = (data: any) => {
        let id = router?.query?.id ?? '';
        dispatch(callApi({
            method: HttpHethod.PUT,
            url: UrlHelper.jobMS('api/v1/job/' + id),
            storeName: 'job',
            body: Job.toJson(data),
            defaultValue: null,
            showToast: true
        }));

        if (job.code == 200) {
            reset();
        }
    }

    return (
        <>
            <EmployerPortalLayout>
                <TitleCard title="Edit">
                    <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>Back</ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <JobForm
                        onSubmit={handleSubmit(onsubmit)}
                        register={register}
                        errors={errors}
                        editMode={true}
                        watch={watch}
                    />
                </DefaultCard>
            </EmployerPortalLayout>
        </>
    );
}

export default Edit