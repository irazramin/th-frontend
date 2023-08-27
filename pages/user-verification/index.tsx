import {AuthLayout} from "../../layouts";
import UserVerificationComponent from "../../features/user-verification/UserVerification";

const ForgetPassword = () => {
    return (
        <>
            <AuthLayout>
                <UserVerificationComponent/>
            </AuthLayout>
        </>
    );
}

export default ForgetPassword
