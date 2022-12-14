import {AdminPortalLayout, EmployerPortalLayout} from "../../../../layouts";

const Setting = () => {
    return (
        <>
            <EmployerPortalLayout>
                <div className='title-bar-page'>
                    <div className='title'>
                        <p>Setting</p>
                    </div>
                    <div className='action-btn'>
                        <p>dashboard / <span className='action-btn-active'>setting</span></p>
                    </div>
                </div>
            </EmployerPortalLayout>
        </>
    );
}

export default Setting
