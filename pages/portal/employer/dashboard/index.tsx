import {EmployerPortalLayout} from "../../../../layouts";
import {TitleCard} from "../../../../components/cards";
import DashboardCard from "../../../../components/cards/dashboard.card";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faFileCircleQuestion, faFilePen} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
    return (
        <>
            <EmployerPortalLayout>
                <TitleCard title='Dashboard'>
                </TitleCard>
                <div className='dashboard-cards'>
                    <DashboardCard >
                        <Link href='/portal/admin/user' >
                            <div className='wrapper'>
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faBriefcase}  className='icon'/>
                                </div>
                                <div className='contents'>
                                    <span className='title'>Jobs</span>
                                    <h4 className='count'>05</h4>
                                </div>
                            </div>
                        </Link>
                    </DashboardCard>
                    <DashboardCard>
                        <Link href="/portal/admin/company" >
                            <div className='wrapper'>
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faFilePen}  className='icon'/>
                                </div>
                                <div className='contents'>
                                    <span className='title'>Exams</span>
                                    <h4 className='count'>10</h4>
                                </div>
                            </div>
                        </Link>
                    </DashboardCard>
                    <DashboardCard>
                        <Link href="/portal/admin/category" >
                            <div className='wrapper'>
                                <div className="icon-wrapper">
                                    <FontAwesomeIcon icon={faFileCircleQuestion}  className='icon'/>
                                </div>
                                <div className='contents'>
                                    <span className='title'>Questions</span>
                                    <h4 className='count'>10</h4>
                                </div>
                            </div>
                        </Link>
                    </DashboardCard>
                </div>
            </EmployerPortalLayout>
        </>
    );
}

export default Dashboard
