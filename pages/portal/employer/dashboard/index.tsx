import {AdminPortalLayout, EmployerPortalLayout} from "../../../../layouts";

const Dashboard = () => {
    return (
        <>
            <EmployerPortalLayout>
                <div className='title-bar-page'>
                    <div className='title'>
                        <p>Dashboard</p>
                    </div>
                    <div className='action-btn'>
                        <p><span className='action-btn-active'>dashboard</span></p>
                    </div>
                </div>
            </EmployerPortalLayout>
        </>
    );
}

export default Dashboard
