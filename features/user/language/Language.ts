import * as yup from "yup";


enum ProficiencyEnum {
    one = "10",
    two = "20",
    three = "30",
    four = "40",
    five = "50",
    six = "60",
    seven = "70",
    eight = "80",
    nine = "90",
    ten = "100",
}

interface ILanguage {
    language: String,
    proficiency: ProficiencyEnum,
}

class Language {
    static rules: any = {
        language: yup.string().required('Skill is required'),
        proficiency: yup.string().required('Proficiency is required'),
    }

    public static toJson(data: any) {
        return {
            language: data.language,
            proficiency: data.proficiency,
        }
    }

    public static toFormData(data: any) {
        let formData: any = new FormData();
        formData.append("language", data.language ?? '');
        formData.append("proficiency", data.proficiency ?? '');
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
