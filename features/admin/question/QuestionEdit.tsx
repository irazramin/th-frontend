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
import {IQuestion, Question} from "./Question";
import QuestionForm from "./QuestionForm";
import {yupResolver} from "@hookform/resolvers/yup";

const Edit = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {question = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IQuestion>({
        criteriaMode: "all",
        resolver: yupResolver(Question.updateValidation()),
        context: {isCreateMode: false}
    });

    useEffect(() => {
        let id = router?.query?.id ?? '';
        if (id.length) {
            dispatch(callApi({
                method: HttpHethod.GET,
                url: UrlHelper.quizMS('api/v1/question/' + id),
                storeName: 'question',
                defaultValue: null
            }));
        }
    }, [router?.query?.id]);

    useEffect(() => {
        if (question?.data != null) {
            reset(question.data);
        }
    }, [question?.data]);

    const onsubmit: SubmitHandler<IQuestion> = (data: any) => {
        let id = router?.query?.id ?? '';
        dispatch(callApi({
            method: HttpHethod.PUT,
            url: UrlHelper.quizMS('api/v1/question/' + id),
            storeName: 'question',
            body: Question.toJson(data),
            defaultValue: null,
            showToast: true
        }));

        if (question.code == 200) {
            reset();
        }
    }

    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Edit">
                    <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>Back</ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <QuestionForm
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