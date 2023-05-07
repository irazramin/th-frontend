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
import {ISkill, Skill} from "./Skill";
import SkillForm from "./SkillForm";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const Edit = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {skill = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const {register, handleSubmit, formState: {errors}, reset} = useForm<ISkill>({
        criteriaMode: "all",
        resolver: yupResolver(yup.object().shape({
            name: yup.string().required('Name is required'),
            description: yup.string().required('Description is required'),
        }))
    });

    useEffect(() => {
        let id = router?.query?.id ?? '';
        if (id.length) {
            dispatch(callApi({
                method: HttpHethod.GET,
                url: UrlHelper.coreMS('api/v1/skill/' + id),
                storeName: 'skill',
                defaultValue: null
            }));
        }
    }, [router?.query?.id]);

    useEffect(() => {
        if (skill?.data != null) {
            reset(skill.data);
        }
    }, [skill?.data]);

    const onsubmit: SubmitHandler<ISkill> = (data: any) => {
        let id = router?.query?.id ?? '';

        dispatch(callApi({
            method: HttpHethod.PUT,
            url: UrlHelper.coreMS('api/v1/skill/' + id),
            storeName: 'skill',
            body: Skill.toJson(data),
            defaultValue: null,
            showToast: true
        }));

        if (skill.code == 200) {
            reset();
        }
    }

    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Edit">
                    <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>Back</ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <SkillForm
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