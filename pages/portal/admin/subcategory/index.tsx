import {AdminPortalLayout} from "../../../../layouts";

const Subcategory = () => {
    return (
        <>
            <AdminPortalLayout>
                <div className='breadcrumb-bar'>
                    <div className='title'>
                        <p>Subcategory</p>
                    </div>
                    <div className='breadcrumb'>
                        <p>dashboard / <span className='breadcrumb-active'>subcategory</span></p>
                    </div>
                </div>
            </AdminPortalLayout>
        </>
    );
}

export default Subcategory
