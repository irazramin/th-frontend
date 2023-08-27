import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store";
import React, {useEffect, useState} from "react";
import {HttpHethod} from "../../../constants";
import {callApi} from "../../../slices/apiSlice";
import {UrlHelper} from "../../../helpers";
import {DefaultCard, TitleCard} from "../../../components/cards";
import {UserPortalLayout} from "../../../layouts";
import {ButtonGreenSm} from "../../../components/buttons";
import {Datatable} from "../../../components/tables";
import Cookies from "js-cookie";

const ExamList = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    let authUser: any = Cookies.get('auth_user');

    if (authUser) {
        authUser = JSON.parse(authUser);
    }

    const tableProps = {
        name: 'userExamList',
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
                name: 'DURATION', storable: false
            },
            {
                id: 4,
                name: 'MARK', storable: false
            },
            {
                id: 5,
                name: 'AVAILABLE AFTER', storable: false
            },
            {
                id: 6,
                name: 'PASSED STATUS', storable: false
            },
            {
                id: 7,
                name: 'PASS REQUIRED', storable: false
            }
        ]
    }

    const [params, setParams] = useState({page: 1, limit: 10, search: ""});

    const [isMounted, setIsMounted] = useState(false);

    const {
        userExamList = {data: [], meta: null},
        userQuizStart = {data: null, code: null},
        userExamDelete = {time: null},
        isLoading = false
    } = useSelector(
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
        if (isMounted && userExamDelete.time != null) {
            fetchData();
        }
    }, [userExamDelete.time]);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.quizMS('api/v1/user-exam/list'),
            params: params,
            storeName: 'userExamList',
            defaultValue: [],
            showToast: false
        }));
    };

    const handleStartExam = () => {
        const body = {userId: authUser?._id}
        dispatch(callApi({
            method: HttpHethod.PUT,
            url: UrlHelper.quizMS('api/v1/quiz-start'),
            storeName: 'userQuizStart',
            defaultValue: [],
            showToast: true
        }));

        dispatch(callApi({
            method: HttpHethod.POST,
            url: UrlHelper.quizMS('api/v1/quiz-request'),
            storeName: 'userQuizRequest',
            body: body,
            defaultValue: [],
            showToast: false
        }));

        // router.push(`/portal/user/exam/quiz-question/${userQuizStart?.data?._id}`)
    }

    useEffect(() => {
        if (userQuizStart?.code === 200) {
            router.push(`/portal/user/exam/quiz-question/${userQuizStart.data._id}`)
        }
    }, [userQuizStart?.code]);

    return (
        <>
            <UserPortalLayout>
                <TitleCard title="Exam"/>
                <DefaultCard>
                    <Datatable {...tableProps}
                               meta={userExamList.meta}
                               onChangeLimit={(value: any) => setParams({...params, limit: value})}
                               onChangePage={(value: any) => setParams({...params, page: value})}
                               onChangeSearch={(value: any) => setParams({...params, search: value})}
                    >
                        {userExamList?.data?.length > 0 && userExamList.data.map((userExam: any, userExamIndex: number) => (
                            <tr key={userExamIndex}>
                                <td>{((params.page - 1) * params.limit) + userExamIndex + 1}</td>
                                <td>Assessment</td>
                                <td>{userExam.totalMark} min</td>
                                <td>{userExam.duration}</td>
                                <td>{ userExam?.status? "Already Passed" : new Date(userExam?.availableAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</td>
                                <td>{userExam?.status ? 'Passed' : 'Failed'}</td>
                                <td>80%</td>

                                <td>
                                    <button className='btn-green-sm' onClick={handleStartExam} >Start Exam</button>
                                </td>
                            </tr>
                        ))}
                    </Datatable>
                </DefaultCard>
            </UserPortalLayout>
        </>
    );
}

export default ExamList