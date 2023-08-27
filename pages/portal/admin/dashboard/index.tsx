import {AdminPortalLayout} from "../../../../layouts";
import {TitleCard} from "../../../../components/cards";
import DashboardCard from "../../../../components/cards/dashboard.card";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChartGantt, faCity, faLanguage, faLaptopCode, faList, faUsers} from '@fortawesome/free-solid-svg-icons'
import {useRouter} from "next/router";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../store";
import {callApi} from "../../../../slices/apiSlice";
import {HttpHethod} from "../../../../constants";
import {UrlHelper} from "../../../../helpers";

const Dashboard = () => {
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    const {adminDashboard = {data: [], meta: null},  isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    useEffect(() => {
        fetchData();
        setIsMounted(true);
    }, []);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.coreMS('api/v1/admin-dashboard'),
            storeName: 'adminDashboard',
            defaultValue: [],
            showToast: false
        }));
    };

    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Dashboard">
                </TitleCard>
                <div className='dashboard-cards row' style={{gap: ""}}>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12' style={{marginBottom: "25px"}}>
                        <DashboardCard>
                            <Link href='/portal/admin/user'>
                                <div className='wrapper'>
                                    <div className="icon-wrapper">
                                        <FontAwesomeIcon icon={faUsers} className='icon'/>
                                    </div>
                                    <div className='contents'>
                                        <span className='title'>Users</span>
                                        <h4 className='count'>{adminDashboard?.data?.user ?? 0}</h4>
                                    </div>
                                </div>
                            </Link>
                        </DashboardCard>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12' style={{marginBottom: "25px"}}>
                        <DashboardCard>
                            <Link href="/portal/admin/company">
                                <div className='wrapper'>
                                    <div className="icon-wrapper">
                                        <FontAwesomeIcon icon={faCity} className='icon'/>
                                    </div>
                                    <div className='contents'>
                                        <span className='title'>Company</span>
                                        <h4 className='count'>{adminDashboard?.data?.company}</h4>
                                    </div>
                                </div>
                            </Link>
                        </DashboardCard>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12' style={{marginBottom: "25px"}}>
                        <DashboardCard>
                            <Link href="/portal/admin/category">
                                <div className='wrapper'>
                                    <div className="icon-wrapper">
                                        <FontAwesomeIcon icon={faList} className='icon'/>
                                    </div>
                                    <div className='contents'>
                                        <span className='title'>Category</span>
                                        <h4 className='count'>{adminDashboard?.data?.category}</h4>
                                    </div>
                                </div>
                            </Link>
                        </DashboardCard>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12' style={{marginBottom: "25px"}}>
                        <DashboardCard>
                            <Link href="/portal/admin/subcategory">
                                <div className='wrapper'>
                                    <div className="icon-wrapper">
                                        <FontAwesomeIcon icon={faChartGantt} className='icon'/>
                                    </div>
                                    <div className='contents'>
                                        <span className='title'>Subcategory</span>
                                        <h4 className='count'>{adminDashboard?.data?.subcategory}</h4>
                                    </div>
                                </div>
                            </Link>
                        </DashboardCard>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12' style={{marginBottom: "25px"}}>
                        <DashboardCard>
                            <Link href="/portal/admin/skill">
                                <div className='wrapper'>
                                    <div className="icon-wrapper">
                                        <FontAwesomeIcon icon={faLaptopCode} className='icon'/>
                                    </div>
                                    <div className='contents'>
                                        <span className='title'>Skills</span>
                                        <h4 className='count'>{adminDashboard?.data?.skill}</h4>
                                    </div>
                                </div>
                            </Link>
                        </DashboardCard>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12' style={{marginBottom: "25px"}}>
                        <DashboardCard>
                            <Link href="/portal/admin/language">
                                <div className='wrapper'>
                                    <div className="icon-wrapper">
                                        <FontAwesomeIcon icon={faLanguage} className='icon'/>
                                    </div>
                                    <div className='contents'>
                                        <span className='title'>Language</span>
                                        <h4 className='count'>{adminDashboard?.data?.language}</h4>
                                    </div>
                                </div>
                            </Link>
                        </DashboardCard>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12' style={{marginBottom: "25px"}}>
                        <DashboardCard>
                            <Link href="/portal/admin/language">
                                <div className='wrapper'>
                                    <div className="icon-wrapper">
                                        <FontAwesomeIcon icon={faLanguage} className='icon'/>
                                    </div>
                                    <div className='contents'>
                                        <span className='title'>Question</span>
                                        <h4 className='count'>{adminDashboard?.data?.question}</h4>
                                    </div>
                                </div>
                            </Link>
                        </DashboardCard>
                    </div>
                </div>
            </AdminPortalLayout>
        </>
    );
}

export default Dashboard
