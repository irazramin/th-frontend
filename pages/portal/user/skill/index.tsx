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

const Question = () => {
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
        ]
    }


    const [params, setParams] = useState({page: 1, limit: 10, search: ""});

    const [isMounted, setIsMounted] = useState(false);

    const {userSkillList = {data: [], meta: null}, userSkillDelete = {time: null}, isLoading = false} = useSelector(
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
        if (isMounted && userSkillDelete.time != null) {
            fetchData();
        }
    }, [userSkillDelete.time]);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.authMS('api/v1/user-skill/list'),
            params: params,
            storeName: 'userSkillList',
            defaultValue: [],
            showToast: false
        }));
    };

    const deleteData = (id: string) => {
        if (confirm("Are you sure to delete? Data will be lost permanently!")) {
            dispatch(callApi({
                method: HttpHethod.DELETE,
                url: UrlHelper.authMS(`api/v1/user-skill/${id}/delete`),
                params: params,
                storeName: 'userSkillDelete',
                defaultValue: null,
                showToast: true
            }));
        }
    };


    return (
        <>
            <UserPortalLayout>
                <TitleCard title="Question">
                    <Link href={router.pathname + '/add'}>
                        <ButtonGreenSm icon={faPlus}>Add Question</ButtonGreenSm>
                    </Link>
                </TitleCard>
                <DefaultCard>
                    <Datatable {...tableProps}
                               meta={userSkillList.meta}
                               onChangeLimit={(value: any) => setParams({...params, limit: value})}
                               onChangePage={(value: any) => setParams({...params, page: value})}
                               onChangeSearch={(value: any) => setParams({...params, search: value})}
                    >
                        {userSkillList?.data?.length > 0 && userSkillList.data.map((userSkill: any, userSkillIndex: number) => (
                            <tr key={userSkillIndex}>
                                <td>{((params.page - 1) * params.limit) + userSkillIndex + 1}</td>
                                <td>{userSkill.skill}</td>
                                <td>{userSkill.proficiency}</td>
                                <td>
                                    <ActionButton
                                        key={`show${userSkillIndex}`}
                                        onShow={() => router.push(`${router.pathname}/${userSkill._id}`)}
                                        onEdit={() => router.push(`${router.pathname}/${userSkill._id}/edit`)}
                                        onDelete={() => deleteData(userSkill._id)}
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

export default Skill
