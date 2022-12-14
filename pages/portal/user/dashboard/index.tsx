import {AdminPortalLayout, UserPortalLayout} from "../../../../layouts";

const Dashboard = () => {
    return (
        <>
            <UserPortalLayout>
                <div className='title-bar-page'>
                    <div className='title'>
                        <p>Dashboard</p>
                    </div>
                    <div className='action-btn'>
                        <p><span className='action-btn-active'>dashboard</span></p>
                    </div>
                </div>
            </UserPortalLayout>
        </>
    );
}

export default Dashboard
