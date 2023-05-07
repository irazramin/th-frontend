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

const Education = () => {
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
                name: 'INSTITUTION', storable: false
            },
            {
                id: 3,
                name: 'ADDRESS', storable: false
            },
            {
                id: 4,
                name: 'WEBSITE', storable: false
            },
            {
                id: 5,
                name: 'COURSE', storable: false
            },
            {
                id: 6,
                name: 'DEGREE', storable: false
            },
            {
                id: 7,
                name: 'START', storable: false
            },
            {
                id: 8,
                name: 'END', storable: false
            },
        ]
    }


    const [params, setParams] = useState({page: 1, limit: 10, search: ""});

    const [isMounted, setIsMounted] = useState(false);

    const {userEducationList = {data: [], meta: null}, userEducationDelete = {time: null}, isLoading = false} = useSelector(
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
        if (isMounted && userEducationDelete.time != null) {
            fetchData();
        }
    }, [userEducationDelete.time]);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.authMS('api/v1/user-education/list'),
            params: params,
            storeName: 'userEducationList',
            defaultValue: [],
            showToast: false
        }));
    };

    const deleteData = (id: string) => {
        if (confirm("Are you sure to delete? Data will be lost permanently!")) {
            dispatch(callApi({
                method: HttpHethod.DELETE,
                url: UrlHelper.authMS(`api/v1/user-education/${id}/delete`),
                params: params,
                storeName: 'userEducationDelete',
                defaultValue: null,
                showToast: true
            }));
        }
    };


    return (
        <>
            <UserPortalLayout>
                <TitleCard title="Education">
                    <Link href={router.pathname + '/add'}>
                        <ButtonGreenSm icon={faPlus}>Add Education</ButtonGreenSm>
                    </Link>
                </TitleCard>
                <DefaultCard>
                    <Datatable {...tableProps}
                               meta={userEducationList.meta}
                               onChangeLimit={(value: any) => setParams({...params, limit: value})}
                               onChangePage={(value: any) => setParams({...params, page: value})}
                               onChangeSearch={(value: any) => setParams({...params, search: value})}
                    >
                        {userEducationList?.data?.length > 0 && userEducationList.data.map((userEducation: any, userEducationIndex: number) => (
                            <tr key={userEducationIndex}>
                                <td>{((params.page - 1) * params.limit) + userEducationIndex + 1}</td>
                                <td>{userEducation.institute}</td>
                                <td>{userEducation.address}</td>
                                <td>{userEducation.website}</td>
                                <td>{userEducation.course}</td>
                                <td>{userEducation.degree}</td>
                                <td>{new Date(userEducation.start).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                                <td>{new Date(userEducation.end).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                                <td>
                                    <ActionButton
                                        key={`show${userEducationIndex}`}
                                        onShow={() => router.push(`${router.pathname}/${userEducation._id}`)}
                                        onEdit={() => router.push(`${router.pathname}/${userEducation._id}/edit`)}
                                        onDelete={() => deleteData(userEducation._id)}
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

export default Education
