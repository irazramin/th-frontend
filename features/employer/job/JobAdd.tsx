import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {yupResolver} from "@hookform/resolvers/yup";
import {useRouter} from "next/router";
import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store";
import {callApi} from "../../../slices/apiSlice";
import {HttpHethod} from "../../../constants";
import {UrlHelper} from "../../../helpers";
import {EmployerPortalLayout} from "../../../layouts";
import {DefaultCard, TitleCard} from "../../../components/cards";
import {ButtonGreenSm} from "../../../components/buttons";
import JobForm from "./JobForm";
import {IJob, Job} from "./Job";

const Add = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        watch
    } = useForm<IJob>({
        criteriaMode: "all",
        resolver: yupResolver(Job.createValidation()),
    });

    const {isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const onsubmit: SubmitHandler<IJob> = (data) => {

        dispatch(
            callApi({
                method: HttpHethod.POST,
                url: UrlHelper.jobMS("api/v1/job"),
                storeName: "job",
                body: Job.toJson(data),
                defaultValue: null,
                showToast: true,
            })
        );
        reset();
    };
    return (
        <>
            <EmployerPortalLayout>
                <TitleCard title="Add">
                    <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>
                        Back
                    </ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <JobForm
                        onSubmit={handleSubmit(onsubmit)}
                        register={register}
                        errors={errors}
                        watch={watch}
                    />
                </DefaultCard>
            </EmployerPortalLayout>
        </>
    );
};

export default Add;
