import {EmployerPortalLayout, UserPortalLayout} from "../../../../layouts";

const Job = () => {
    return (
        <>
            <UserPortalLayout>
                <div className='breadcrumb-bar'>
                    <div className='title'>
                        <p>Job</p>
                    </div>
                    <div className='breadcrumb'>
                        <p>dashboard / <span className='breadcrumb-active'>job</span></p>
                    </div>
                </div>
            </UserPortalLayout>
        </>
    );
}

export default Job
