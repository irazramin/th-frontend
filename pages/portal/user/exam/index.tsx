import {EmployerPortalLayout, UserPortalLayout} from "../../../../layouts";

const Exam = () => {
    return (
        <>
            <UserPortalLayout>
                <div className='breadcrumb-bar'>
                    <div className='title'>
                        <p>Exam</p>
                    </div>
                    <div className='breadcrumb'>
                        <p>dashboard / <span className='breadcrumb-active'>exam</span></p>
                    </div>
                </div>
            </UserPortalLayout>
        </>
    );
}

export default Exam
