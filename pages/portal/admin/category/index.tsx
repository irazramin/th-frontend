import {AdminPortalLayout} from "../../../../layouts";

const Category = () => {
    return (
        <>
            <AdminPortalLayout>
                <div className='breadcrumb-bar'>
                    <div className='title'>
                        <p>Category</p>
                    </div>
                    <div className='breadcrumb'>
                        <p>dashboard / <span className='breadcrumb-active'>category</span></p>
                    </div>
                </div>
            </AdminPortalLayout>
        </>
    );
}

export default Category
