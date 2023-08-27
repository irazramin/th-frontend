import * as yup from "yup";


interface IReference {
    firstName: String,
    lastName: String,
    designation: String,
    organization: String,
    email: String,
    phone: String
}

class Reference {
    static rules: any = {
        firstName: yup.string().required("First Name is required"),
        lastName: yup.string().required("Last Name is required"),
        designation: yup.string().required("Designation is required"),
        organization: yup
            .string()
            .required("Organization is required"),
        email: yup
            .string()
            .required("email is required"),
        phone: yup
            .string()
            .required("Phone number is required")
    }

    public static toJson(data: any) {
        return {
            firstName: data.firstName,
            lastName: data.lastName,
            designation: data.designation,
            organization: data.organization,
            email: data.email,
            phone: data.phone
        }
    }

    public static toFormData(data: any) {
        let formData: any = new FormData();
        formData.append("firstName", data.firstName ?? '');
        formData.append("lastName", data.lastName ?? '');
        formData.append("designation", data.designation ?? '');
        formData.append("phone", data.phone ?? '');
        formData.append("organization", data.organization ?? '');
        formData.append("email", data.email ?? '');
        formData.append("phone", data.phone ?? '');
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
    Reference
};

export type {
    IReference
};
