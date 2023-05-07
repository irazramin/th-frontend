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

    const {userSkill = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    useEffect(() => {
        let id = router?.query?.id ?? '';
        if (id.length) {
            dispatch(callApi({
                method: HttpHethod.GET,
                url: UrlHelper.authMS('api/v1/user-skill/' + id),
                storeName: 'userSkill',
                defaultValue: null
            }));
        }
    }, [router.query.id]);

    return (
        <>
            <UserPortalLayout>
                <TitleCard title={userSkill?.data?.name}>
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
                                        <td><b>Skill</b></td>
                                        <td>{userSkill?.data?.skill ?? 'N/A'}</td>
                                    </tr>
                                    <tr className="datatable-row">
                                        <td><b>Proficiency</b></td>
                                        <td>{userSkill?.data?.proficiency ?? 'N/A'}</td>
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
