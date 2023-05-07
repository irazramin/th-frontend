import {AdminPortalLayout} from "../../../../../layouts";
import {ButtonGreenMd, ButtonGreenSm} from "../../../../../components/buttons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../../components/cards";
import React, {useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../../store";
import {callApi} from "../../../../../slices/apiSlice";
import {HttpHethod} from "../../../../../constants";
import {UrlHelper} from "../../../../../helpers";
import ErrorText from "../../../../../components/texts/ErrorText";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInput {
    name: String;
    email: String;
    phone: String;
    website: String;
    about: String;
    image: String;
    address: String;
}

const Edit = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {company = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormInput>({
        criteriaMode: "all",
        resolver: yupResolver(yup.object().shape({
            name: yup.string().required("Name is required"),
            about: yup.string().required("About is required"),
            image: yup.string().required("Image is required"),
            email: yup.string().required("Email is required"),
            phone: yup.string().required("Phone is required"),
            address: yup.string().required("Address is required"),
            website: yup.string().required("Website is required")
        }))
    });

    useEffect(() => {
        let id = router?.query?.id ?? '';
        if (id.length) {
            dispatch(callApi({
                method: HttpHethod.GET,
                url: UrlHelper.coreMS('api/v1/company/' + id),
                storeName: 'company',
                defaultValue: null
            }));
        }
    }, [router?.query?.id]);

    useEffect(() => {
        if (company?.data != null) {
            reset(company.data);
        }
    }, [company?.data]);

    const onsubmit: SubmitHandler<IFormInput> = data => {
        let id = router?.query?.id ?? '';
        dispatch(callApi({
            method: HttpHethod.PUT,
            url: UrlHelper.coreMS('api/v1/company/' + id),
            storeName: 'company',
            body: data,
            defaultValue: null,
            showToast: true
        }));

        reset();
    }

    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Edit">
                    <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>Back</ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <div className="add-items">
                        <form onSubmit={handleSubmit(onsubmit)}>
                            <div className="form-group">
                                <label htmlFor="name">Company Name</label>
                                <div className="input-icon">
                                    <input {...register("name")}
                                           type="text"
                                           name="name"
                                           placeholder="Company Name"
                                    />
                                </div>
                                <ErrorText
                                    errors={errors}
                                    name="name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-icon">
                                    <input {...register("email")}
                                           type="email"
                                           name="email"
                                           placeholder="Email"/>
                                </div>
                                <ErrorText
                                    errors={errors}
                                    name="email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <div className="input-icon">
                                    <input
                                        {...register("phone")}
                                        type="text"
                                        name="phone"
                                        placeholder="Phone"/>
                                </div>
                                <ErrorText
                                    errors={errors}
                                    name="phone"
                                />
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
                            </div>
                            <div className="form-group">
                                <label htmlFor="website">Website Link</label>
                                <div className="input-icon">
                                    <input
                                        {...register("website")}
                                        type="text"
                                        name="website"
                                        placeholder="Link"/>
                                </div>
                                <ErrorText
                                    errors={errors}
                                    name="website"
                                />
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
                        </form>
                    </div>
                </DefaultCard>
            </AdminPortalLayout>
        </>
    );
}

export default Edit