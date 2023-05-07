import {AdminPortalLayout, UserPortalLayout} from "../../../../../layouts";
import {ButtonGreenMd, ButtonGreenSm} from "../../../../../components/buttons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../../components/cards";
import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../../store";
import ErrorText from "../../../../../components/texts/ErrorText";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {callApi} from "../../../../../slices/apiSlice";
import {HttpHethod} from "../../../../../constants";
import {UrlHelper} from "../../../../../helpers";

interface IFormInput {
    name: String,
    githubLink: String,
    description: String,
    previewLink: String,
    start: String,
    end: String,
}

const Add = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormInput>({
        criteriaMode: "all",
        resolver: yupResolver(yup.object().shape({
            name: yup.string().required("Name is required"),
            description: yup.string().required("Description is required"),
            githubLink: yup.string().required("GithubLink is required"),
            previewLink: yup.string().required("PreviewLink is required"),
            start: yup.string().required("Start number is required"),
            end: yup.string().required("End number is required")
        }))
    });


    const {isLoading = false, userProjectList = {data: [], meta: null}} = useSelector(
        (state: RootState) => state.callApi
    );

    const onsubmit: SubmitHandler<IFormInput> = (data) => {
        console.log('data')
        dispatch(callApi({
            method: HttpHethod.POST,
            url: UrlHelper.authMS('api/v1/user-project'),
            storeName: 'userProject',
            body: data,
            defaultValue: null,
            showToast: true
        }));
        if(userProjectList?.code) {
            reset();
        }
    };
    return (
        <>
            <UserPortalLayout>
                <TitleCard title="Add">
                    <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>Back</ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <div className="add-items">
                        <form onSubmit={handleSubmit(onsubmit)}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <div className="input-icon">
                                    <input
                                        {...register("name")}
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                    />
                                </div>
                                <ErrorText name="name" errors={errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="githubLink">Github Link</label>
                                <div className="input-icon">
                                    <input
                                        {...register("githubLink")}
                                        type="text"
                                        name="githubLink"
                                        placeholder="Github Link"
                                    />
                                </div>
                                <ErrorText name="githubLink" errors={errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="previewLink">Preview Link</label>
                                <div className="input-icon">
                                    <input
                                        {...register("previewLink")}
                                        type="text"
                                        name="previewLink"
                                        placeholder="Preview Link"
                                    />
                                </div>
                                <ErrorText name="previewLink" errors={errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="start">Start Date</label>
                                <div className="input-icon">
                                    <input
                                        {...register("start")}
                                        type="date"
                                        name="start"
                                        placeholder="Start"
                                    />
                                </div>
                                <ErrorText name="start" errors={errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="end">End Date</label>
                                <div className="input-icon">
                                    <input
                                        {...register("end")}
                                        type="date"
                                        name="end"
                                        placeholder="End"
                                    />
                                </div>
                                <ErrorText name="end" errors={errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <div className="input-icon">
                                    <textarea
                                        {...register("description")}
                                        name="description"
                                        placeholder="Description"
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
            </UserPortalLayout>
        </>
    );
}

export default Add