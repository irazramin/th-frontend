import React, {useEffect, useState} from 'react';
import {UserPortalLayout} from "../../../../../layouts";
import {DefaultCard, TitleCard} from "../../../../../components/cards";
import {useRouter} from "next/router";
import {callApi} from "../../../../../slices/apiSlice";
import {HttpHethod} from "../../../../../constants";
import {UrlHelper} from "../../../../../helpers";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../../store";

const Result = () => {
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter();
    const [status, setStatus] = useState(false)
    const {
        user = {data: [], meta: null},
        isLoading = false
    } = useSelector(
        (state: RootState) => state.callApi
    );


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.authMS('api/v1/auth/user'),
            storeName: 'user',
            defaultValue: [],
            showToast: false
        }));
    };

    console.log(status)
    return (
        <div>
            <UserPortalLayout>
                <TitleCard title='Result'>
                    <h5 style={{textTransform: "uppercase"}}>Quiz
                        Status: {user?.data?.isPassed && 'PASSED'} {!user?.data?.isPassed  && 'FAILED'}</h5>
                </TitleCard>
                <DefaultCard>
                    {user?.data?.isPassed  && (
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            marginTop: "50px"
                        }}>
                            <h3>Congratulations!</h3>
                            <img style={{width: "100px", margin: "20px 0"}} src="/images/approved.png" alt=""/>
                            <h6 style={{fontSize: "16px"}}>You have passed this quiz test.</h6>
                            <button style={{marginTop: "30px"}} className='btn-green-sm'
                                    onClick={() => router.push('/portal/user/dashboard')}>Back to dashboard
                            </button>
                        </div>
                    )}

                    {!user?.data?.isPassed  && (
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            marginTop: "50px"
                        }}>
                            <h3>Sorry!</h3>
                            <img style={{width: "100px", margin: "20px 0"}} src="/images/remove.png" alt=""/>
                            <h6 style={{fontSize: "16px"}}>You did not pass this quiz test. Please try again later.</h6>
                            <button style={{marginTop: "30px"}} className='btn-green-sm'
                                    onClick={() => router.push('/portal/user/dashboard')}>Back to dashboard
                            </button>
                        </div>
                    )}
                </DefaultCard>
            </UserPortalLayout>
        </div>
    );
};

export default Result;

