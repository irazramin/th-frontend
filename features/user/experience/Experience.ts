import * as yup from "yup";


interface IExperience {
    organization: String,
    address: String,
    website: String,
    designation: String,
    responsibilities: String,
    start: String,
    end: String,
}

class Experience {
    static rules: any = {
        organization: yup.string().required('Organisation is required'),
        address: yup.string().required("Address is required"),
        website: yup.string().required("Website is required"),
        designation: yup
            .string()
            .required("Designation is required"),
        responsibilities: yup
            .string()
            .required("Responsibilities number is required"),
        start: yup
            .string()
            .required("Start number is required"),
        end: yup
            .string()
            .required("End number is required"),
    }

    public static toJson(data: any) {
        return {
            organization: data.organization,
            address: data.address,
            website: data.website,
            designation: data.designation,
            responsibilities: data.responsibilities,
            start: data.start,
            end: data.end
        }
    }

    public static toFormData(data: any) {
        let formData: any = new FormData();
        formData.append("organization", data.organization ?? '');
        formData.append("address", data.address ?? '');
        formData.append("website", data.website ?? '');
        formData.append("phone", data.phone ?? '');
        formData.append("designation", data.designation ?? '');
        formData.append("responsibilities", data.responsibilities ?? '');
        formData.append("start", data.start ?? '');
        formData.append("end", data.end ?? '');
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
    Experience
};

export type {
    IExperience
};
