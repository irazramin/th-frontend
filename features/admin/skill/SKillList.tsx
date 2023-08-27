import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store";
import React, {useEffect, useState} from "react";
import {HttpHethod} from "../../../constants";
import {callApi} from "../../../slices/apiSlice";
import {UrlHelper} from "../../../helpers";
import {DefaultCard, TitleCard} from "../../../components/cards";
import {AdminPortalLayout} from "../../../layouts";
import Link from "next/link";
import {ActionButton, ButtonGreenSm} from "../../../components/buttons";
import {Datatable} from "../../../components/tables";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const SKillList = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const tableProps = {
        name: 'skillList',
        headers: [
            {id: 1, name: 'ID', storable: false},
            {id: 2, name: 'SKILL NAME', storable: false},
        ],
        meta: null
    }

    const [params, setParams] = useState({page: 1, limit: 10, search: ""});

    const [isMounted, setIsMounted] = useState(false);

    const {skillList = {data: [], meta: null}, skillDelete = {time: null}, isLoading = false} = useSelector(
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
        if (isMounted && skillDelete.time != null) {
            fetchData();
        }
    }, [skillDelete.time]);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.coreMS('api/v1/skill/list'),
            params: params,
            storeName: 'skillList',
            defaultValue: [],
            showToast: false
        }));
    };

    const deleteData = (id: string) => {
        if (confirm("Are you sure to delete? Data will be lost permanently!")) {
            dispatch(callApi({
                method: HttpHethod.DELETE,
                url: UrlHelper.coreMS(`api/v1/skill/${id}/delete`),
                params: params,
                storeName: 'skillDelete',
                defaultValue: null,
                showToast: true
            }));
        }
    };

    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Skill">
                    <Link href={router.pathname + '/add'}>
                        <ButtonGreenSm icon={faPlus}>Add Skill</ButtonGreenSm>
                    </Link>
                </TitleCard>
                <DefaultCard>
                    <Datatable {...tableProps}
                               meta={skillList.meta}
                               onChangeLimit={(value: any) => setParams({...params, limit: value})}
                               onChangePage={(value: any) => setParams({...params, page: value})}
                               onChangeSearch={(value: any) => setParams({...params, search: value})}
                    >
                        {skillList?.data?.length > 0 && skillList.data.map((skill: any, skillIndex: number) => (
                            <tr key={skillIndex}>
                                <td>{((params.page - 1) * params.limit) + skillIndex + 1}</td>
                                <td>{skill.name}</td>
                                <td>
                                    <ActionButton
                                        key={`show${skillIndex}`}
                                        onShow={() => router.push(`skill/${skill._id}`)}
                                        onEdit={() => router.push(`skill/${skill._id}/edit`)}
                                        onDelete={() => deleteData(skill._id)}
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

export default SKillList