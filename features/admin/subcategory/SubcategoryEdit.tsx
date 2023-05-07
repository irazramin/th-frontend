import React, {useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {AppDispatch, RootState} from "../../../store";
import {callApi} from "../../../slices/apiSlice";
import {HttpHethod} from "../../../constants";
import {UrlHelper} from "../../../helpers";
import {AdminPortalLayout} from "../../../layouts";
import {DefaultCard, TitleCard} from "../../../components/cards";
import {ButtonGreenSm} from "../../../components/buttons";
import {ISubcategory, Subcategory} from "./Subcategory";
import {yupResolver} from "@hookform/resolvers/yup";
import SubcategoryForm from "./SubcategoryForm";
import * as yup from "yup";

const Edit = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {subcategory = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const {register, handleSubmit, formState: {errors}, reset} = useForm<ISubcategory>({
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

    const onsubmit: SubmitHandler<ISubcategory> = (data: any) => {
        let id = router?.query?.id ?? '';

        dispatch(callApi({
            method: HttpHethod.PUT,
            url: UrlHelper.coreMS('api/v1/subcategory/' + id),
            storeName: 'subcategory',
            body: Subcategory.toFormData(data),
            defaultValue: null,
            showToast: true
        }));
    }

    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Edit">
                    <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>Back</ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <SubcategoryForm
                        onSubmit={handleSubmit(onsubmit)}
                        register={register}
                        errors={errors}
                        editMode={true}
                    />
                </DefaultCard>
            </AdminPortalLayout>
        </>
    );
}

export default Edit