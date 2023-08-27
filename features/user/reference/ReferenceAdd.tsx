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
import {UserPortalLayout} from "../../../layouts";
import {DefaultCard, TitleCard} from "../../../components/cards";
import {ButtonGreenSm} from "../../../components/buttons";
import ReferenceForm from "./ReferenceForm";
import {IReference, Reference} from "./Reference";

const Add = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<IReference>({
        criteriaMode: "all",
        resolver: yupResolver(Reference.createValidation()),
    });
    const {isLoading = false, userReferenceList = {data: [], meta: null}} = useSelector(
        (state: RootState) => state.callApi
    );

    const onsubmit: SubmitHandler<IReference> = (data) => {
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
                    <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>
                        Back
                    </ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <ReferenceForm
                        onSubmit={handleSubmit(onsubmit)}
                        register={register}
                        errors={errors}
                    />
                </DefaultCard>
            </UserPortalLayout>
        </>
    );
};

export default Add;
