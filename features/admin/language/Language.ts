import * as yup from "yup";


interface ILanguage {
    name: String,
    description: String
}

class Language {
    static rules: any = {
        name: yup.string().required("Name is required"),
        description: yup.string().required("Description is required"),

    }

    public static toJson(data: any) {
        return {
            name: data.name,
            description: data.description,
        }
    }

    public static toFormData(data: any) {
        let formData: any = new FormData();
        formData.append("name", data.name ?? '');
        formData.append("description", data.description ?? '');
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
    Language
};

export type {
    ILanguage
};
