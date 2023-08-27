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
import {Company, ICompany} from "./Company";
import {yupResolver} from "@hookform/resolvers/yup";
import CompanyForm from "./CompanyForm";

const Edit = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {company = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const {register, handleSubmit, formState: {errors}, reset} = useForm<ICompany>({
        criteriaMode: "all",
        resolver: yupResolver(Company.updateValidation()),
        context: {isCreateMode: false}
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

    const onsubmit: SubmitHandler<ICompany> = (data: any) => {
        let id = router?.query?.id ?? '';

        dispatch(callApi({
            method: HttpHethod.PUT,
            url: UrlHelper.coreMS('api/v1/company/' + id),
            storeName: 'company',
            body: Company.toFormData(data),
            defaultValue: null,
            showToast: true
        }));
    }

    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Edit Company">
                    <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>Back</ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <CompanyForm
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