import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store";
import {callApi} from "../../../slices/apiSlice";
import {HttpHethod} from "../../../constants";
import {UrlHelper} from "../../../helpers";
import {UserPortalLayout} from "../../../layouts";
import {TitleCard} from "../../../components/cards";
import ReactPaginate from "react-paginate";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";

const Job = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    let authUser: any = Cookies.get('auth_user');

    if (authUser) {
        authUser = JSON.parse(authUser);
    }

    console.log(authUser)

    const [params, setParams] = useState({
        page: 1,
        limit: 10,
        search: "",
        category: "",
        jobType: '',
        jobLocationType: ''
    });

    const [isMounted, setIsMounted] = useState(false);

    const {
        jobList = {data: [], meta: null},
        jobDelete = {time: null},
        categoryJob = {data: null},
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
    }, [params.limit, params.page, params.search, params.category, params.jobType, params.jobLocationType]);

    useEffect(() => {
        if (isMounted && jobDelete.time != null) {
            fetchData();
        }
    }, [jobDelete?.time]);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.jobMS('api/v1/job/list'),
            params: params,
            storeName: 'jobList',
            defaultValue: [],
            showToast: false
        }));
    };

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
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.coreMS('api/v1/category'),
            storeName: 'categoryJob',
            defaultValue: null
        }));
    }, []);

    const categorySearch = (e: any) => {
        setParams({...params, category: e.target.value})
    }

    return (
        <>
            <UserPortalLayout>
                <TitleCard title="Job">
                    <div className='job-search'>
                        <div style={{display: "flex", gap: "10px"}}>
                            <div className="table-tools">
                                <div className="show-dropdown">
                                    <select
                                        name="show"
                                        onChange={(e: any) => categorySearch(e)}
                                    >
                                        <option value=''>Select Category</option>
                                        {categoryJob?.data?.map((category: any) => <option key={category._id}
                                                                                           value={category._id}>{category.name}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="table-tools">
                                <div className="show-dropdown">
                                    <select
                                        name="show"
                                        onChange={(e: any) => setParams({...params, jobType: e.target.value})}
                                    >
                                        <option value=''>Job Type</option>
                                        <option value="Full-time">Full-time</option>
                                        <option value="Part-time">Part-time</option>
                                        <option value="Internship">Internship</option>

                                    </select>
                                </div>
                            </div>
                            <div className="table-tools">
                                <div className="show-dropdown">
                                    <select
                                        name="show"
                                        onChange={(e: any) => setParams({...params, jobLocationType: e.target.value})}
                                    >
                                        <option value=''>Job Location</option>
                                        <option value="On-site">On-site</option>
                                        <option value="Remote">Remote</option>
                                        <option value="Hybrid">Hybrid</option>

                                    </select>
                                </div>
                            </div>
                            <div className="datatable-search">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Search data"
                                        onKeyUp={(e: any) => {
                                            if (e.key == "Enter") {
                                                setParams({...params, search: e.target.value});
                                            }
                                        }}
                                    />
                                    <i className="bx bx-search icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </TitleCard>
                <div className=''>
                    <div className="all-jobs">
                        <section className="job-post-section jobs">
                            <div className="row">
                                {jobList?.data?.map((job: any) => <>
                                    <div className="col-md-6 col-sm-6 col-12 col-xl-3 job-col" key={job._id}>
                                        <div className="job job-card">
                                            <img
                                                src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                                                alt="" className="company-logo"/>
                                            <h3 className="job-title">{job?.name}</h3>
                                            <p className="job-descriptions">
                                                {job?.description?.length < 100 ? job?.description : job?.description.slice(0, 100)}
                                            </p>
                                            <div className="job-details">
                                                <span className="chip job-timing">{job?.jobType}</span>
                                                <span className="chip job-location-type">{job?.jobLocationType}</span>
                                                <span className="chip job-position">{job.minimumExperience}</span>
                                            </div>
                                            <div className="job-post-action-btn">
                                                <button className="btn apply-btn" onClick={() => applyJob(job?._id)}
                                                        disabled={!authUser?.isPassed}>Apply now
                                                </button>
                                                <button className="btn message-btn"
                                                        onClick={() => router.push(`job/${job?._id}`)}>Details
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </>)}
                            </div>
                        </section>
                    </div>
                    <div className="col-md-12 col-sm-12 pagination" style={{margin: "auto"}}>
                        <ReactPaginate
                            nextLabel={<FontAwesomeIcon icon={faChevronRight}/>}
                            onPageChange={(e) => setParams({...params, page: e.selected + 1})}
                            pageRangeDisplayed={0}
                            pageCount={jobList.meta?.pages ?? 0}
                            previousLabel={<FontAwesomeIcon icon={faChevronLeft}/>}
                            renderOnZeroPageCount={() => null}
                            breakLabel={""}
                            initialPage={0}
                        />
                    </div>
                </div>
            </UserPortalLayout>
        </>
    );
}

export default Job
