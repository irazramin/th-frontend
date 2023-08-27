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

const ProjectLIst = () => {
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
                id: 3,
                name: 'GITHUB LINK', storable: false
            },
            {
                id: 4,
                name: 'PREVIEW LINK', storable: false
            },
            {
                id: 5,
                name: 'START', storable: false
            },
            {
                id: 6,
                name: 'END', storable: false
            },
        ],
        enableCheckbox: true,
        enableAction: true
    }

    const [params, setParams] = useState({page: 1, limit: 10, search: ""});

    const [isMounted, setIsMounted] = useState(false);

    const {userProjectList = {data: [], meta: null}, userProjectDelete = {time: null}, isLoading = false} = useSelector(
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
        if (isMounted && userProjectDelete.time != null) {
            fetchData();
        }
    }, [userProjectDelete.time]);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.authMS('api/v1/user-project/list'),
            params: params,
            storeName: 'userProjectList',
            defaultValue: [],
            showToast: false
        }));
    };

    const deleteData = (id: string) => {
        if (confirm("Are you sure to delete? Data will be lost permanently!")) {
            dispatch(callApi({
                method: HttpHethod.DELETE,
                url: UrlHelper.authMS(`api/v1/user-project/${id}/delete`),
                params: params,
                storeName: 'userProjectDelete',
                defaultValue: null,
                showToast: true
            }));
        }
    };


    return (
        <>
            <UserPortalLayout>
                <TitleCard title="Project">
                    <Link href={router.pathname + '/add'}>
                        <ButtonGreenSm icon={faPlus}>Add Project</ButtonGreenSm>
                    </Link>
                </TitleCard>
                <DefaultCard>
                    <Datatable {...tableProps}
                               meta={userProjectList.meta}
                               onChangeLimit={(value: any) => setParams({...params, limit: value})}
                               onChangePage={(value: any) => setParams({...params, page: value})}
                               onChangeSearch={(value: any) => setParams({...params, search: value})}
                    >
                        {userProjectList?.data?.length > 0 && userProjectList.data.map((userProject: any, userProjectIndex: number) => (
                            <tr key={userProjectIndex}>
                                <td>{((params.page - 1) * params.limit) + userProjectIndex + 1}</td>
                                <td>{userProject.name}</td>
                                <td>{userProject.githubLink}</td>
                                <td>{userProject.previewLink}</td>
                                <td>{new Date(userProject.start).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</td>
                                <td>{new Date(userProject.end).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</td>
                                <td>
                                    <ActionButton
                                        key={`show${userProjectIndex}`}
                                        onShow={() => router.push(`${router.pathname}/${userProject._id}`)}
                                        onEdit={() => router.push(`${router.pathname}/${userProject._id}/edit`)}
                                        onDelete={() => deleteData(userProject._id)}
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

export default ProjectLIst