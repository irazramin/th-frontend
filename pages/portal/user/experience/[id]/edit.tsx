import {UserPortalLayout} from "../../../../../layouts";
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
    organisation: String,
    address: String,
    website: String,
    designation: String,
    responsibilities: String,
    start: String,
    end: String,
}


const Edit = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {userExperience = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormInput>({
        criteriaMode: "all",
        resolver: yupResolver(yup.object().shape({
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

    useEffect(() => {
        let id = router?.query?.id ?? '';
        if (id.length) {
            dispatch(callApi({
                method: HttpHethod.GET,
                url: UrlHelper.authMS('api/v1/user-experience/' + id),
                storeName: 'userExperience',
                defaultValue: null
            }));
        }
    }, [router?.query?.id]);

    useEffect(() => {
        if (userExperience?.data != null) {
            reset(userExperience.data);
        }
    }, [userExperience?.data]);

    const onsubmit: SubmitHandler<IFormInput> = data => {
        let id = router?.query?.id ?? '';
        dispatch(callApi({
            method: HttpHethod.PUT,
            url: UrlHelper.authMS('api/v1/user-experience/' + id),
            storeName: 'userExperience',
            body: data,
            defaultValue: null,
            showToast: true
        }));

        reset();
    }

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
                                        placeholder="Organisation"
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
                                        placeholder="Designation"
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

export default Edit