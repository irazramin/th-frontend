import * as yup from "yup";


interface IProject {
    name: String,
    githubLink: String,
    description: String,
    previewLink: String,
    start: String,
    end: String
}

class Project {
    static rules: any = {
        name: yup.string().required("Name is required"),
        description: yup.string().required("Description is required"),
        githubLink: yup.string().required("GithubLink is required"),
        previewLink: yup.string().required("PreviewLink is required"),
        start: yup.string().required("Start number is required"),
        end: yup.string().required("End number is required")
    }

    public static toJson(data: any) {
        return {
            name: data.name,
            githubLink: data.githubLink,
            description: data.description,
            previewLink: data.previewLink,
            start: data.start,
            end: data.end
        }
    }

    public static toFormData(data: any) {
        let formData: any = new FormData();
        formData.append("name", data.name ?? '');
        formData.append("githubLink", data.githubLink ?? '');
        formData.append("description", data.description ?? '');
        formData.append("end", data.end ?? '');
        formData.append("previewLink", data.previewLink ?? '');
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
    Project
};

export type {
    IProject
};
