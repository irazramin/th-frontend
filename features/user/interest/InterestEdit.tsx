import React, {useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {AppDispatch, RootState} from "../../../store";
import {callApi} from "../../../slices/apiSlice";
import {HttpHethod} from "../../../constants";
import {UrlHelper} from "../../../helpers";
import {UserPortalLayout} from "../../../layouts";
import {DefaultCard, TitleCard} from "../../../components/cards";
import {ButtonGreenSm} from "../../../components/buttons";
import {IInterest} from "./Interest";
import InterestForm from "./InterestForm";

const Edit = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {userInterest = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IInterest>({
        criteriaMode: "all",
    });

    useEffect(() => {
        let id = router?.query?.id ?? '';
        if (id.length) {
            dispatch(callApi({
                method: HttpHethod.GET,
                url: UrlHelper.authMS('api/v1/user-interest/' + id),
                storeName: 'userInterest',
                defaultValue: null
            }));
        }
    }, [router?.query?.id]);

    useEffect(() => {
        if (userInterest?.data != null) {
            reset(userInterest.data);
        }
    }, [userInterest?.data]);

    const onsubmit: SubmitHandler<IInterest> = data => {
        let id = router?.query?.id ?? '';
        dispatch(callApi({
            method: HttpHethod.PUT,
            url: UrlHelper.authMS('api/v1/user-interest/' + id),
            storeName: 'userInterest',
            body: data,
            defaultValue: null,
            showToast: true
        }));

        reset();
    }

    return (
        <>
            <UserPortalLayout>
                <TitleCard title="Edit">
                    <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>Back</ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <InterestForm
                        onSubmit={handleSubmit(onsubmit)}
                        register={register}
                        errors={errors}
                        editMode={true}
                    />
                </DefaultCard>
            </UserPortalLayout>
        </>
    );
}

export default Edit