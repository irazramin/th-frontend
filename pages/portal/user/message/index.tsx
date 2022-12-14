import {EmployerPortalLayout, UserPortalLayout} from "../../../../layouts";

const Dashboard = () => {
    return (
        <>
            <UserPortalLayout>
                <div className='title-bar-page'>
                    <div className='title'>
                        <p>Message</p>
                    </div>
                    <div className='action-btn'>
                        <p>dashboard / <span className='action-btn-active'>message</span></p>
                    </div>
                </div>
            </UserPortalLayout>
        </>
    );
}

export default Dashboard
