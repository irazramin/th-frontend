import React from 'react';
import PasswordEdit from "../../../../../../features/settings/password/PasswordEdit";
import {UserPortalLayout} from "../../../../../../layouts";

const index = () => {
    return (
        <div>
            <UserPortalLayout>
                <PasswordEdit/>
            </UserPortalLayout>
        </div>
    );
};

export default index;
