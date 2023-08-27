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

const CategoryList = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const tableProps = {
        id: "categoryList",
        store: "categoryList",
        headers: [
            {id: 1, name: "ID", storable: false},
            {id: 2, name: "NAME", storable: false},
            {id: 3, name: "IMAGE", storable: false},
        ],
        meta: null
    };

    const [params, setParams] = useState({page: 1, limit: 10, search: ""});

    const [isMounted, setIsMounted] = useState(false);

    const {categoryList = {data: [], meta: null}, categoryDelete = {time: null}, isLoading = false} = useSelector(
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
        if (isMounted && categoryDelete?.time != null) {
            fetchData();
        }
    }, [categoryDelete?.time]);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.coreMS('api/v1/category/list'),
            params: params,
            storeName: 'categoryList',
            defaultValue: [],
            showToast: false
        }));
    };

    const deleteData = (id: string) => {
        if (confirm("Are you sure to delete? Data will be lost permanently!")) {
            dispatch(callApi({
                method: HttpHethod.DELETE,
                url: UrlHelper.coreMS(`api/v1/category/${id}/delete`),
                params: params,
                storeName: 'categoryDelete',
                defaultValue: null,
                showToast: true
            }));
        }
    };

    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Category List">
                    <Link href={router.pathname + '/add'}>
                        <ButtonGreenSm icon={faPlus}>Add Category</ButtonGreenSm>
                    </Link>
                </TitleCard>
                <DefaultCard>
                    <Datatable {...tableProps}
                               meta={categoryList.meta}
                               onChangeLimit={(value: any) => setParams({...params, limit: value})}
                               onChangePage={(value: any) => setParams({...params, page: value})}
                               onChangeSearch={(value: any) => setParams({...params, search: value})}
                    >
                        {categoryList?.data?.length > 0 && categoryList.data.map((category: any, categoryIndex: number) => (
                            <tr key={categoryIndex}>
                                <td>{((params.page - 1) * params.limit) + categoryIndex + 1}</td>
                                <td>{category.name}</td>
                                <td>{category.image}</td>
                                <td>
                                    <ActionButton
                                        key={`show${categoryIndex}`}
                                        onShow={() => router.push(`category/${category._id}`)}
                                        onEdit={() => router.push(`category/${category._id}/edit`)}
                                        onDelete={() => deleteData(category._id)}
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

export default CategoryList