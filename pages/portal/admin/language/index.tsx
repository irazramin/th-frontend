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
import {callApi} from "../../../../slices/apiSlice";
import {HttpHethod} from "../../../../constants";
import {UrlHelper} from "../../../../helpers";

const Language = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    const tableProps = {
        name: 'userList',
        headers: [
            {id: 1, name: 'ID', storable: false},
            {id: 2, name: 'LANGUAGENAME', storable: false},
        ]
    }

    const [params, setParams] = useState({page: 1, limit: 10, search: ""});

    const [isMounted, setIsMounted] = useState(false);

    const {languageList = {data: [], meta: null}, languageDelete = {time: null}, isLoading = false} = useSelector(
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
    }, [params.limit, params.page, params.search]);

    useEffect(() => {
        if (isMounted && languageDelete.time != null) {
            fetchData();
        }
    }, [languageDelete.time]);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.coreMS('api/v1/language/list'),
            params: params,
            storeName: 'languageList',
            defaultValue: [],
            showToast: false
        }));
    };

    const deleteData = (id: string) => {
        if (confirm("Are you sure to delete? Data will be lost permanently!")) {
            dispatch(callApi({
                method: HttpHethod.DELETE,
                url: UrlHelper.coreMS(`api/v1/language/${id}/delete`),
                params: params,
                storeName: 'languageDelete',
                defaultValue: null,
                showToast: true
            }));
        }
    };

    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Language">
                    <Link href={router.pathname + '/add'}>
                        <ButtonGreenSm icon={faPlus}>Add Language</ButtonGreenSm>
                    </Link>
                </TitleCard>
                <DefaultCard>
                    <Datatable {...tableProps}
                               meta={languageList.meta}
                               onChangeLimit={(value: any) => setParams({...params, limit: value})}
                               onChangePage={(value: any) => setParams({...params, page: value})}
                               onChangeSearch={(value: any) => setParams({...params, search: value})}
                    >
                        {languageList?.data?.length > 0 && languageList.data.map((language: any, languageIndex: number) => (
                            <tr key={languageIndex}>
                                <td>{((params.page - 1) * params.limit) + languageIndex + 1}</td>
                                <td>{language.name}</td>
                                <td>
                                    <ActionButton
                                        key={`show${languageIndex}`}
                                        onShow={() => router.push(`language/${language._id}`)}
                                        onEdit={() => router.push(`language/${language._id}/edit`)}
                                        onDelete={() => deleteData(language._id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </Datatable>
                </DefaultCard>
            </AdminPortalLayout>
        </>
    );
}

export default Language
