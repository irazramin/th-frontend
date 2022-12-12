import {AdminPortalLayout} from "../../../../layouts";

const User = () => {
    return (
        <>
            <AdminPortalLayout>
                <div className='breadcrumb-bar'>
                    <div className='title'>
                        <p>User</p>
                    </div>
                    <div className='breadcrumb'>
                        <p>dashboard / <span className='breadcrumb-active'>user</span></p>
                    </div>
                </div>
            </AdminPortalLayout>
        </>
    );
}

export default User
