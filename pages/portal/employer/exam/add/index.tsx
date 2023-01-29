import {EmployerPortalLayout} from "../../../../../layouts";
import {ButtonGreenMd, ButtonGreenSm} from "../../../../../components/buttons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../../components/cards";
import {ErrorMessage} from "@hookform/error-message";
import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";

enum CategoryEnum {
    informationTechnology = "Information Technology",
    financeAndAccounting = "Finance And Accounting",
    marketing = "Marketing",
    customerService = "Customer Service",
    engineering = "Engineering"
}

interface IFormInput {
    examName: String,
    category: CategoryEnum,
    duration: String,
}

const Add = () => {
    const router = useRouter();

    const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>({criteriaMode: "all"});

    const onsubmit: SubmitHandler<IFormInput> = data => {
        console.log(data)
    }
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
                                    <label htmlFor="examName">Exam Title</label>
                                    <div className="input-icon">
                                        <input {...register("examName", {
                                            required: "This field is required.",
                                            maxLength: {
                                                value: 50,
                                                message: "This input exceed maxLength."
                                            }
                                        })} type="text" name="examName" placeholder="Exam Title"/>

                                    </div>
                                    <ErrorMessage
                                        errors={errors}
                                        name="examName"
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
                                    <label htmlFor="duration">Duration</label>
                                    <div className="input-icon">
                                        <input {...register("duration", {
                                            required: "This field is required.",
                                            maxLength: {
                                                value: 50,
                                                message: "This input exceed maxLength."
                                            }
                                        })} type="text" name="duration" placeholder="30 min"/>

                                    </div>
                                    <ErrorMessage
                                        errors={errors}
                                        name="duration"
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

                                <div className="action-btn col-md-12">
                                    <ButtonGreenMd >Save</ButtonGreenMd>
                                </div>
                            </div>



                        </form>
                    </div>
                </DefaultCard>
            </EmployerPortalLayout>
        </>
    );
}

export default Add