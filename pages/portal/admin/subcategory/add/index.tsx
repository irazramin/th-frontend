import {AdminPortalLayout} from "../../../../../layouts";
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
    category: String,
    image: String,
    description: String
}

const Add = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormInput>({
        criteriaMode: "all",
        resolver: yupResolver(yup.object().shape({
            name: yup.string().required('Name is required'),
            image: yup.string().required('Image is required'),
            description: yup.string().required('Description is required'),
        }))
    });

    const {isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const onsubmit: SubmitHandler<IFormInput> = (data) => {
        console.log('data')
        dispatch(callApi({
            method: HttpHethod.POST,
            url: UrlHelper.coreMS('api/v1/subcategory'),
            storeName: 'subcategory',
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
                    <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>Back</ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <div className="add-items">
                        <form onSubmit={handleSubmit(onsubmit)}>
                            <div className="form-group">
                                <label htmlFor="name">Subcategory Name</label>
                                <div className="input-icon">
                                    <input
                                        {...register("name")}
                                        type="text"
                                        name="name"
                                        placeholder="Subcategory Name"
                                    />
                                </div>
                                <ErrorText name="name" errors={errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Category</label>
                                <div className="input-icon">
                                    <select {...register("category")}>
                                        <option value="female">female</option>
                                        <option value="male">male</option>
                                        <option value="other">other</option>
                                    </select>
                                </div>
                                <ErrorText name="category" errors={errors}/>
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

export default Add