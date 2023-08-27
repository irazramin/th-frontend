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

const InterestList = () => {
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
            }
        ],
        enableCheckbox: true,
        enableAction: true
    }
    const [params, setParams] = useState({page: 1, limit: 10, search: ""});

    const [isMounted, setIsMounted] = useState(false);

    const {
        userInterestList = {data: [], meta: null},
        userInterestDelete = {time: null},
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
        if (isMounted && userInterestDelete.time != null) {
            fetchData();
        }
    }, [userInterestDelete.time]);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.authMS('api/v1/user-interest/list'),
            params: params,
            storeName: 'userInterestList',
            defaultValue: [],
            showToast: false
        }));
    };

    const deleteData = (id: string) => {
        if (confirm("Are you sure to delete? Data will be lost permanently!")) {
            dispatch(callApi({
                method: HttpHethod.DELETE,
                url: UrlHelper.authMS(`api/v1/user-interest/${id}/delete`),
                params: params,
                storeName: 'userInterestDelete',
                defaultValue: null,
                showToast: true
            }));
        }
    };


    return (
        <>
            <UserPortalLayout>
                <TitleCard title="Interest">
                    <Link href={router.pathname + '/add'}>
                        <ButtonGreenSm icon={faPlus}>Add Interest</ButtonGreenSm>
                    </Link>
                </TitleCard>
                <DefaultCard>
                    <Datatable {...tableProps}
                               meta={userInterestList.meta}
                               onChangeLimit={(value: any) => setParams({...params, limit: value})}
                               onChangePage={(value: any) => setParams({...params, page: value})}
                               onChangeSearch={(value: any) => setParams({...params, search: value})}
                    >
                        {userInterestList?.data?.length > 0 && userInterestList.data.map((userInterest: any, userInterestIndex: number) => (
                            <tr key={userInterestIndex}>
                                <td>{((params.page - 1) * params.limit) + userInterestIndex + 1}</td>
                                <td>{userInterest.interest}</td>
                                <td>
                                    <ActionButton
                                        key={`show${userInterestIndex}`}
                                        onShow={() => router.push(`${router.pathname}/${userInterest._id}`)}
                                        onEdit={() => router.push(`${router.pathname}/${userInterest._id}/edit`)}
                                        onDelete={() => deleteData(userInterest._id)}
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

export default InterestList