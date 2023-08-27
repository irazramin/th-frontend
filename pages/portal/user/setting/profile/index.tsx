import React from 'react';
import {UserPortalLayout} from "../../../../../layouts";
import ProfileEdit from "../../../../../features/settings/profile/ProfileEdit";

const Index = () => {
    return (
        <div>
            <UserPortalLayout>
                <ProfileEdit/>
            </UserPortalLayout>
        </div>
    );
};

export default Index;
