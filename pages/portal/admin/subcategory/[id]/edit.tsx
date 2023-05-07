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
    category: String,
    image: String,
    description: String
}
const Edit = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {subcategory = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormInput>({
        criteriaMode: "all",
        resolver: yupResolver(yup.object().shape({
            name: yup.string().required('Name is required'),
            image: yup.string().required('Image is required'),
            description: yup.string().required('Description is required'),
        }))
    });

    useEffect(() => {
        let id = router?.query?.id ?? '';
        if (id.length) {
            dispatch(callApi({
                method: HttpHethod.GET,
                url: UrlHelper.coreMS('api/v1/subcategory/' + id),
                storeName: 'subcategory',
                defaultValue: null
            }));
        }
    }, [router?.query?.id]);

    useEffect(() => {
        if (subcategory?.data != null) {
            reset(subcategory.data);
        }
    }, [subcategory?.data]);

    const onsubmit: SubmitHandler<IFormInput> = data => {
        let id = router?.query?.id ?? '';
        dispatch(callApi({
            method: HttpHethod.PUT,
            url: UrlHelper.coreMS('api/v1/subcategory/' + id),
            storeName: 'subcategory',
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
                                    <input {...register("image")}
                                           type="file"
                                           name="image"
                                           placeholder="Image"/>
                                </div>
                                <ErrorText
                                    errors={errors}
                                    name="image"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <div className="input-icon">
                                    <input
                                        {...register("description")}
                                        type="text"
                                        name="description"
                                        placeholder="Description"/>
                                </div>
                                <ErrorText
                                    errors={errors}
                                    name="description"
                                />
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