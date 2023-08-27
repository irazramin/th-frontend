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
import SkillForm from "./SkillForm";
import {ISkill, Skill} from "./Skill";

const Add = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
        reset,
    } = useForm<ISkill>({
        criteriaMode: "all",
        resolver: yupResolver(Skill.createValidation()),
    });

    const {isLoading = false, userSkillList = {data: [], meta: null}} = useSelector(
        (state: RootState) => state.callApi
    );
    const onsubmit: SubmitHandler<ISkill> = (data) => {
        dispatch(callApi({
            method: HttpHethod.POST,
            url: UrlHelper.authMS('api/v1/user-skill'),
            storeName: 'userSkill',
            body: data,
            defaultValue: null,
            showToast: true
        }));

        if (userSkillList?.code) {
            reset();
        }
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
                    <SkillForm
                        onSubmit={handleSubmit(onsubmit)}
                        register={register}
                        errors={errors}
                        watch={watch}
                    />
                </DefaultCard>
            </UserPortalLayout>
        </>
    );
};

export default Add;
