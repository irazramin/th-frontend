import {AdminPortalLayout, UserPortalLayout} from "../../../../layouts";
import Link from "next/link";
import {ActionButton, ButtonGreenSm} from "../../../../components/buttons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../components/cards";
import {Datatable} from "../../../../components/tables";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../store";
import {callApi} from "../../../../slices/apiSlice";
import {HttpHethod} from "../../../../constants";
import {UrlHelper} from "../../../../helpers";

const Reference = () => {
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
                name: 'FIRST NAME', storable: false
            },
            {
                id: 3,
                name: 'LAST NAME', storable: false
            },
            {
                id: 4,
                name: 'DESIGNATION', storable: false
            },
            {
                id: 5,
                name: 'ORGANIZATION', storable: false
            },
            {
                id: 6,
                name: 'EMAIL', storable: false
            },
            {
                id: 7,
                name: 'PHONE', storable: false
            }
        ]
    }


    const [params, setParams] = useState({page: 1, limit: 10, search: ""});

    const [isMounted, setIsMounted] = useState(false);

    const {userReferenceList = {data: [], meta: null}, userReferenceDelete = {time: null}, isLoading = false} = useSelector(
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
        if (isMounted && userReferenceDelete.time != null) {
            fetchData();
        }
    }, [userReferenceDelete.time]);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.authMS('api/v1/user-reference/list'),
            params: params,
            storeName: 'userReferenceList',
            defaultValue: [],
            showToast: false
        }));
    };

    const deleteData = (id: string) => {
        if (confirm("Are you sure to delete? Data will be lost permanently!")) {
            dispatch(callApi({
                method: HttpHethod.DELETE,
                url: UrlHelper.authMS(`api/v1/user-reference/${id}/delete`),
                params: params,
                storeName: 'userReferenceDelete',
                defaultValue: null,
                showToast: true
            }));
        }
    };


    return (
        <>
            <UserPortalLayout>
                <TitleCard title="Reference">
                    <Link href={router.pathname + '/add'}>
                        <ButtonGreenSm icon={faPlus}>Add Reference</ButtonGreenSm>
                    </Link>
                </TitleCard>
                <DefaultCard>
                    <Datatable {...tableProps}
                               meta={userReferenceList.meta}
                               onChangeLimit={(value: any) => setParams({...params, limit: value})}
                               onChangePage={(value: any) => setParams({...params, page: value})}
                               onChangeSearch={(value: any) => setParams({...params, search: value})}
                    >
                        {userReferenceList?.data?.length > 0 && userReferenceList.data.map((userReference: any, userReferenceIndex: number) => (
                            <tr key={userReferenceIndex}>
                                <td>{((params.page - 1) * params.limit) + userReferenceIndex + 1}</td>
                                <td>{userReference.firstName}</td>
                                <td>{userReference.lastName}</td>
                                <td>{userReference.designation}</td>
                                <td>{userReference.organization}</td>
                                <td>{userReference.email}</td>
                                <td>{userReference.phone}</td>
                                <td>
                                    <ActionButton
                                        key={`show${userReferenceIndex}`}
                                        onShow={() => router.push(`${router.pathname}/${userReference._id}`)}
                                        onEdit={() => router.push(`${router.pathname}/${userReference._id}/edit`)}
                                        onDelete={() => deleteData(userReference._id)}
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

export default Reference
