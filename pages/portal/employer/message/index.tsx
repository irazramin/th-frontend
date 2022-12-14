import {AdminPortalLayout, EmployerPortalLayout} from "../../../../layouts";

const Dashboard = () => {
    return (
        <EmployerPortalLayout>
            <div className='title-bar-page'>
                <div className='title'>
                    <p>Message</p>
                </div>
                <div className='action-btn'>
                    <p>dashboard / <span className='action-btn-active'>message</span></p>
                </div>
            </div>
        </EmployerPortalLayout>
    );
}

export default Dashboard
