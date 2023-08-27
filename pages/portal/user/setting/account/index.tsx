import React from 'react';
import {UserPortalLayout} from "../../../../../layouts";
import AccountEdit from "../../../../../features/settings/account/AccountEdit";

const Index = () => {
    return (
        <div>
            <UserPortalLayout>
                <AccountEdit/>
            </UserPortalLayout>
        </div>
    );
};

export default Index;
