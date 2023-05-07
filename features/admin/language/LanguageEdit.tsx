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
import {ILanguage, Language} from "./Language";
import LanguageForm from "./LanguageForm";
import {yupResolver} from "@hookform/resolvers/yup";
import {ICompany} from "../company/Company";

const Edit = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {language = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const {register, handleSubmit, formState: {errors}, reset} = useForm<ILanguage>({
        criteriaMode: "all",
        resolver: yupResolver(Language.updateValidation()),
        context: {isCreateMode: false}
    });
    useEffect(() => {
        let id = router?.query?.id ?? '';
        if (id.length) {
            dispatch(callApi({
                method: HttpHethod.GET,
                url: UrlHelper.coreMS('api/v1/language/' + id),
                storeName: 'language',
                defaultValue: null
            }));
        }
    }, [router?.query?.id]);

    useEffect(() => {
        if (language?.data != null) {
            reset(language.data);
        }
    }, [language?.data]);

    const onsubmit: SubmitHandler<ILanguage> = (data: any) => {
        let id = router?.query?.id ?? '';

        dispatch(callApi({
            method: HttpHethod.PUT,
            url: UrlHelper.coreMS('api/v1/language/' + id),
            storeName: 'language',
            body: Language.toJson(data),
            defaultValue: null,
            showToast: true
        }));

        if (language.code == 200) {
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
                    <LanguageForm
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