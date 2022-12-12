import {AdminPortalLayout, EmployerPortalLayout} from "../../../../layouts";

const Dashboard = () => {
    return (
        <EmployerPortalLayout>
            <div className='breadcrumb-bar'>
                <div className='title'>
                    <p>Message</p>
                </div>
                <div className='breadcrumb'>
                    <p>dashboard / <span className='breadcrumb-active'>message</span></p>
                </div>
            </div>
        </EmployerPortalLayout>
    );
}

export default Dashboard