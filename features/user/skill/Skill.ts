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

interface ISkill {
    skill: String,
    other: String,
    proficiency: ProficiencyEnum,
}

class Skill {
    static rules: any = {
        skill: yup.string().required('Skill is required'),
        proficiency: yup.string().required('Proficiency is required'),
    }

    public static toJson(data: any) {
        return {
            skill: data.skill,
            proficiency: data.proficiency,
            other: data.other,
        }
    }

    public static toFormData(data: any) {
        let formData: any = new FormData();
        formData.append("skill", data.skill ?? '');
        formData.append("other", data.other ?? '');
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
    Skill
};

export type {
    ISkill
};
