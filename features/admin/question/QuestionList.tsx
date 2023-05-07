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

const QuestionList = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const tableProps = {
        name: 'questionList',
        headers: [
            {id: 1, name: 'ID', storable: false},
            {id: 2, name: 'QUESTION', storable: false},
            {id: 3, name: 'OPTION_A', storable: false},
            {id: 4, name: 'OPTION_B', storable: false},
            {id: 5, name: 'OPTION_C', storable: false},
            {id: 6, name: 'OPTION_D', storable: false}
        ],
       meta: null
    }

    const [params, setParams] = useState({page: 1, limit: 10, search: ""});

    const [isMounted, setIsMounted] = useState(false);

    const {questionList = {data: [], meta: null}, questionDelete = {time: null}, isLoading = false} = useSelector(
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
        if (isMounted && questionDelete.time != null) {
            fetchData();
        }
    }, [questionDelete?.time]);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.quizMS('api/v1/question/list'),
            params: params,
            storeName: 'questionList',
            defaultValue: [],
            showToast: false
        }));
    };

    const deleteData = (id: string) => {
        if (confirm("Are you sure to delete? Data will be lost permanently!")) {
            dispatch(callApi({
                method: HttpHethod.DELETE,
                url: UrlHelper.quizMS(`api/v1/question/${id}/delete`),
                params: params,
                storeName: 'questionDelete',
                defaultValue: null,
                showToast: true
            }));
        }
    };

    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Question">
                    <Link href={router.pathname + '/add'}>
                        <ButtonGreenSm icon={faPlus}>Add Question</ButtonGreenSm>
                    </Link>
                </TitleCard>
                <DefaultCard>
                    <Datatable {...tableProps}
                               meta={questionList.meta}
                               onChangeLimit={(value: any) => setParams({...params, limit: value})}
                               onChangePage={(value: any) => setParams({...params, page: value})}
                               onChangeSearch={(value: any) => setParams({...params, search: value})}
                    >
                        {questionList?.data?.length > 0 && questionList.data.map((question: any, questionIndex: number) => (
                            <tr key={questionIndex}>
                                <td>{((params.page - 1) * params.limit) + questionIndex + 1}</td>
                                <td>{question.name}</td>
                                <td>{question.optionA}</td>
                                <td>{question.optionB}</td>
                                <td>{question.optionC}</td>
                                <td>{question.optionD}</td>
                                <td>
                                    <ActionButton
                                        key={`show${questionIndex}`}
                                        onShow={() => router.push(`question/${question._id}`)}
                                        onEdit={() => router.push(`question/${question._id}/edit`)}
                                        onDelete={() => deleteData(question._id)}
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

export default QuestionList