import {UserPortalLayout} from "../../../../../layouts";
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
import {HttpHethod} from "../../../../../constants";
import {callApi} from "../../../../../slices/apiSlice";
import {UrlHelper} from "../../../../../helpers";

interface IFormInput {
    firstName: String,
    lastName: String,
    designation: String,
    organization: String,
    email: String,
    phone: String,
}

const Add = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormInput>({
        criteriaMode: "all",
        resolver: yupResolver(yup.object().shape({
            firstName: yup.string().required("First Name is required"),
            lastName: yup.string().required("Last Name is required"),
            designation: yup
                .string()
                .required("Designation is required"),
            organization: yup
                .string()
                .required("Organization number is required"),
            email: yup
                .string()
                .required("Email is required"),
            phone: yup
                .string()
                .required("Phone is required"),
        }))
    });

    const {isLoading = false, userReferenceList = {data: [], meta: null}} = useSelector(
        (state: RootState) => state.callApi
    );

    const onsubmit: SubmitHandler<IFormInput> = (data) => {
        console.log('data')
        dispatch(callApi({
            method: HttpHethod.POST,
            url: UrlHelper.authMS('api/v1/user-reference'),
            storeName: 'userReference',
            body: data,
            defaultValue: null,
            showToast: true
        }));
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
                                <label htmlFor="firstName">First Name</label>
                                <div className="input-icon">
                                    <input
                                        {...register("firstName")}
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                    />
                                </div>
                                <ErrorText name="firstName" errors={errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <div className="input-icon">
                                    <input
                                        {...register("lastName")}
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                    />
                                </div>
                                <ErrorText name="lastName" errors={errors}/>
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
                                <ErrorText name="designation" errors={errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="organization">Organization</label>
                                <div className="input-icon">
                                    <input
                                        {...register("organization")}
                                        type="text"
                                        name="organization"
                                        placeholder="Organization"
                                    />
                                </div>
                                <ErrorText name="organization" errors={errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-icon">
                                    <input
                                        {...register("email")}
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <ErrorText name="email" errors={errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <div className="input-icon">
                                    <input
                                        {...register("phone")}
                                        type="text"
                                        name="phone"
                                        placeholder="Phone"
                                    />
                                </div>
                                <ErrorText name="phone" errors={errors}/>
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