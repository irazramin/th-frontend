import {AdminPortalLayout} from "../../../../../layouts";
import {ButtonGreenMd, ButtonGreenSm,} from "../../../../../components/buttons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../../components/cards";
import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../../store";
import ToastMessage from "../../../../../components/toast/ToastMessage";
import ErrorText from "../../../../../components/texts/ErrorText";
import {callApi} from "../../../../../slices/apiSlice";
import {HttpHethod} from "../../../../../constants";
import {UrlHelper} from "../../../../../helpers";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";

interface IFormInput {
    name: String;
    email: String;
    phone: String;
    website: String;
    about: String;
    image: String;
    address: String;
}

const Add = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormInput>({
        criteriaMode: "all",
        resolver: yupResolver(yup.object().shape({
            name: yup.string().required('Name is required'),
            email: yup.string().required('Email is required'),
            phone: yup.string().required('Phone is required'),
            website: yup.string().required('Website is required'),
            about: yup.string().required('Website is required'),
            image: yup.string().required('Image is required'),
            address: yup.string().required('Address is required')
        }))
    });

    const {isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const onsubmit: SubmitHandler<IFormInput> = (data) => {
        dispatch(callApi({
            method: HttpHethod.POST,
            url: UrlHelper.coreMS('api/v1/company'),
            storeName: 'company',
            body: data,
            defaultValue: null,
            showToast: true
        }));
        reset();
    };

    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Add">
                    <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>
                        Back
                    </ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <div className="add-items">
                        <form onSubmit={handleSubmit(onsubmit)}>
                            <div className="form-group">
                                <label htmlFor="name">Company Name</label>
                                <div className="input-icon">
                                    <input
                                        {...register("name")}
                                        type="text"
                                        name="name"
                                        placeholder="Company Name"
                                    />
                                </div>
                                <ErrorText name="name" errors={errors}/>
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
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <div className="input-icon">
                                    <input
                                        {...register("address")}
                                        type="text"
                                        name="address"
                                        placeholder="Address"/>
                                </div>
                                <ErrorText
                                    errors={errors}
                                    name="address"
                                />
                                <div className="form-group">
                                    <label htmlFor="website">Website Link</label>
                                    <div className="input-icon">
                                        <input
                                            {...register("website")}
                                            type="text"
                                            name="website"
                                            placeholder="Link"
                                        />
                                    </div>
                                    <ErrorText name="website" errors={errors}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="image">Image</label>
                                    <div className="input-icon">
                                        <input
                                            {...register("image")}
                                            type="file"
                                            name="image"
                                            placeholder="Image"
                                        />
                                    </div>
                                    <ErrorText name="image" errors={errors}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="about">About</label>
                                    <div className="input-icon">
                                    <textarea
                                        {...register("about")}
                                        name="about"
                                        placeholder="about"
                                        rows={10}
                                    />
                                    </div>
                                    <ErrorText name="about" errors={errors}/>
                                </div>
                                <div className="action-btn">
                                    <ButtonGreenMd>Save</ButtonGreenMd>
                                </div>
                            </div>
                        </form>
                    </div>
                    <ToastMessage/>
                </DefaultCard>
            </AdminPortalLayout>
        </>
    );
};

export default Add;
