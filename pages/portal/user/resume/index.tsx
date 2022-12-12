import {AdminPortalLayout, UserPortalLayout} from "../../../../layouts";

const Resume = () => {
    return (
        <>
            <UserPortalLayout>
                <div className='breadcrumb-bar'>
                    <div className='title'>
                        <p>Resume</p>
                    </div>
                    <div className='breadcrumb'>
                        <p>dashboard / <span className='breadcrumb-active'>resume</span></p>
                    </div>
                </div>
            </UserPortalLayout>
        </>
    );
}

export default Resume
