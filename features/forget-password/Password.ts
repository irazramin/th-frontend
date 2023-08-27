import * as yup from "yup";

interface IPassword {
    email: String;
    password: String;
    confirmPassword: String;
}

class Password {
    static rules: any = {
        password: yup
            .string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),

    }

    public static toJson(data: any) {
        return {
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword
        }
    }

    public static toFormData(data: any) {
        let formData: any = new FormData();
        formData.append("email", data.email ?? '');
        formData.append("password", data.password ?? '');
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
