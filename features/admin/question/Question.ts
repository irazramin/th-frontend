import * as yup from "yup";


interface IQuestion {
    question: String,
    description: String,
    optionA: String,
    optionB: String,
    optionC: String,
    optionD: String,
    optionAAns: Boolean,
    optionBAns: Boolean,
    optionCAns: Boolean,
    optionDAns: Boolean,


}

class Question {
    static rules: any = {
        question: yup.string().required('Question is required'),
        // description: yup.string().required('Description is required'),
        optionA: yup.string().required('Option A is required'),
        optionB: yup.string().required('Option B is required'),
        optionC: yup.string().required('Option C is required'),
        optionD: yup.string().required('Option D is required'),
        optionAAns: yup.string().required('Option A Ans is required'),
        optionBAns: yup.string().required('Option B Ans is required'),
        optionCAns: yup.string().required('Option C Ans is required'),
        optionDAns: yup.string().required('Option D Ans is required'),
    }

    public static toJson(data: any) {
        return {
            question: data.question,
            description: data.description,
            optionA: data.optionA,
            optionB: data.optionB,
            optionC: data.optionC,
            optionD: data.optionD,
            optionAAns: data.optionAAns,
            optionBAns: data.optionBAns,
            optionCAns: data.optionCAns,
            optionDAns: data.optionDAns,
        }
    }

    public static toFormData(data: any) {
        let formData: any = new FormData();
        formData.append("question", data.question ?? '');
        formData.append("description", data.description ?? '');
        formData.append("optionA", data.optionA ?? '');
        formData.append("optionB", data.optionB ?? '');
        formData.append("optionC", data.optionC ?? '');
        formData.append("optionD", data.optionD ?? '');
        formData.append("optionAAns", data.optionAAns ?? '');
        formData.append("optionBAns", data.optionBAns ?? '');
        formData.append("optionCAns", data.optionCAns ?? '');
        formData.append("optionDAns", data.optionDAns ?? '');
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
