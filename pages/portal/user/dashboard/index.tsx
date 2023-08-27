import {UserPortalLayout} from "../../../../layouts";
import {DefaultCard, TitleCard} from "../../../../components/cards";
import React, {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";
import {callApi} from "../../../../slices/apiSlice";
import {HttpHethod} from "../../../../constants";
import {UrlHelper} from "../../../../helpers";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../store";


const Dashboard = () => {
    const dispatch = useDispatch<AppDispatch>()
    let authUser: any = Cookies.get('auth_user');

    if (authUser) {
        authUser = JSON.parse(authUser);
    }

    const {
        user = {data: [], meta: null},
        isLoading = false
    } = useSelector(
        (state: RootState) => state.callApi
    );

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setShowPopup(true);
    }, []);

    useEffect(() => {
        if (showPopup && !user?.data?.isPassed) {
            toast.error('Please complete your exam. If you are not pass you can not able to apply for jobs', {
                position: "top-center",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }, [showPopup]);

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
    return (
        <>
            <UserPortalLayout>
                <TitleCard title='Dashboard'>
                </TitleCard>
                <DefaultCard>
                    <ToastContainer
                        position="top-right"
                        autoClose={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        theme="colored"/>
                </DefaultCard>
            </UserPortalLayout>
        </>
    );
}

export default Dashboard
