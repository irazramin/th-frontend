import {AdminPortalLayout} from "../../../../layouts";
import Link from "next/link";
import {ActionButton, ButtonGreenSm} from "../../../../components/buttons";
import {faEye, faPen, faPlus, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../components/cards";
import {Datatable} from "../../../../components/tables";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../store";
import React, {useEffect, useState} from "react";
import {callApi} from "../../../../features/apiSlice";
import {HttpHethod} from "../../../../constants";
import {UrlHelper} from "../../../../helpers";

const Subcategory = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    const tableProps = {
        name: 'userList',
        headers: [
            {id: 1, name: 'ID', storable: false},
            {id: 2, name: 'SUBCATEGORY', storable: false},
            {id: 3, name: 'CATEGORY', storable: false}
        ],
        enableCheckbox: true,
        enableAction: true
    }

    const [params, setParams] = useState({page: 1, limit: 10, search: ""});

    const [isMounted, setIsMounted] = useState(false);

    const {subcategoryList = {data: [], meta: null}, subcategoryDelete = {time: null}, isLoading = false} = useSelector(
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
        if (isMounted && subcategoryDelete.time != null) {
            fetchData();
        }
    }, [subcategoryDelete.time]);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.coreMS('api/v1/subcategory/list'),
            params: params,
            storeName: 'subcategoryList',
            defaultValue: [],
            showToast: false
        }));
    };

    const deleteData = (id: string) => {
        if (confirm("Are you sure to delete? Data will be lost permanently!")) {
            dispatch(callApi({
                method: HttpHethod.DELETE,
                url: UrlHelper.coreMS(`api/v1/subcategory/${id}/delete`),
                params: params,
                storeName: 'subcategoryDelete',
                defaultValue: null,
                showToast: true
            }));
        }
    };

    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Subcategory">
                    <Link href={router.pathname + '/add'}>
                        <ButtonGreenSm icon={faPlus}>Add Subcategory</ButtonGreenSm>
                    </Link>
                </TitleCard>
                <DefaultCard>
                    <Datatable {...tableProps}
                               meta={subcategoryList.meta}
                               onChangeLimit={(value: any) => setParams({...params, limit: value})}
                               onChangePage={(value: any) => setParams({...params, page: value})}
                               onChangeSearch={(value: any) => setParams({...params, search: value})}
                    >
                        {subcategoryList?.data?.length > 0 && subcategoryList.data.map((subcategory: any, subcategoryIndex: number) => (
                            <tr key={subcategoryIndex}>
                                <td>{((params.page - 1) * params.limit) + subcategoryIndex + 1}</td>
                                <td>{subcategory.name}</td>
                                <td>{subcategory.category}</td>
                                <td>
                                    <ActionButton
                                        key={`show${subcategoryIndex}`}
                                        onShow={() => router.push(`subcategory/${subcategory._id}`)}
                                        onEdit={() => router.push(`subcategory/${subcategory._id}/edit`)}
                                        onDelete={() => deleteData(subcategory._id)}
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

export default Subcategory
