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
    organisation: String,
    address: String,
    website: String,
    designation: String,
    responsibilities: String,
    start: String,
    end: String,
}

const Add = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormInput>({
        criteriaMode: "all",
        resolver: yupResolver(yup.object().shape({
            organisation: yup.string().required("Organisation is required"),
            address: yup.string().required("Address is required"),
            website: yup.string().required("Website is required"),
            designation: yup
                    .string()
                    .required("Designation is required"),
            responsibilities: yup
                    .string()
                    .required("Responsibilities number is required"),
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


    const {isLoading = false, userExperienceList = {data: [], meta: null}} = useSelector(
        (state: RootState) => state.callApi
    );

    const onsubmit: SubmitHandler<IFormInput> = (data) => {
        console.log('data')
        dispatch(callApi({
            method: HttpHethod.POST,
            url: UrlHelper.authMS('api/v1/user-experience'),
            storeName: 'userExperience',
            body: data,
            defaultValue: null,
            showToast: true
        }));
        if(userExperienceList?.code) {
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
                                <label htmlFor="organisation">Organisation</label>
                                <div className="input-icon">
                                    <input
                                        {...register("organisation")}
                                        type="text"
                                        name="organisation"
                                        placeholder="Organization"
                                    />
                                </div>
                                <ErrorText name="Organisation" errors={errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <div className="input-icon">
                                    <input
                                        {...register("address")}
                                        type="text"
                                        name="address"
                                        placeholder="Address"
                                    />
                                </div>
                                <ErrorText name="address" errors={errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="website">Website</label>
                                <div className="input-icon">
                                    <input
                                        {...register("website")}
                                        type="text"
                                        name="website"
                                        placeholder="Website"
                                    />
                                </div>
                                <ErrorText name="website" errors={errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="designation">Designation</label>
                                <div className="input-icon">
                                    <input
                                        {...register("designation")}
                                        type="text"
                                        name="designation"
                                        placeholder="Degree"
                                    />
                                </div>
                                <ErrorText name="Designation" errors={errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="responsibilities">Responsibilities</label>
                                <div className="input-icon">
                                    <input
                                        {...register("responsibilities")}
                                        type="text"
                                        name="responsibilities"
                                        placeholder="Responsibilities"
                                    />
                                </div>
                                <ErrorText name="responsibilities" errors={errors}/>
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