import * as yup from "yup";


interface IEducation {
    institute: String,
    address: String,
    website: String,
    course: String,
    degree: String,
    start: String,
    end: String,
}

class Education {
    static rules: any = {
        institute: yup.string().required("Institute is required"),
        address: yup.string().required("Address is required"),
        website: yup.string().required("Website is required"),
        course: yup
            .string()
            .required("Course is required"),
        degree: yup
            .string()
            .required("Degree number is required"),
        start: yup
            .string()
            .required("Start number is required"),
        end: yup
            .string()
            .required("End number is required"),
        // current: yup
        //     .string()
        //     .required("Current number is required"),
    }

    public static toJson(data: any) {
        return {
            institute: data.institute,
            address: data.address,
            website: data.website,
            course: data.course,
            degree: data.degree,
            start: data.start,
            end: data.end
        }
    }

    public static toFormData(data: any) {
        let formData: any = new FormData();
        formData.append("institute", data.institute ?? '');
        formData.append("address", data.address ?? '');
        formData.append("website", data.website ?? '');
        formData.append("phone", data.phone ?? '');
        formData.append("course", data.course ?? '');
        formData.append("degree", data.degree ?? '');
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
    Education
};

export type {
    IEducation
};
