import React from 'react';
import {AdminPortalLayout} from "../../../../../layouts";
import AccountEdit from "../../../../../features/settings/account/AccountEdit";

const Index = () => {
    return (
        <div>
            <AdminPortalLayout>
                <AccountEdit/>
            </AdminPortalLayout>
        </div>
    );
};

export default Index;
