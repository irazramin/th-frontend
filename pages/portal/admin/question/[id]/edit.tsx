import {AdminPortalLayout} from "../../../../../layouts";
import React, {useEffect} from "react";
import {callApi} from "../../../../../slices/apiSlice";
import {HttpHethod} from "../../../../../constants";
import {UrlHelper} from "../../../../../helpers";
import {SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../../store";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import {DefaultCard, TitleCard} from "../../../../../components/cards";
import {ButtonGreenMd, ButtonGreenSm} from "../../../../../components/buttons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import ErrorText from "../../../../../components/texts/ErrorText";

interface IFormInput {
    name: String,
    description: String,
    optionA: String,
    optionB: String,
    optionC: String,
    optionD: String,
}

const Edit = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {question = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormInput>({
        criteriaMode: "all",
        resolver: yupResolver(yup.object().shape({
            name: yup.string().required('Name is required'),
            description: yup.string().required('Description is required'),
            optionA: yup.string().required('Option A is required'),
            optionB: yup.string().required('Option B is required'),
            optionC: yup.string().required('Option C is required'),
            optionD: yup.string().required('Option D is required'),
        }))
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

    const onsubmit: SubmitHandler<IFormInput> = data => {
        let id = router?.query?.id ?? '';
        dispatch(callApi({
            method: HttpHethod.PUT,
            url: UrlHelper.quizMS('api/v1/question/' + id),
            storeName: 'question',
            body: data,
            defaultValue: null,
            showToast: true
        }));

        reset();
    }

    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Add">
                    <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>Back</ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <div className="add-items">
                        <form onSubmit={handleSubmit(onsubmit)}>
                            <div className="form-group">
                                <label htmlFor="name">Question Name</label>
                                <div className="input-icon">
                                    <input
                                        {...register("name")}
                                        type="text"
                                        name="name"
                                        placeholder="Question Name"
                                    />
                                </div>
                                <ErrorText name="name" errors={errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="optionA">Option A</label>
                                <div className="input-icon">
                                    <input
                                        {...register("optionA")}
                                        type="text"
                                        name="optionA"
                                        placeholder="Option A"
                                    />
                                </div>
                                <ErrorText name="optionA" errors={errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="optionB">Option B</label>
                                <div className="input-icon">
                                    <input
                                        {...register("optionB")}
                                        type="text"
                                        name="optionB"
                                        placeholder="Option B"
                                    />
                                </div>
                                <ErrorText name="optionB" errors={errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="optionC">Option C</label>
                                <div className="input-icon">
                                    <input
                                        {...register("optionC")}
                                        type="text"
                                        name="optionC"
                                        placeholder="Option C"
                                    />
                                </div>
                                <ErrorText name="optionC" errors={errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="optionD">Option D</label>
                                <div className="input-icon">
                                    <input
                                        {...register("optionD")}
                                        type="text"
                                        name="optionD"
                                        placeholder="Option D"
                                    />
                                </div>
                                <ErrorText name="optionD" errors={errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <div className="input-icon">
                                    <textarea
                                        {...register("description")}
                                        name="description"
                                        placeholder="description"
                                        rows={10}
                                    />
                                </div>
                                <ErrorText name="description" errors={errors}/>
                            </div>
                            <div className="action-btn">
                                <ButtonGreenMd>Save</ButtonGreenMd>
                            </div>
                        </form>
                    </div>
                </DefaultCard>
            </AdminPortalLayout>
        </>
    );
}

export default Edit