import * as yup from "yup";

interface IAccount {
    firstName: String;
    lastName: String;
    image: any;
    phone: String;
    email: String;
    username: String;
}

class Account {
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
            )
    }

    public static toJson(data: any) {
        return {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            username: data.username,
        }
    }

    public static toFormData(data: any) {
        let formData: any = new FormData();

        formData.append("firstName", data.firstName ?? '');
        formData.append("lastName", data.lastName ?? '');
        formData.append("email", data.email ?? '');
        formData.append("phone", data.phone ?? '');
        formData.append("username", data.username ?? '');
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
            ...this.rules
        });
    }
}

export {
    Account
};

export type {
    IAccount
};
