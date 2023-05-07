import * as yup from "yup";


interface IQuestion {
    name: String,
    description: String,
    optionA: String,
    optionB: String,
    optionC: String,
    optionD: String,
}

class Question {
    static rules: any = {
        name: yup.string().required('Name is required'),
        description: yup.string().required('Description is required'),
        optionA: yup.string().required('Option A is required'),
        optionB: yup.string().required('Option B is required'),
        optionC: yup.string().required('Option C is required'),
        optionD: yup.string().required('Option D is required'),
    }

    public static toJson(data: any) {
        return {
            name: data.name,
            description: data.description,
            optionA: data.optionA,
            optionB: data.optionB,
            optionC: data.optionC,
            optionD: data.optionD,
        }
    }

    public static toFormData(data: any) {
        let formData: any = new FormData();
        formData.append("name", data.name ?? '');
        formData.append("description", data.description ?? '');
        formData.append("optionA", data.optionA ?? '');
        formData.append("optionB", data.optionB ?? '');
        formData.append("optionC", data.optionC ?? '');
        formData.append("optionD", data.optionD ?? '');
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
    Question
};

export type {
    IQuestion
};
