import {AdminPortalLayout, UserPortalLayout} from "../../../../layouts";

const Dashboard = () => {
    return (
        <>
            <UserPortalLayout>
                <div className='breadcrumb-bar'>
                    <div className='title'>
                        <p>Dashboard</p>
                    </div>
                    <div className='breadcrumb'>
                        <p><span className='breadcrumb-active'>dashboard</span></p>
                    </div>
                </div>
            </UserPortalLayout>
        </>
    );
}

export default Dashboard
