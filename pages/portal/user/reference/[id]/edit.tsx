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
    firstName: String,
    lastName: String,
    designation: String,
    organization: String,
    email: String,
    phone: String,
    end: String,
}


const Edit = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {userReference = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormInput>({
        criteriaMode: "all",
        resolver: yupResolver(yup.object().shape({
            institute: yup.string().required("Institute is required"),
            firstName: yup.string().required("First Name is required"),
            lastName: yup.string().required("Last Name is required"),
            designation: yup.string().required("Designation is required"),
            organisation: yup.string().required("Organisation is required"),
            email: yup.string().required("Email number is required"),
            phone: yup.string().required("Phone number is required")
        }))
    });

    useEffect(() => {
        let id = router?.query?.id ?? '';
        if (id.length) {
            dispatch(callApi({
                method: HttpHethod.GET,
                url: UrlHelper.authMS('api/v1/user-reference/' + id),
                storeName: 'userReference',
                defaultValue: null
            }));
        }
    }, [router?.query?.id]);

    useEffect(() => {
        if (userReference?.data != null) {
            reset(userReference.data);
        }
    }, [userReference?.data]);

    const onsubmit: SubmitHandler<IFormInput> = data => {
        let id = router?.query?.id ?? '';
        dispatch(callApi({
            method: HttpHethod.PUT,
            url: UrlHelper.authMS('api/v1/user-reference/' + id),
            storeName: 'userReference',
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

export default Edit