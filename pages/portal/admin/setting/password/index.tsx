import React from 'react';
import {AdminPortalLayout} from "../../../../../layouts";
import PasswordEdit from "../../../../../features/settings/password/PasswordEdit";

const Index = () => {
    return (
        <div>
            <AdminPortalLayout>
                <PasswordEdit/>
            </AdminPortalLayout>
        </div>
    );
};

export default Index;
