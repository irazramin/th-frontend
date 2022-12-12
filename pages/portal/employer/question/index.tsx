import {AdminPortalLayout, EmployerPortalLayout} from "../../../../layouts";

const Dashboard = () => {
    return (
        <EmployerPortalLayout>
            <div className='breadcrumb-bar'>
                <div className='title'>
                    <p>Question</p>
                </div>
                <div className='breadcrumb'>
                    <p>dashboard / <span className='breadcrumb-active'>question</span></p>
                </div>
            </div>
        </EmployerPortalLayout>
    );
}

export default Dashboard
