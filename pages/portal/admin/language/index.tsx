import {AdminPortalLayout} from "../../../../layouts";

const Language = () => {
    return (
        <>
            <AdminPortalLayout>
                <div className='breadcrumb-bar'>
                    <div className='title'>
                        <p>Language</p>
                    </div>
                    <div className='breadcrumb'>
                        <p>dashboard / <span className='breadcrumb-active'>language</span></p>
                    </div>
                </div>
            </AdminPortalLayout>
        </>
    );
}

export default Language
