import {EmployerPortalLayout} from "../../../../layouts";
import {TitleCard} from "../../../../components/cards";
import DashboardCard from "../../../../components/cards/dashboard.card";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faFilePen} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../store";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {callApi} from "../../../../slices/apiSlice";
import {HttpHethod} from "../../../../constants";
import {UrlHelper} from "../../../../helpers";

const Dashboard = () => {
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    const {employerDashboard = {data: [], meta: null},  isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    useEffect(() => {
        fetchData();
        setIsMounted(true);
    }, []);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.jobMS('api/v1/employer-dashboard'),
            storeName: 'employerDashboard',
            defaultValue: [],
            showToast: false
        }));
    };

    return (
        <>
            <EmployerPortalLayout>
                <TitleCard title='Dashboard'>
                </TitleCard>
                <div className='dashboard-cards row'>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12' style={{marginBottom: "25px"}}>

                        <DashboardCard>
                            <Link href='/portal/employer/job'>
                                <div className='wrapper'>
                                    <div className="icon-wrapper">
                                        <FontAwesomeIcon icon={faBriefcase} className='icon'/>
                                    </div>
                                    <div className='contents'>
                                        <span className='title'>Jobs</span>
                                        <h4 className='count'>{employerDashboard?.data?.job}</h4>
                                    </div>
                                </div>
                            </Link>
                        </DashboardCard>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12' style={{marginBottom: "25px"}}>
                        <DashboardCard>
                            <Link href="/portal/employer/job">
                                <div className='wrapper'>
                                    <div className="icon-wrapper">
                                        <FontAwesomeIcon icon={faFilePen} className='icon'/>
                                    </div>
                                    <div className='contents'>
                                        <span className='title'>Applications</span>
                                        <h4 className='count'>{employerDashboard?.data?.application}</h4>
                                    </div>
                                </div>
                            </Link>
                        </DashboardCard>
                    </div>


                </div>
            </EmployerPortalLayout>
        </>
    );
}

export default Dashboard
