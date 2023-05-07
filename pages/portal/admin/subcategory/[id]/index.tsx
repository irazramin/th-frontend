import {AdminPortalLayout} from "../../../../../layouts";
import {ButtonGreenSm,} from "../../../../../components/buttons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../../components/cards";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../../store";
import {callApi} from "../../../../../slices/apiSlice";
import {HttpHethod} from "../../../../../constants";
import {UrlHelper} from "../../../../../helpers";

const Add = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    const {subcategory = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    useEffect(() => {
        let id = router?.query?.id ?? '';
        if (id.length) {
            dispatch(callApi({
                method: HttpHethod.GET,
                url: UrlHelper.coreMS('api/v1/subcategory/' + id),
                storeName: 'subcategory',
                defaultValue: null
            }));
        }
    }, [router.query.id]);

    return (
        <>
            <AdminPortalLayout>
                <TitleCard title={subcategory?.data?.name}>
                    <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>
                        Back
                    </ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <div className="row">
                        <div className="col-md-8 offset-2">
                            <div className="datatable-wrapper">
                                <table className="datatable">
                                    <tbody>
                                    <tr className="datatable-row">
                                        <td><b>Name</b></td>
                                        <td>{subcategory?.data?.name ?? 'N/A'}</td>
                                    </tr>
                                    <tr className="datatable-row">
                                        <td><b>Category</b></td>
                                        <td>{subcategory?.data?.category ?? 'N/A'}</td>
                                    </tr>
                                    <tr className="datatable-row">
                                        <td><b>Image</b></td>
                                        <td>{subcategory?.data?.image ?? 'N/A'}</td>
                                    </tr>
                                    <tr className="datatable-row">
                                        <td><b>Description</b></td>
                                        <td>{subcategory?.data?.description ?? 'N/A'}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </DefaultCard>
            </AdminPortalLayout>
        </>
    );
};

export default Add;
