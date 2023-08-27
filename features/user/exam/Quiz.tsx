import React, {useEffect, useState} from 'react';
import {TitleCard} from "../../../components/cards";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store";
import {callApi} from "../../../slices/apiSlice";
import {HttpHethod} from "../../../constants";
import {UrlHelper} from "../../../helpers";
import {ButtonGreenSm} from "../../../components/buttons";
import {useRouter} from "next/router";

const Quiz = () => {
    const router = useRouter();
    const optionA = {
        optionAAns: true,
        optionBAns: false,
        optionCAns: false,
        optionDAns: false
    }
    const optionB = {
        optionAAns: false,
        optionBAns: true,
        optionCAns: false,
        optionDAns: false
    }
    const optionC = {
        optionAAns: false,
        optionBAns: false,
        optionCAns: true,
        optionDAns: false
    }
    const optionD = {
        optionAAns: false,
        optionBAns: false,
        optionCAns: false,
        optionDAns: true
    }
    const dispatch = useDispatch<AppDispatch>()
    const {quizQuestion = {data: []}, submitQuestion = {data: [], code: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    const [selectedOption, setSelectedOption] = useState([{}]);
    const [isMounted, setIsMounted] = useState(false);
    const endTime: any = new Date(quizQuestion?.data?.endAt).getTime();
    const startTime: any = new Date(quizQuestion?.data?.startAt).getTime();
    const [remainingTime, setRemainingTime] = useState(endTime - startTime);

    const handleOptionChange = (questionId: any, option: any) => {
        setSelectedOption([
            ...selectedOption,
            {
                questionId: questionId,
                optionAAns: option?.optionAAns,
                optionBAns: option?.optionBAns,
                optionCAns: option?.optionCAns,
                optionDAns: option?.optionDAns,

            },
        ]);
    };

    useEffect(() => {
        if (router?.query?.id !== undefined) {
            fetchData();
        }
        setIsMounted(true);
    }, [router?.query?.id]);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date().getTime();
            if (currentTime >= endTime) {
                clearInterval(interval);
                setRemainingTime(0);
            } else {
                setRemainingTime(endTime - currentTime);
            }
        }, 1000);

        return () => clearInterval(interval);

    }, [startTime, endTime, remainingTime]);

    const formatTime = (time: any) => {
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000).toString().padStart(2, '0');
        return `${isNaN(minutes) ? '00' : minutes}:${isNaN(parseInt(seconds)) ? '00' : seconds}`;
    };

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.quizMS(`api/v1/quiz-questions/${router?.query?.id}`),
            storeName: 'quizQuestion',
            defaultValue: [],
            showToast: false
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (confirm(`Are you sure to submit answer? Please check all answer is complete or not`)) {
            dispatch(callApi({
                method: HttpHethod.POST,
                url: UrlHelper.quizMS(`api/v1/quiz-submit`),
                storeName: 'submitQuestion',
                body: selectedOption,
                defaultValue: null,
                showToast: true
            }));
        }
    }

    useEffect(() => {
        if(submitQuestion?.code === 200) {
            router.push({pathname: "/portal/user/exam/result", query: {status: submitQuestion?.data?.status}});
        }
    }, [submitQuestion?.code]);

    console.log(submitQuestion)

    return (
        <div style={{ overflow: "none" }}>
            <div style={{ position: "sticky", top: "0", display: "block" }}>
                <TitleCard title="Quiz" >
                    <p>Remaining TIme: {formatTime(remainingTime)}</p>
                </TitleCard>
            </div>
            <>
                <form action="#" onSubmit={handleSubmit}>
                    <div>
                        {
                            quizQuestion?.data?.questions?.map((qus: any, index: number) => <div className="quiz-body"
                                                                                                 key={qus._id}>
                                <div className="qus">
                                    <p>{index + 1} {qus.question}</p>
                                </div>
                                <div className="ans-body">

                                    <div className="ans-card">
                                        <input
                                            name={qus._id}
                                            type="checkbox"
                                            onChange={(e) => handleOptionChange(qus.questionId, optionA)}
                                        />
                                        <label htmlFor={qus.optionA}>
                                            {qus.optionA}
                                        </label>
                                    </div>
                                    <div className="ans-card">

                                        <input
                                            name={qus._id}
                                            type="checkbox"
                                            onChange={(e) => handleOptionChange(qus.questionId, optionB)}
                                        />
                                        <label htmlFor={qus.optionB}>
                                            {qus.optionB}
                                        </label>
                                    </div>
                                    <div className="ans-card">

                                        <input
                                            name={qus._id}
                                            type="checkbox"
                                            onChange={(e) => handleOptionChange(qus.questionId, optionC)}
                                        />
                                        <label htmlFor={qus.optionC}>
                                            {qus.optionC}
                                        </label>
                                    </div>
                                    <div className="ans-card">
                                        <input
                                            name={qus._id}
                                            type="checkbox"
                                            onChange={(e) => handleOptionChange(qus.questionId, optionD)}
                                        />
                                        <label htmlFor={qus.optionD}>
                                            {qus.optionD}
                                        </label>
                                    </div>

                                </div>
                            </div>)

                        }

                    </div>
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                        <ButtonGreenSm>Submit</ButtonGreenSm>
                    </div>
                </form>
            </>
        </div>
    );
};

export default Quiz;
