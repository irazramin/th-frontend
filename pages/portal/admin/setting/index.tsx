import {AdminPortalLayout} from "../../../../layouts";

const Setting = () => {
    return (
        <>
            <AdminPortalLayout>
                <div className='breadcrumb-bar'>
                    <div className='title'>
                        <p>Setting</p>
                    </div>
                    <div className='breadcrumb'>
                        <p>dashboard / <span className='breadcrumb-active'>setting</span></p>
                    </div>
                </div>
            </AdminPortalLayout>
        </>
    );
}

export default Setting
