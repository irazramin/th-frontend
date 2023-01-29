import {EmployerPortalLayout} from "../../../../../layouts";
import {ButtonGreenMd, ButtonGreenSm} from "../../../../../components/buttons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../../components/cards";
import {SubmitHandler, useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import React from "react";

enum CategoryEnum {
    informationTechnology = "Information Technology",
    financeAndAccounting = "Finance And Accounting",
    marketing = "Marketing",
    customerService = "Customer Service",
    engineering = "Engineering"
}
enum SubCategoryEnum {
    medicalAdministrator = "Medical Administrator",
    assistantEngineer = "Assistant Engineer",
    productionEngineer = "Production Engineer",
    clientServiceSpecialist = "Client Service Specialist",
    accountingAnalyst = "Accounting Analyst"
}

interface IFormInput {
    jobName: String,
    vacancy: Number,
    category: CategoryEnum,
    subcategory: SubCategoryEnum,
    minSalary: String,
    maxSalary: String,
    experience: String,
    jobType: String
}



const Add = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>({criteriaMode: "all"});

    const onsubmit: SubmitHandler<IFormInput> = data => {
        console.log(data)
    }

    const router = useRouter();
    return (
        <>
            <EmployerPortalLayout>
                <TitleCard title="Add">
                        <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>Back</ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <div className="add-items">
                        <form onSubmit={handleSubmit(onsubmit)}>
                           <div className="row">
                               <div className="form-group col-md-12 col-sm-12">
                                   <label htmlFor="jobName">Job Title</label>
                                   <div className="input-icon">
                                       <input {...register("jobName", {
                                           required: "This field is required.",
                                           maxLength: {
                                               value: 50,
                                               message: "This input exceed maxLength."
                                           }
                                       })} type="text" name="jobName" placeholder="Job Name"/>

                                   </div>
                                   <ErrorMessage
                                       errors={errors}
                                       name="jobName"
                                       render={({messages}) =>
                                           messages &&
                                           Object.entries(messages).map(([type, message]) => (
                                               <p key={type} style={{
                                                   color: 'red',
                                                   marginTop: "10px",
                                                   fontSize: "14px",
                                                   fontWeight: "600",
                                                   display: "flex",
                                                   alignItems: "center",
                                                   gap: "10px"
                                               }} className='password-error-message'>
                                                   <i className='bx bx-error-circle' style={{fontSize: "17px"}}/> {message}</p>
                                           ))
                                       }
                                   />
                               </div>
                               <div className="form-group col-md-12 col-sm-12">
                                   <label htmlFor="vacancy">Vacancy</label>
                                   <div className="input-icon">
                                       <input {...register("vacancy", {
                                           required: "This field is required.",
                                           maxLength: {
                                               value: 50,
                                               message: "This input exceed maxLength."
                                           }
                                       })} type="number" name="vacancy" placeholder="vacancy"/>

                                   </div>
                                   <ErrorMessage
                                       errors={errors}
                                       name="vacancy"
                                       render={({messages}) =>
                                           messages &&
                                           Object.entries(messages).map(([type, message]) => (
                                               <p key={type} style={{
                                                   color: 'red',
                                                   marginTop: "10px",
                                                   fontSize: "14px",
                                                   fontWeight: "600",
                                                   display: "flex",
                                                   alignItems: "center",
                                                   gap: "10px"
                                               }} className='password-error-message'>
                                                   <i className='bx bx-error-circle' style={{fontSize: "17px"}}/> {message}</p>
                                           ))
                                       }
                                   />
                               </div>

                               <div className="form-group col-md-6 col-sm-12">
                                   <label htmlFor="category">Category</label>
                                   <div className="input-icon">
                                       <select {...register("category", {
                                           required: "This field is required.",
                                           maxLength: {
                                               value: 50,
                                               message: "This input exceed maxLength."
                                           }
                                       })}  name="category">
                                           <option value="informationAndTechnology">Information And Technology</option>
                                           <option value="financeAndAccounting">Finance And Accounting</option>
                                           <option value="marketing">Marketing</option>
                                           <option value="clientServiceSpecialist">Client Service Specialist</option>
                                           <option value="engineering">Engineering</option>
                                       </select>

                                   </div>
                                   <ErrorMessage
                                       errors={errors}
                                       name="category"
                                       render={({messages}) =>
                                           messages &&
                                           Object.entries(messages).map(([type, message]) => (
                                               <p key={type} style={{
                                                   color: 'red',
                                                   marginTop: "10px",
                                                   fontSize: "14px",
                                                   fontWeight: "600",
                                                   display: "flex",
                                                   alignItems: "center",
                                                   gap: "10px"
                                               }} className='password-error-message'>
                                                   <i className='bx bx-error-circle' style={{fontSize: "17px"}}/> {message}</p>
                                           ))
                                       }
                                   />
                               </div>
                               <div className="form-group col-md-6 col-sm-12">
                                   <label htmlFor="subcategory">Subcategory</label>
                                   <div className="input-icon">
                                       <select {...register("subcategory", {
                                           required: "This field is required.",
                                           maxLength: {
                                               value: 50,
                                               message: "This input exceed maxLength."
                                           }
                                       })}  name="category">
                                           <option value="medicalAdministrator">Medical Administrator</option>
                                           <option value="assistantEngineer">Assistant Engineer</option>
                                           <option value="productionEngineer">Production Engineer</option>
                                           <option value="clientServiceSpecialist">Client Service Specialist</option>
                                           <option value="accountingAnalyst">Accounting Analyst</option>
                                       </select>
                                   </div>
                                   <ErrorMessage
                                       errors={errors}
                                       name="subcategory"
                                       render={({messages}) =>
                                           messages &&
                                           Object.entries(messages).map(([type, message]) => (
                                               <p key={type} style={{
                                                   color: 'red',
                                                   marginTop: "10px",
                                                   fontSize: "14px",
                                                   fontWeight: "600",
                                                   display: "flex",
                                                   alignItems: "center",
                                                   gap: "10px"
                                               }} className='password-error-message'>
                                                   <i className='bx bx-error-circle' style={{fontSize: "17px"}}/> {message}</p>
                                           ))
                                       }
                                   />
                               </div>

                               <div className="form-group col-md-6 col-sm-12">
                                   <label htmlFor="minSalary">Min Salary</label>
                                   <div className="input-icon">
                                       <input {...register("minSalary", {
                                           required: "This field is required.",
                                           maxLength: {
                                               value: 50,
                                               message: "This input exceed maxLength."
                                           }
                                       })} type="text" name="minSalary" placeholder="Min Salary"/>

                                   </div>
                                   <ErrorMessage
                                       errors={errors}
                                       name="minSalary"
                                       render={({messages}) =>
                                           messages &&
                                           Object.entries(messages).map(([type, message]) => (
                                               <p key={type} style={{
                                                   color: 'red',
                                                   marginTop: "10px",
                                                   fontSize: "14px",
                                                   fontWeight: "600",
                                                   display: "flex",
                                                   alignItems: "center",
                                                   gap: "10px"
                                               }} className='password-error-message'>
                                                   <i className='bx bx-error-circle' style={{fontSize: "17px"}}/> {message}</p>
                                           ))
                                       }
                                   />
                               </div>
                               <div className="form-group col-md-6 col-sm-12">
                                   <label htmlFor="maxSalary">Max Salary</label>
                                   <div className="input-icon">
                                       <input {...register("maxSalary", {
                                           required: "This field is required.",
                                           maxLength: {
                                               value: 50,
                                               message: "This input exceed maxLength."
                                           }
                                       })} type="text" name="maxSalary" placeholder="Max Salary"/>

                                   </div>
                                   <ErrorMessage
                                       errors={errors}
                                       name="maxSalary"
                                       render={({messages}) =>
                                           messages &&
                                           Object.entries(messages).map(([type, message]) => (
                                               <p key={type} style={{
                                                   color: 'red',
                                                   marginTop: "10px",
                                                   fontSize: "14px",
                                                   fontWeight: "600",
                                                   display: "flex",
                                                   alignItems: "center",
                                                   gap: "10px"
                                               }} className='password-error-message'>
                                                   <i className='bx bx-error-circle' style={{fontSize: "17px"}}/> {message}</p>
                                           ))
                                       }
                                   />
                               </div>

                               <div className="form-group col-md-6 col-sm-12">
                                   <label htmlFor="jobType">Job Type</label>
                                   <div className="input-icon">
                                       <input {...register("jobType", {
                                           required: "This field is required.",
                                           maxLength: {
                                               value: 50,
                                               message: "This input exceed maxLength."
                                           }
                                       })} type="text" name="jobType" placeholder="Full-time"/>

                                   </div>
                                   <ErrorMessage
                                       errors={errors}
                                       name="jobType"
                                       render={({messages}) =>
                                           messages &&
                                           Object.entries(messages).map(([type, message]) => (
                                               <p key={type} style={{
                                                   color: 'red',
                                                   marginTop: "10px",
                                                   fontSize: "14px",
                                                   fontWeight: "600",
                                                   display: "flex",
                                                   alignItems: "center",
                                                   gap: "10px"
                                               }} className='password-error-message'>
                                                   <i className='bx bx-error-circle' style={{fontSize: "17px"}}/> {message}</p>
                                           ))
                                       }
                                   />
                               </div>
                               <div className="form-group col-md-6 col-sm-12">
                                   <label htmlFor="experience">Experience</label>
                                   <div className="input-icon">
                                       <input {...register("experience", {
                                           required: "This field is required.",
                                           maxLength: {
                                               value: 50,
                                               message: "This input exceed maxLength."
                                           }
                                       })} type="text" name="experience" placeholder="0-2yr"/>

                                   </div>
                                   <ErrorMessage
                                       errors={errors}
                                       name="experience"
                                       render={({messages}) =>
                                           messages &&
                                           Object.entries(messages).map(([type, message]) => (
                                               <p key={type} style={{
                                                   color: 'red',
                                                   marginTop: "10px",
                                                   fontSize: "14px",
                                                   fontWeight: "600",
                                                   display: "flex",
                                                   alignItems: "center",
                                                   gap: "10px"
                                               }} className='password-error-message'>
                                                   <i className='bx bx-error-circle' style={{fontSize: "17px"}}/> {message}</p>
                                           ))
                                       }
                                   />
                               </div>
                           </div>

                            <div className="action-btn">
                                <ButtonGreenMd >Save</ButtonGreenMd>
                            </div>

                        </form>
                    </div>
                </DefaultCard>
            </EmployerPortalLayout>
        </>
    );
}

export default Add