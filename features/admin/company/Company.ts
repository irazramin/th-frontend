import * as yup from "yup";
interface ICompany{
    name: String;
    email: String;
    phone: String;
    website: String;
    description: String;
    image: any;
    address: String;
}
class Company {
    static rules: any = {
        name: yup.string().required('Name is required'),
        email: yup.string().required('Email is required'),
        phone: yup.string().required('Phone is required'),
        website: yup.string().required('Website is required'),
        about: yup.string().required('Website is required'),
        address: yup.string().required('Address is required'),
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
    }

    public static toJson(data: any) {
        return {
            name: data.name,
            about: data.about,
            phone: data.phone,
            website: data.website,
            address: data.address,
            email: data.email,
        }
    }

    public static toFormData(data: any) {
        let formData: any = new FormData();
        formData.append("name", data.name ?? '');
        formData.append("about", data.about ?? '');
        formData.append("email", data.email ?? '');
        formData.append("phone", data.phone ?? '');
        formData.append("website", data.website ?? '');
        formData.append("address", data.address ?? '');
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
    Company
};

export type {
    ICompany
};
