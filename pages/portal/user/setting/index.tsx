import {AdminPortalLayout, UserPortalLayout} from "../../../../layouts";

const Setting = () => {
    return (
        <>
            <UserPortalLayout>
                <div className='breadcrumb-bar'>
                    <div className='title'>
                        <p>Setting</p>
                    </div>
                    <div className='breadcrumb'>
                        <p>dashboard / <span className='breadcrumb-active'>setting</span></p>
                    </div>
                </div>
            </UserPortalLayout>
        </>
    );
}

export default Setting
