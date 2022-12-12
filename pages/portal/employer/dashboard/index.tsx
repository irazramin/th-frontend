import {AdminPortalLayout, EmployerPortalLayout} from "../../../../layouts";

const Dashboard = () => {
    return (
        <>
            <EmployerPortalLayout>
                <div className='breadcrumb-bar'>
                    <div className='title'>
                        <p>Dashboard</p>
                    </div>
                    <div className='breadcrumb'>
                        <p><span className='breadcrumb-active'>dashboard</span></p>
                    </div>
                </div>
            </EmployerPortalLayout>
        </>
    );
}

export default Dashboard
