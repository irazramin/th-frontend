import {AdminPortalLayout} from "../../../../layouts";

const Dashboard = () => {
    return (
        <>
            <AdminPortalLayout>
                <div className='breadcrumb-bar'>
                    <div className='title'>
                        <p>Dashboard</p>
                    </div>
                    <div className='breadcrumb'>
                        <p><span className='breadcrumb-active'>dashboard</span></p>
                    </div>
                </div>
            </AdminPortalLayout>
        </>
    );
}

export default Dashboard
