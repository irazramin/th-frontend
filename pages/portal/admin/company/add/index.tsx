import {AdminPortalLayout} from "../../../../../layouts";
import {ButtonGreenMd, ButtonGreenSm} from "../../../../../components/buttons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../../components/cards";
import {ErrorMessage} from "@hookform/error-message";
import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";

interface IFormInput {
    companyName: String,
    email: String,
    phone: String,
    website: String
}

const Add = () => {
    const router = useRouter();
    const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>({criteriaMode: "all"});

    const onsubmit: SubmitHandler<IFormInput> = data => {
        console.log(data)
    }

    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Add">
                        <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>Back</ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <div className="add-items">
                        <form onSubmit={handleSubmit(onsubmit)}>
                            <div className="form-group">
                                <label htmlFor="companyName">Company Name</label>
                                <div className="input-icon">
                                    <input {...register("companyName", {
                                        required: "This field is required.",
                                        maxLength: {
                                            value: 50,
                                            message: "This input exceed maxLength."
                                        }
                                    })} type="text" name="companyName" placeholder="Company Name"/>

                                </div>
                                <ErrorMessage
                                    errors={errors}
                                    name="companyName"
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
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-icon">
                                    <input {...register("email", {
                                        required: "This field is required.",
                                        pattern: {
                                            value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                            message: "Enter a valid email"
                                        }
                                    })} type="email" name="email" placeholder="Email"/>
                                </div>
                                <ErrorMessage
                                    errors={errors}
                                    name="email"
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
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <div className="input-icon">
                                    <input
                                        {...register("phone", {
                                            required: "This field is required.",
                                            minLength: {
                                                value: 8,
                                                message: "password should be atleast 8 characters"
                                            }
                                        })}
                                        type="text"
                                        name="phone"
                                        placeholder="Phone"
                                    />
                                </div>
                                <ErrorMessage
                                    errors={errors}
                                    name="phone"
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
                            <div className="form-group">
                                <label htmlFor="website">Website Link</label>
                                <div className="input-icon">
                                    <input
                                        {...register("website", {
                                            required: "This field is required.",
                                            minLength: {
                                                value: 8,
                                                message: "password should be atleast 8 characters"
                                            }
                                        })}
                                        type="text"
                                        name="website"
                                        placeholder="Link"
                                    />
                                </div>
                                <ErrorMessage
                                    errors={errors}
                                    name="website"
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

                            <div className="action-btn">
                                <ButtonGreenMd >Save</ButtonGreenMd>
                            </div>
                        </form>
                    </div>
                </DefaultCard>
            </AdminPortalLayout>
        </>
    );
}

export default Add