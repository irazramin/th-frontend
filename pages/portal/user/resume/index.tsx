import {AdminPortalLayout, UserPortalLayout} from "../../../../layouts";

const Resume = () => {
    return (
        <>
            <UserPortalLayout>
                <div className='title-bar-page'>
                    <div className='title'>
                        <p>Resume</p>
                    </div>
                    <div className='action-btn'>
                        <p>dashboard / <span className='action-btn-active'>resume</span></p>
                    </div>
                </div>
            </UserPortalLayout>
        </>
    );
}

export default Resume
