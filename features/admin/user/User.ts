import * as yup from "yup";

enum UserTypeEnum {
    admin = "1",
    employer = "2",
    user = "3",
}

interface IUser {
    firstName: String;
    lastName: String;
    image: any;
    phone: String;
    email: String;
    username: String;
    password: String;
    confirmPassword: String;
    userType: UserTypeEnum;
}

class User {

    static rules: any = {
        firstName: yup.string().required("First Name is required"),
        lastName: yup.string().required("Last Name is required"),
        username: yup.string().required("Username is required"),
        email: yup
            .string()
            .email("Invalid email")
            .required("Email is required"),
        phone: yup
            .string()
            .matches(/^[0-9]{11}$/, "Phone number must be 11 digits")
            .required("Phone number is required"),
        image: yup
            .mixed()
            .test(
                "fileType",
                "Image is required. Only jpeg, jpg and png files are supported.",
                (value) => {
                    if (!value.length) {
                        return true;
                    }

                    return ["image/jpeg", "image/jpg", "image/png"].includes(
                        value[0]?.type ?? ""
                    );
                }
            ),
        password: yup
            .string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
        userType: yup.string().required("User type is required")
    }

    public static toJson(data: any) {
        return {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            username: data.username,
            password: data.password,
            confirmPassword: data.confirmPassword,
            userType: data.userType
        }
    }

    public static toFormData(data: any) {
        let formData: any = new FormData();
        formData.append("firstName", data.firstName ?? '');
        formData.append("lastName", data.lastName ?? '');
        formData.append("email", data.email ?? '');
        formData.append("phone", data.phone ?? '');
        formData.append("username", data.username ?? '');
        formData.append("password", data.password ?? '');
        formData.append("confirmPassword", data.confirmPassword ?? '');
        formData.append("userType", data.userType ?? '');
        formData.append("image", data.image[0] ?? '');
        return formData;
    }

    public static createValidation() {
        return yup.object().shape({
            ...this.rules
        })
    }

    public static updateValidation(editMode = true) {
        return yup.object().shape({
            ...this.rules,
            password: yup.lazy((value) =>
                yup.string().when('$isCreateMode', {
                    is: true,
                    then: yup.string()
                        .required('Password is required')
                        .min(6, 'Password must be at least 6 characters'),
                    otherwise: value && value.length > 0
                        ? yup.string()
                            .min(6, 'Password must be at least 6 characters')
                            .nullable()
                        : yup.string().nullable(),
                })
            ),
            confirmPassword: yup
                .string()
                .when('password', {
                    is: (value: any) => value && value.length > 0,
                    then: yup
                        .string()
                        .required('Confirm password is required')
                        .oneOf([yup.ref('password')], 'Passwords must match'),
                    otherwise: yup.string().nullable(),
                }),
        });
    }
}

export {
    User
};

export type {
    IUser
};
