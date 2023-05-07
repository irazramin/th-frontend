import {AdminPortalLayout, UserPortalLayout} from "../../../../../layouts";
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

    const {userEducation = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    useEffect(() => {
        let id = router?.query?.id ?? '';
        if (id.length) {
            dispatch(callApi({
                method: HttpHethod.GET,
                url: UrlHelper.authMS('api/v1/user-education/' + id),
                storeName: 'userEducation',
                defaultValue: null
            }));
        }
    }, [router.query.id]);

    return (
        <>
            <UserPortalLayout>
                <TitleCard title={userEducation?.data?.name}>
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
                                        <td><b>Institute</b></td>
                                        <td>{userEducation?.data?.institute ?? 'N/A'}</td>
                                    </tr>
                                    <tr className="datatable-row">
                                        <td><b>Address</b></td>
                                        <td>{userEducation?.data?.address ?? 'N/A'}</td>
                                    </tr>
                                    <tr className="datatable-row">
                                        <td><b>Website</b></td>
                                        <td>{userEducation?.data?.website ?? 'N/A'}</td>
                                    </tr>
                                    <tr className="datatable-row">
                                        <td><b>Course</b></td>
                                        <td>{userEducation?.data?.course ?? 'N/A'}</td>
                                    </tr>
                                    <tr className="datatable-row">
                                        <td><b>Degree</b></td>
                                        <td>{userEducation?.data?.degree ?? 'N/A'}</td>
                                    </tr>
                                    <tr className="datatable-row">
                                        <td><b>Start</b></td>
                                        <td>{userEducation?.data?.start ?? 'N/A'}</td>
                                    </tr>
                                    <tr className="datatable-row">
                                        <td><b>End</b></td>
                                        <td>{userEducation?.data?.end ?? 'N/A'}</td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </DefaultCard>
            </UserPortalLayout>
        </>
    );
};

export default Add;
