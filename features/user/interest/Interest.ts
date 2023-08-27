import * as yup from "yup";


interface IInterest {
    interest: String
}

class Interest {
    static rules: any = {
        interest: yup.string().required('Interest is required')
    }

    public static toJson(data: any) {
        return {
            interest: data.interest
        }
    }

    public static toFormData(data: any) {
        let formData: any = new FormData();
        formData.append("interest", data.interest ?? '');
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
    Interest
};

export type {
    IInterest
};
