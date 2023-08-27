import React from 'react';
import {UserPortalLayout} from "../../../../../layouts";
import ResetPasswordComponent from "../../../../../features/settings/password/ResetPasswordComponent";

const Index = () => {
    return (
        <div>
            <UserPortalLayout>
                <ResetPasswordComponent/>
            </UserPortalLayout>
        </div>
    );
};

export default Index;
