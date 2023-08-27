import * as yup from "yup";

interface ICategory {
    name: String,
    image: any,
    description: String
}

class Category {
    static rules: any = {
        name: yup.string().required("Name is required"),
        description: yup.string().required("Description is required"),
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
            ),
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
    Category
};

export type {
    ICategory
};
