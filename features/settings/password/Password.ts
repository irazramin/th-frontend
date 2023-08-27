import * as yup from "yup";

interface IPassword {
    oldPassword: String;
    newPassword: String;
    phone: String;
}

class Password {
    static rules: any = {
        oldPassword: yup
            .string()
            .required("Old Password is required"),
        newPassword: yup
            .string()
            .required("New Password is required")
            .min(6, "Password must be at least 6 characters"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("newPassword"), null], "Passwords must match")
            .required("Confirm Password is required"),

    }

    public static toJson(data: any) {
        return {
            oldPassword: data.oldPassword,
            newPassword: data.newPassword,
            confirmPassword: data.confirmPassword
        }
    }

    public static toFormData(data: any) {
        let formData: any = new FormData();
        formData.append("oldPassword", data.oldPassword ?? '');
        formData.append("newPassword", data.newPassword ?? '');
        formData.append("confirmPassword", data.confirmPassword ?? '');
        return formData;
    }

    public static createValidation() {
        return yup.object().shape({
            ...this.rules
        })
    }

    public static updateValidation(editMode = true) {
        return yup.object().shape({
            ...this.rules
        });
    }
}

export {
    Password
};

export type {
    IPassword
};
