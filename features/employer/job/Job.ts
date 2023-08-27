import * as yup from "yup";


enum jobTypeLocationEnum {
    onSite = 'On-site',
    hybrid = 'Hybrid',
    remote = 'Remote',
}

enum experienceEnum {
    '0-02years' = '0-2 years',
    '02-05years' = '2-5 years',
    sevenPlus = '7+ years',
}

enum educationEnum {
    underGraduate = 'Under Graduate',
    anyRelevantField = 'Any Relevant Field',
    cse = 'CSE',
}

enum jobTypeEnum {
    fullTime = 'Full-time',
    partTime = 'Part-time',
    internship = 'Internship',
}

interface IJob {
    name: String,
    description: String,
    jobLocationType: jobTypeLocationEnum,
    minimumExperience: experienceEnum,
    salaryFrom: String,
    salaryTo: String,
    education: educationEnum,
    other: String,
    responsibilities: String,
    skills: String,
    additionalRequirements: String,
    vacancy: String,
    jobType: jobTypeEnum,
    benefits: String,
    company: String,
    category: String,
    publishDate: String,
    expiryDate: String,
}

class Job {
    static rules: any = {
        name: yup.string().required("Name is required"),
        description: yup.string().required("Description is required"),
        jobLocationType: yup.string().required("Job Location Type is required"),
        minimumExperience: yup.string().required("Minimum Skill is required"),
        salaryFrom: yup.string().required("Salary From is required"),
        salaryTo: yup.string().required("Salary To is required"),
        education: yup.string().required("Skill is required"),
        responsibilities: yup.string().required("Responsibilities is required"),
        skills: yup.string().required("Skills is required"),
        additionalRequirements: yup.string().required("Additional Requirements is required"),
        vacancy: yup.string().required("Vacancy is required"),
        jobType: yup.string().required("Job Type is required"),
        benefits: yup.string().required("Description is required"),
        company: yup.string().required("CompanyId is required"),
        category: yup.string().required("Category is required"),
        subcategory: yup.string().required("Subcategory is required"),
        publishDate: yup.string().required("Publish Date is required"),
        expiryDate: yup.string().required("Expiry Date is required"),
    }

    public static toJson(data: any) {
        return {
            name: data.name,
            description: data.description,
            minimumExperience: data.minimumExperience,
            salaryFrom: data.salaryFrom,
            salaryTo: data.salaryTo,
            education: data.education,
            responsibilities: data.responsibilities,
            skills: data.skills,
            additionalRequirements: data.additionalRequirements,
            vacancy: data.vacancy,
            jobType: data.jobType,
            jobLocationType: data.jobLocationType,
            benefits: data.benefits,
            company: data.company,
            category: data.category,
            subcategory: data.subcategory,
            publishDate: data.publishDate,
            expiryDate: data.expiryDate
        }
    }

    public static toFormData(data: any) {
        let formData: any = new FormData();
        formData.append("name", data.name ?? '');
        formData.append("description", data.description ?? '');
        formData.append("minimumExperience", data.minimumExperience ?? '');
        formData.append("salaryTo", data.salaryTo ?? '');
        formData.append("salaryFrom", data.salaryFrom ?? '');
        formData.append("education", data.education ?? '');
        formData.append("responsibilities", data.responsibilities ?? '');
        formData.append("skills", data.skills ?? '');
        formData.append("jobType", data.jobType ?? '');
        formData.append("additionalRequirements", data.additionalRequirements ?? '');
        formData.append("jobLocationType", data.jobLocationType ?? '');
        formData.append("benefits", data.benefits ?? '');
        formData.append("company", data.company ?? '');
        formData.append("category", data.category ?? '');
        formData.append("subcategory", data.subcategory ?? '');
        formData.append("publishDate", data.publishDate ?? '');
        formData.append("expiryDate", data.expiryDate ?? '');
        formData.append("vacancy", data.vacancy ?? '');
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
    Job
};

export type {
    IJob
};
