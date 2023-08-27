import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {faArrowLeft, faEye} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {AppDispatch, RootState} from "../../../store";
import {callApi} from "../../../slices/apiSlice";
import {HttpHethod} from "../../../constants";
import {UrlHelper} from "../../../helpers";
import {EmployerPortalLayout} from "../../../layouts";
import {DefaultCard, TitleCard} from "../../../components/cards";
import {ButtonGreenSm} from "../../../components/buttons";
import Link from "next/link";

const Application = () => {
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter();

    const {id} = router.query;

    const {
        jobApplications = {data: {}},
        jobApplicationApprove = {time: null},
        jobApplicationReject = {time: null},
        isLoading = false
    } = useSelector(
        (state: RootState) => state.callApi
    );

    const applied = jobApplications?.data?.applications?.filter((application: any) => application?.applicationStatus == 1);
    const shortlist = jobApplications?.data?.applications?.filter((application: any) => application?.applicationStatus == 2);
    const interview = jobApplications?.data?.applications?.filter((application: any) => application?.applicationStatus == 3);
    const selected = jobApplications?.data?.applications?.filter((application: any) => application?.applicationStatus == 4);

    useEffect(() => {
        if (jobApplicationApprove.time || jobApplicationReject.time) {
            fetchData();
        }
    }, [jobApplicationApprove.time, jobApplicationReject.time]);

    useEffect(() => {
        if (id) {
            fetchData();
        }
    }, [router?.query?.id]);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.jobMS(`api/v1/job/${id}/application`),
            params: '',
            storeName: 'jobApplications',
            defaultValue: [],
            showToast: false
        }));
    };

    const approveCandidate = (id: any, applicationStatus: any, status: String, e: any) => {
        e.preventDefault();

        const data = {applicationStatus};

        if (confirm(`Are you sure ${status} this candidate?`)) {
            dispatch(callApi({
                method: HttpHethod.PUT,
                url: UrlHelper.jobMS(`api/v1/job/${id}/application-approve`),
                params: '',
                body: data,
                storeName: 'jobApplicationApprove',
                defaultValue: [],
                showToast: false
            }));
        }
    }

    const rejectCandidate = (id: any, e: any) => {
        e.preventDefault();

        if (confirm(`Are you sure reject this candidate?`)) {
            dispatch(callApi({
                method: HttpHethod.PUT,
                url: UrlHelper.jobMS(`api/v1/job/${id}/application-reject`),
                params: '',
                storeName: 'jobApplicationReject',
                defaultValue: [],
                showToast: false
            }));
        }
    }

    return (
        <>
            <EmployerPortalLayout>
                <TitleCard title="Java Developer">
                    <div style={{display: "flex", gap: "10px"}}>
                        <ButtonGreenSm onClick={() => router.push(`/portal/employer/job/${router?.query?.id}/details`)}
                                       icon={faEye}>
                            Details
                        </ButtonGreenSm>
                        <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>
                            Back
                        </ButtonGreenSm>
                    </div>
                </TitleCard>
                <>
                    <DefaultCard>
                        <div className="jobs-application">
                            <section className="applied-candidate">
                                <div className="candidate-board">
                                    <div className="board-section new-candidate">
                                        <div className="candidate-board-type">
                                            <i className="bx bx-message-alt-add icon"></i>
                                            <span>Applied</span>
                                        </div>
                                        <div className="candidates">
                                            {applied?.map((application: any) =>
                                                <>
                                                    <Link href={`/portal/employer/applicant/${application?.user?._id}`}
                                                          className="candidate card" passHref>
                                                        <div className="candidate-details">
                                                            <img
                                                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                                                alt=""
                                                                className="candidate-img"
                                                            />
                                                            <div className="candidate-name-des">
                                                                <h4 className="name">{application?.user.firstName} {application?.user?.lastName}</h4>
                                                                <span
                                                                    className="designation">{application?.user?.email}</span>
                                                            </div>
                                                            <div className='candidate-action'>
                                                                <button
                                                                    onClick={(e: any) => approveCandidate(application._id, application.applicationStatus, 'shortlisted', e)}
                                                                    style={{
                                                                        backgroundColor: 'forestgreen',
                                                                        color: "white"
                                                                    }}>✔
                                                                </button>
                                                                <button
                                                                    onClick={(e: any) => rejectCandidate(application._id, e)}
                                                                    style={{
                                                                        backgroundColor: 'indianred',
                                                                        color: "white"
                                                                    }}>✖
                                                                </button>
                                                            </div>

                                                        </div>

                                                    </Link>
                                                </>)
                                            }
                                        </div>
                                    </div>
                                    <div className="board-section new-candidate">
                                        <div className="candidate-board-type">
                                            <i className="bx bx-message-alt-add icon"></i>
                                            <span>Shortlist</span>
                                        </div>
                                        <div className="candidates">
                                            {shortlist?.map((application: any) =>
                                                <>
                                                    <Link href={`/portal/employer/applicant/${application?.user?._id}`}
                                                          className="candidate card" passHref>
                                                        <div className="candidate-details">
                                                            <img
                                                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                                                alt=""
                                                                className="candidate-img"
                                                            />
                                                            <div className="candidate-name-des">
                                                                <h4 className="name">{application?.user.firstName} {application?.user?.lastName}</h4>
                                                                <span
                                                                    className="designation">{application?.user?.email}</span>
                                                            </div>
                                                            <div className='candidate-action'>
                                                                <button
                                                                    onClick={(e: any) => approveCandidate(application._id, application.applicationStatus, "Interview", e)}
                                                                    style={{
                                                                        backgroundColor: 'forestgreen',
                                                                        color: "white"
                                                                    }}>✔
                                                                </button>
                                                                <button
                                                                    onClick={(e: any) => rejectCandidate(application._id, e)}
                                                                    style={{
                                                                        backgroundColor: 'indianred',
                                                                        color: "white"
                                                                    }}>✖
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </Link>
                                                </>)}
                                        </div>
                                    </div>
                                    <div className="board-section new-candidate">
                                        <div className="candidate-board-type">
                                            <i className="bx bx-message-alt-add icon"></i>
                                            <span>Interview</span>
                                        </div>
                                        <div className="candidates">
                                            {interview?.map((application: any) => <>
                                                <Link href={`/portal/employer/applicant/${application?.user?._id}`}
                                                      className="candidate card" passHref>
                                                    <div className="candidate-details">
                                                        <img
                                                            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                                            alt=""
                                                            className="candidate-img"
                                                        />
                                                        <div className="candidate-name-des">
                                                            <h4 className="name">{application?.user.firstName} {application?.user?.lastName}</h4>
                                                            <span
                                                                className="designation">{application?.user?.email}</span>
                                                        </div>
                                                        <div className='candidate-action'>
                                                            <button
                                                                onClick={(e: any) => approveCandidate(application._id, application.applicationStatus, "Select", e)}
                                                                style={{
                                                                    backgroundColor: 'forestgreen',
                                                                    color: "white"
                                                                }}>✔
                                                            </button>
                                                            <button
                                                                onClick={(e: any) => rejectCandidate(application._id, e)}
                                                                style={{
                                                                    backgroundColor: 'indianred',
                                                                    color: "white"
                                                                }}>✖
                                                            </button>
                                                        </div>
                                                    </div>

                                                </Link>
                                            </>)}
                                        </div>
                                    </div>
                                    <div className="board-section new-candidate">
                                        <div className="candidate-board-type">
                                            <i className="bx bx-message-alt-add icon"></i>
                                            <span>Selected</span>
                                        </div>
                                        <div className="candidates">
                                            {selected?.map((application: any) => <>
                                                <Link href={`/portal/employer/applicant/${application?.user?._id}`}
                                                      className="candidate card">
                                                    <div className="candidate-details" style={{marginTop: "10px"}}>
                                                        <img
                                                            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                                            alt=""
                                                            className="candidate-img"
                                                        />
                                                        <div className="candidate-name-des">
                                                            <h4 className="name">{application?.user.firstName} {application?.user?.lastName}</h4>
                                                            <span
                                                                className="designation">{application?.user?.email}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </>)}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </DefaultCard>
                </>
            </EmployerPortalLayout>
        </>
    );
}

export default Application;
