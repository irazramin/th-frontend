import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store";
import React, {useEffect, useState} from "react";
import {HttpHethod} from "../../../constants";
import {callApi} from "../../../slices/apiSlice";
import {UrlHelper} from "../../../helpers";
import {DefaultCard, TitleCard} from "../../../components/cards";
import {UserPortalLayout} from "../../../layouts";
import Link from "next/link";
import {ActionButton, ButtonGreenSm} from "../../../components/buttons";
import {Datatable} from "../../../components/tables";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const LanguageList = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const tableProps = {
        name: 'userList',
        headers: [
            {
                id: 1,
                name: 'ID', storable: false
            },
            {
                id: 2,
                name: 'NAME', storable: false
            },
            {
                id: 2,
                name: 'PROFICIENCY', storable: false
            }
        ],
        enableCheckbox: true,
        enableAction: true
    }

    const [params, setParams] = useState({page: 1, limit: 10, search: ""});

    const [isMounted, setIsMounted] = useState(false);

    const {
        userLanguageList = {data: [], meta: null},
        userLanguageDelete = {time: null},
        isLoading = false
    } = useSelector(
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
        if (isMounted && userLanguageDelete.time != null) {
            fetchData();
        }
    }, [userLanguageDelete.time]);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.authMS('api/v1/user-language/list'),
            params: params,
            storeName: 'userLanguageList',
            defaultValue: [],
            showToast: false
        }));
    };

    const deleteData = (id: string) => {
        if (confirm("Are you sure to delete? Data will be lost permanently!")) {
            dispatch(callApi({
                method: HttpHethod.DELETE,
                url: UrlHelper.authMS(`api/v1/user-language/${id}/delete`),
                params: params,
                storeName: 'userLanguageDelete',
                defaultValue: null,
                showToast: true
            }));
        }
    };

    return (
        <>
            <UserPortalLayout>
                <TitleCard title="Language">
                    <Link href={router.pathname + '/add'}>
                        <ButtonGreenSm icon={faPlus}>Add Language</ButtonGreenSm>
                    </Link>
                </TitleCard>
                <DefaultCard>
                    <Datatable {...tableProps}
                               meta={userLanguageList.meta}
                               onChangeLimit={(value: any) => setParams({...params, limit: value})}
                               onChangePage={(value: any) => setParams({...params, page: value})}
                               onChangeSearch={(value: any) => setParams({...params, search: value})}
                    >
                        {userLanguageList?.data?.length > 0 && userLanguageList.data.map((userLanguage: any, userLanguageIndex: number) => (
                            <tr key={userLanguageIndex}>
                                <td>{((params.page - 1) * params.limit) + userLanguageIndex + 1}</td>
                                <td>{userLanguage.language}</td>
                                <td>{userLanguage.proficiency}</td>
                                <td>
                                    <ActionButton
                                        key={`show${userLanguageIndex}`}
                                        onShow={() => router.push(`${router.pathname}/${userLanguage._id}`)}
                                        onEdit={() => router.push(`${router.pathname}/${userLanguage._id}/edit`)}
                                        onDelete={() => deleteData(userLanguage._id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </Datatable>
                </DefaultCard>
            </UserPortalLayout>
        </>
    );
}

export default LanguageList