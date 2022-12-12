import {AdminPortalLayout, EmployerPortalLayout} from "../../../../layouts";

const Setting = () => {
    return (
        <>
            <EmployerPortalLayout>
                <div className='breadcrumb-bar'>
                    <div className='title'>
                        <p>Setting</p>
                    </div>
                    <div className='breadcrumb'>
                        <p>dashboard / <span className='breadcrumb-active'>setting</span></p>
                    </div>
                </div>
            </EmployerPortalLayout>
        </>
    );
}

export default Setting
