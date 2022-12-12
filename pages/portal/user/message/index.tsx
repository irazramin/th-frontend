import {EmployerPortalLayout, UserPortalLayout} from "../../../../layouts";

const Dashboard = () => {
    return (
        <>
            <UserPortalLayout>
                <div className='breadcrumb-bar'>
                    <div className='title'>
                        <p>Message</p>
                    </div>
                    <div className='breadcrumb'>
                        <p>dashboard / <span className='breadcrumb-active'>message</span></p>
                    </div>
                </div>
            </UserPortalLayout>
        </>
    );
}

export default Dashboard
