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

const ExperienceLIst = () => {
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
                name: 'ORGANIZATION', storable: false
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
                name: 'DESIGNATION', storable: false
            },
            {
                id: 6,
                name: 'RESPONSIBILITIES', storable: false
            },
            {
                id: 7,
                name: 'START', storable: false
            },
            {
                id: 8,
                name: 'END', storable: false
            },
        ],
        enableCheckbox: true,
        enableAction: true
    }

    const [params, setParams] = useState({page: 1, limit: 10, search: ""});

    const [isMounted, setIsMounted] = useState(false);

    const {
        userExperienceList = {data: [], meta: null},
        userExperienceDelete = {time: null},
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
        if (isMounted && userExperienceDelete.time != null) {
            fetchData();
        }
    }, [userExperienceDelete.time]);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.authMS('api/v1/user-experience/list'),
            params: params,
            storeName: 'userExperienceList',
            defaultValue: [],
            showToast: false
        }));
    };

    const deleteData = (id: string) => {
        if (confirm("Are you sure to delete? Data will be lost permanently!")) {
            dispatch(callApi({
                method: HttpHethod.DELETE,
                url: UrlHelper.authMS(`api/v1/user-experience/${id}/delete`),
                params: params,
                storeName: 'userExperienceDelete',
                defaultValue: null,
                showToast: true
            }));
        }
    };

    return (
        <>
            <UserPortalLayout>
                <TitleCard title="Experience">
                    <Link href={router.pathname + '/add'}>
                        <ButtonGreenSm icon={faPlus}>Add Experience</ButtonGreenSm>
                    </Link>
                </TitleCard>
                <DefaultCard>
                    <Datatable {...tableProps}
                               meta={userExperienceList.meta}
                               onChangeLimit={(value: any) => setParams({...params, limit: value})}
                               onChangePage={(value: any) => setParams({...params, page: value})}
                               onChangeSearch={(value: any) => setParams({...params, search: value})}
                    >
                        {userExperienceList?.data?.length > 0 && userExperienceList.data.map((userExperience: any, userExperienceIndex: number) => (
                            <tr key={userExperienceIndex}>
                                <td>{((params.page - 1) * params.limit) + userExperienceIndex + 1}</td>
                                <td>{userExperience.organization}</td>
                                <td>{userExperience.address}</td>
                                <td>{userExperience.website}</td>
                                <td>{userExperience.designation}</td>
                                <td>{userExperience.responsibilities}</td>
                                <td>{new Date(userExperience.start).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</td>
                                <td>{new Date(userExperience.end).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</td>
                                <td>
                                    <ActionButton
                                        key={`show${userExperienceIndex}`}
                                        onShow={() => router.push(`${router.pathname}/${userExperience._id}`)}
                                        onEdit={() => router.push(`${router.pathname}/${userExperience._id}/edit`)}
                                        onDelete={() => deleteData(userExperience._id)}
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

export default ExperienceLIst