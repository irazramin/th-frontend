import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faBriefcase, faClock, faLocationDot, faMoneyCheckDollar} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {AppDispatch, RootState} from '../../store';
import {HttpHethod} from '../../constants';
import {UrlHelper} from '../../helpers';
import {callApi} from '../../slices/apiSlice';
import {DefaultCard, TitleCard} from '../../components/cards';
import {ButtonGreenSm} from '../../components/buttons';
import Cookies from "js-cookie";

const JobDetailsComponent = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    let authUser: any = Cookies.get('auth_user');

    if (authUser) {
        authUser = JSON.parse(authUser);
    }

    const {job = {data: null}, isLoading = false, companyName = {data: null},  user = {data: [], meta: null}} = useSelector(
        (state: RootState) => state.callApi
    );

    useEffect(() => {
        let id = router?.query?.id ?? '';

        if (id.length) {
            dispatch(callApi({
                method: HttpHethod.GET,
                url: UrlHelper.jobMS('api/v1/job/' + id),
                storeName: 'job',
                defaultValue: null
            }));
        }
    }, [router?.query?.id]);


    const applyJob = (id: any) => {
        if (confirm("Are you sure to apply?")) {
            dispatch(
                callApi({
                    method: HttpHethod.POST,
                    url: UrlHelper.jobMS("api/v1/job/apply"),
                    storeName: "jobApply",
                    body: {jobId: id, applicationStatus: 1},
                    defaultValue: null,
                    showToast: true,
                })
            );
        }
    }

    useEffect(() => {
        if (job?.data?.company) {
            dispatch(callApi({
                method: HttpHethod.GET,
                url: UrlHelper.coreMS(`api/v1/company/${job?.data?.company}`),
                storeName: 'companyName',
                defaultValue: null
            }));
        }
    }, [job?.data?.company, router?.query?.id]);

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
            <>
                <TitleCard title="Job Details">
                    <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>
                        Back
                    </ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <div className='job-details-section'>
                        <div className="details-header">
                            <div className="details-contents">
                                <div className='company-logo'>
                                    <img
                                        src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                                        alt=""/>
                                </div>
                                <div className="company-details">
                                    <h3 className='job-title'>{job?.data?.name ?? 'N/A'}</h3>
                                    <h4 className='company-name'>{companyName?.data?.name ?? 'N/A'}</h4>
                                </div>
                            </div>

                            <div className="job-others-info">
                                <div className="info-cards">
                                    <div className="info-card ">
                                        <h4 className="title">Vacancy</h4>
                                        <h2 className="content">{job?.data?.vacancy ?? 'N/A'}</h2>
                                    </div>
                                    <div className="info-card ">
                                        <h4 className="title">Salary</h4>
                                        <h2 className="content">{`$${job?.data?.salaryFrom} - $${job?.data?.salaryTo}`}</h2>
                                    </div>
                                    <div className="info-card ">
                                        <h4 className="title">Min.Exp</h4>
                                        <h2 className="content">{job?.data?.minimumExperience ?? 'N/A'}</h2>
                                    </div>
                                    <div className="info-card ">
                                        <h4 className="title">Job Type</h4>
                                        <h2 className="content">{job?.data?.jobType ?? 'N/A'}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="details-body">
                            <div>
                                <div className="job-description">
                                    <h4>Job Skills</h4>
                                    <p>{job?.data?.skills ?? 'N/A'}</p>
                                </div>
                                <div className="job-description">
                                    <h4>Job Description</h4>
                                    <p>{job?.data?.description ?? 'N/A'}</p>
                                </div>
                                <div className="job-description">
                                    <h4>Additional Requirements</h4>
                                    <p>{job?.data?.additionalRequirements ?? 'N/A'}</p>
                                </div>
                                <div className="job-description">
                                    <h4>Benefits</h4>
                                    <p>{job?.data?.benefits ?? 'N/A'}</p>
                                </div>
                            </div>
                            <div className="apply-now">
                                {!user?.data?.isPassed &&
                                  <div className="card" style={{padding: "8px ", margin: "10px 0"}}>
                                    <p style={{color: "red", fontSize: "10px", fontWeight: "600"}}>❌ You can not apply
                                      right now. Please complete your exam first.</p>
                                  </div>}
                                <button style={{ width: "100%" }} className='btn-green-sm' onClick={() => applyJob(job?.data?._id)}
                                        disabled={!user?.data?.isPassed}>Apply now
                                </button>
                                <div className="job-summary">
                                    <div className="job-summary-header">
                                        <p>Job summary</p>
                                    </div>
                                    <div className="job-summary-body">
                                        <ul>
                                            <li>
                                                <FontAwesomeIcon icon={faLocationDot}/>
                                                <div>
                                                    <p>Location</p>
                                                    <span>Dhaka, Bangladesh</span>
                                                </div>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faBriefcase}/>
                                                <div>
                                                    <p>Job Type</p>
                                                    <span>{job?.data?.jobType}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faMoneyCheckDollar}/>
                                                <div>
                                                    <p>Salary</p>
                                                    <span>{`$${job?.data?.salaryFrom} - $${job?.data?.salaryTo}`}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faClock}/>
                                                <div>
                                                    <p>Job Posted</p>
                                                    <span>{new Date(job?.data?.publishDate).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    }) ?? 'N/A'}</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="similar-jobs">*/}
                        {/*    <div className="title"><p>Similar jobs</p></div>*/}
                        {/*    <div className="jobs">*/}
                        {/*        <div className="job card">*/}
                        {/*            <img*/}
                        {/*                src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"*/}
                        {/*                alt="" className="company-logo"/>*/}
                        {/*            <h3 className="job-title">UI/UX Designer</h3>*/}
                        {/*            <p className="job-descriptions">*/}
                        {/*                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima hic*/}
                        {/*                labore nam adipisci iste amet, suscipit molestiae voluptates fuga.*/}
                        {/*            </p>*/}
                        {/*            <div className="job-details">*/}
                        {/*                <span className="chip job-timing">Fulltime</span>*/}
                        {/*                <span className="chip job-location-type">Onsite</span>*/}
                        {/*                <span className="chip job-position">Entry Level</span>*/}
                        {/*            </div>*/}
                        {/*            <div className="job-post-action-btn">*/}
                        {/*                <button className="btn apply-btn"><Link href=''>Apply now</Link></button>*/}
                        {/*                <button className="btn message-btn"><Link href=''>Details </Link></button>*/}

                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="job card">*/}
                        {/*            <img*/}
                        {/*                src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"*/}
                        {/*                alt="" className="company-logo"/>*/}
                        {/*            <h3 className="job-title">UI/UX Designer</h3>*/}
                        {/*            <p className="job-descriptions">*/}
                        {/*                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima hic*/}
                        {/*                labore nam adipisci iste amet, suscipit molestiae voluptates fuga.*/}
                        {/*            </p>*/}
                        {/*            <div className="job-details">*/}
                        {/*                <span className="chip job-timing">Fulltime</span>*/}
                        {/*                <span className="chip job-location-type">Onsite</span>*/}
                        {/*                <span className="chip job-position">Entry Level</span>*/}
                        {/*            </div>*/}
                        {/*            <div className="job-post-action-btn">*/}
                        {/*                <button className="btn apply-btn">Apply now</button>*/}
                        {/*                <button className="btn message-btn">Details</button>*/}

                        {/*            </div>*/}
                        {/*        </div>*/}

                        {/*        <div className="job card">*/}
                        {/*            <img*/}
                        {/*                src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"*/}
                        {/*                alt="" className="company-logo"/>*/}
                        {/*            <h3 className="job-title">UI/UX Designer</h3>*/}
                        {/*            <p className="job-descriptions">*/}
                        {/*                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima hic*/}
                        {/*                labore nam adipisci iste amet, suscipit molestiae voluptates fuga.*/}
                        {/*            </p>*/}
                        {/*            <div className="job-details">*/}
                        {/*                <span className="chip job-timing">Fulltime</span>*/}
                        {/*                <span className="chip job-location-type">Onsite</span>*/}
                        {/*                <span className="chip job-position">Entry Level</span>*/}
                        {/*            </div>*/}
                        {/*            <div className="job-post-action-btn">*/}
                        {/*                <button className="btn apply-btn">Apply now</button>*/}
                        {/*                <button className="btn message-btn">Details</button>*/}

                        {/*            </div>*/}
                        {/*        </div>*/}


                        {/*    </div>*/}

                        {/*</div>*/}
                    </div>
                </DefaultCard>
            </>
        </>
    );
}

export default JobDetailsComponent
