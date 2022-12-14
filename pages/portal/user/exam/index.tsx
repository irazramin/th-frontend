import {EmployerPortalLayout, UserPortalLayout} from "../../../../layouts";

const Exam = () => {
    return (
        <>
            <UserPortalLayout>
                <div className='title-bar-page'>
                    <div className='title'>
                        <p>Exam</p>
                    </div>
                    <div className='action-btn'>
                        <p>dashboard / <span className='action-btn-active'>exam</span></p>
                    </div>
                </div>
            </UserPortalLayout>
        </>
    );
}

export default Exam
