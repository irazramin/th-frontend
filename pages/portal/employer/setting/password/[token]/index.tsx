import React from 'react';
import PasswordEdit from "../../../../../../features/settings/password/PasswordEdit";
import {EmployerPortalLayout} from "../../../../../../layouts";

const index = () => {
    return (
        <div>
            <EmployerPortalLayout>
                <PasswordEdit/>
            </EmployerPortalLayout>
        </div>
    );
};

export default index;
