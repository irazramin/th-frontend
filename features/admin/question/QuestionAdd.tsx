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
import {AdminPortalLayout} from "../../../layouts";
import {DefaultCard, TitleCard} from "../../../components/cards";
import {ButtonGreenSm} from "../../../components/buttons";
import QuestionForm from "./QuestionForm";
import {IQuestion, Question} from "./Question";

const Add = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<IQuestion>({
        criteriaMode: "all",
        resolver: yupResolver(Question.createValidation()),
    });

    const {isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const onsubmit: SubmitHandler<IQuestion> = (data) => {
        dispatch(
            callApi({
                method: HttpHethod.POST,
                url: UrlHelper.quizMS("api/v1/question"),
                storeName: "question",
                body: Question.toJson(data),
                defaultValue: null,
                showToast: true,
            })
        );
        reset();
    };
    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Add question">
                    <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>
                        Back
                    </ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <QuestionForm
                        onSubmit={handleSubmit(onsubmit)}
                        register={register}
                        errors={errors}
                    />
                </DefaultCard>
            </AdminPortalLayout>
        </>
    );
};

export default Add;
