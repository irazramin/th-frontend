import * as yup from "yup";

interface IProfile {
    firstName: String;
    lastName: String;
    image: any;
    phone: String;
    email: String;
    designation: String;
    website: String;
    facebook: String;
    twitter: String;
    linkedin: String;
    github: String;
    presentAddress: String;
    permanentAddress: String;
    bio: String;
    careerObjective: String;
}

class Profile {
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
        designation: yup.string().required("Designation is required"),
        website: yup.string().required("Website is required"),
        facebook: yup.string().required("Facebook is required"),
        twitter: yup.string().required("Twitter is required"),
        linkedin: yup.string().required("Linkedin is required"),
        github: yup.string().required("Github is required"),
        presentAddress: yup.string().required("Present Address is required"),
        permanentAddress: yup.string().required("Permanent Address is required"),
        bio: yup.string().required("Bio is required"),
        careerObjective: yup.string().required("Career Objective is required"),
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
            designation: data.designation,
            website: data.website,
            facebook: data.facebook,
            twitter: data.twitter,
            github: data.github,
            linkedin: data.linkedin,
            presentAddress: data.presentAddress,
            permanentAddress: data.permanentAddress,
            bio: data.bio,
            careerObjective: data.careerObjective,
        }
    }

    public static toFormData(data: any) {
        let formData: any = new FormData();


        formData.append("firstName", data.firstName ?? '');
        formData.append("lastName", data.lastName ?? '');
        formData.append("email", data.email ?? '');
        formData.append("phone", data.phone ?? '');
        formData.append("username", data.username ?? '');
        formData.append("designation", data.designation ?? '');
        formData.append("website", data.website ?? '');
        formData.append("facebook", data.facebook ?? '');
        formData.append("twitter", data.twitter ?? '');
        formData.append("linkedin", data.linkedin ?? '');
        formData.append("github", data.github ?? '');
        formData.append("presentAddress", data.presentAddress ?? '');
        formData.append("permanentAddress", data.permanentAddress ?? '');
        formData.append("bio", data.bio ?? '');
        formData.append("careerObjective", data.careerObjective ?? '');
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
    Profile
};

export type {
    IProfile
};
