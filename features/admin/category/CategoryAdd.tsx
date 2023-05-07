import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {yupResolver} from "@hookform/resolvers/yup";
import {useRouter} from "next/router";
import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store";
import {callApi} from "../../../slices/apiSlice";
import {HttpHethod} from "../../../constants";
import {UrlHelper} from "../../../helpers";
import {AdminPortalLayout} from "../../../layouts";
import {DefaultCard, TitleCard} from "../../../components/cards";
import {ButtonGreenSm} from "../../../components/buttons";
import {Category, ICategory} from "./Category";
import CategoryForm from "./CategoryForm";

const Add = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<ICategory>({
        criteriaMode: "all",
        resolver: yupResolver(Category.createValidation()),
    });

    const {isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const onsubmit: SubmitHandler<ICategory> = (data) => {
        console.log('data', data.image);
        dispatch(
            callApi({
                method: HttpHethod.POST,
                url: UrlHelper.coreMS('api/v1/category'),
                storeName: "category",
                body: Category.toFormData(data),
                defaultValue: null,
                showToast: true,
            })
        );

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
                    <CategoryForm
                        onSubmit={handleSubmit(onsubmit)}
                        register={register}
                        errors={errors}
                    />
                </DefaultCard>
            </AdminPortalLayout>
        </>
    );
};

export default Add;
