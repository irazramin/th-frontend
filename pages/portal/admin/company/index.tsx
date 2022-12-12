import {AdminPortalLayout} from "../../../../layouts";

const Company = () => {
    return (
        <>
            <AdminPortalLayout>
                <div className='breadcrumb-bar'>
                    <div className='title'>
                        <p>Company</p>
                    </div>
                    <div className='breadcrumb'>
                        <p>dashboard / <span className='breadcrumb-active'>company</span></p>
                    </div>
                </div>
            </AdminPortalLayout>
        </>
    );
}

export default Company
