import {EmployerPortalLayout, UserPortalLayout} from "../../../../layouts";

const Job = () => {
    return (
        <>
            <UserPortalLayout>
                <div className='title-bar-page'>
                    <div className='title'>
                        <p>Job</p>
                    </div>
                    <div className='action-btn'>
                        <p>dashboard / <span className='action-btn-active'>job</span></p>
                    </div>
                </div>
            </UserPortalLayout>
        </>
    );
}

export default Job
