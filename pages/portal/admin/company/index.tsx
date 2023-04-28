import {AdminPortalLayout} from "../../../../layouts";
import Link from "next/link";
import {ActionButton, ButtonGreenSm} from "../../../../components/buttons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../components/cards";
import {Datatable} from "../../../../components/tables";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../store";
import React, {useEffect, useState} from "react";
import {callApi} from "../../../../features/apiSlice";
import {UrlHelper} from "../../../../helpers";
import {HttpHethod} from "../../../../constants";

const Company = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    const tableProps = {
        id: "companyList",
        store: "companyList",
        headers: [
            {id: 1, name: "ID", storable: false},
            {id: 2, name: "NAME", storable: false},
            {id: 3, name: "EMAIL", storable: false},
            {id: 4, name: "PHONE", storable: false},
            {id: 5, name: "WEBSITE", storable: false},
        ],
        meta: null
    };

    const [params, setParams] = useState({page: 1, limit: 10, search: ""});

    const [isMounted, setIsMounted] = useState(false);

    const {companyList = {data: [], meta: null}, companyDelete = {time: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    useEffect(() => {
        fetchData();
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted) {
            fetchData();
        }
        console.log(params.search)
    }, [params.limit, params.page, params.search]);

    useEffect(() => {
        if (isMounted && companyDelete.time != null) {
            fetchData();
        }
    }, [companyDelete.time]);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.coreMS('api/v1/company/list'),
            params: params,
            storeName: 'companyList',
            defaultValue: [],
            showToast: false
        }));
    };

    const deleteData = (id: string) => {
        if (confirm("Are you sure to delete? Data will be lost permanently!")) {
            dispatch(callApi({
                method: HttpHethod.DELETE,
                url: UrlHelper.coreMS(`api/v1/company/${id}/delete`),
                params: params,
                storeName: 'companyDelete',
                defaultValue: null,
                showToast: true
            }));
        }
    };

    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Company">
                    <Link href={router.pathname + "/add"}>
                        <ButtonGreenSm icon={faPlus}>Add Company</ButtonGreenSm>
                    </Link>
                </TitleCard>
                <DefaultCard>
                    <Datatable {...tableProps}
                               meta={companyList.meta}
                               onChangeLimit={(value: any) => setParams({...params, limit: value})}
                               onChangePage={(value: any) => setParams({...params, page: value})}
                               onChangeSearch={(value: any) => setParams({...params, search: value})}
                    >
                        {companyList?.data?.length > 0 && companyList.data.map((company: any, companyIndex: number) => (
                            <tr key={companyIndex}>
                                <td>{((params.page - 1) * params.limit) + companyIndex + 1}</td>
                                <td>{company.name}</td>
                                <td>{company.email}</td>
                                <td>{company.phone}</td>
                                <td>{company.website}</td>
                                <td>
                                    <ActionButton
                                        key={`show${companyIndex}`}
                                        onShow={() => router.push(`company/${company._id}`)}
                                        onEdit={() => router.push(`company/${company._id}/edit`)}
                                        onDelete={() => deleteData(company._id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </Datatable>
                </DefaultCard>
            </AdminPortalLayout>
        </>
    );
};

export default Company;
