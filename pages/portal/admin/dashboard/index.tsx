import {AdminPortalLayout} from "../../../../layouts";
import {TitleCard} from "../../../../components/cards";
import DashboardCard from "../../../../components/cards/dashboard.card";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChartGantt, faCity, faLanguage, faLaptopCode, faList, faUsers} from '@fortawesome/free-solid-svg-icons'
import {useRouter} from "next/router";
import Link from "next/link";

const Dashboard = () => {
    const router = useRouter();
    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Dashboard">
                </TitleCard>
                <div className='dashboard-cards'>
                    <DashboardCard>
                        <Link href='/portal/admin/user'>
                            <div className='wrapper'>
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faUsers} className='icon'/>
                                </div>
                                <div className='contents'>
                                    <span className='title'>Users</span>
                                    <h4 className='count'>200</h4>
                                </div>
                            </div>
                        </Link>
                    </DashboardCard>
                    <DashboardCard>
                        <Link href="/portal/admin/company">
                            <div className='wrapper'>
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faCity} className='icon'/>
                                </div>
                                <div className='contents'>
                                    <span className='title'>Company</span>
                                    <h4 className='count'>10</h4>
                                </div>
                            </div>
                        </Link>
                    </DashboardCard>
                    <DashboardCard>
                        <Link href="/portal/admin/category">
                            <div className='wrapper'>
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faList} className='icon'/>
                                </div>
                                <div className='contents'>
                                    <span className='title'>Category</span>
                                    <h4 className='count'>10</h4>
                                </div>
                            </div>
                        </Link>
                    </DashboardCard>
                    <DashboardCard>
                        <Link href="/portal/admin/subcategory">
                            <div className='wrapper'>
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faChartGantt} className='icon'/>
                                </div>
                                <div className='contents'>
                                    <span className='title'>Subcategory</span>
                                    <h4 className='count'>17</h4>
                                </div>
                            </div>
                        </Link>
                    </DashboardCard>
                    <DashboardCard>
                        <Link href="/portal/admin/skill">
                            <div className='wrapper'>
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faLaptopCode} className='icon'/>
                                </div>
                                <div className='contents'>
                                    <span className='title'>Skills</span>
                                    <h4 className='count'>20</h4>
                                </div>
                            </div>
                        </Link>
                    </DashboardCard>
                    <DashboardCard>
                        <Link href="/portal/admin/language">
                            <div className='wrapper'>
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faLanguage} className='icon'/>
                                </div>
                                <div className='contents'>
                                    <span className='title'>Language</span>
                                    <h4 className='count'>2</h4>
                                </div>
                            </div>
                        </Link>
                    </DashboardCard>
                </div>
            </AdminPortalLayout>
        </>
    );
}

export default Dashboard
