import {UserPortalLayout} from "../../../../../layouts";
import {ButtonGreenSm} from "../../../../../components/buttons";
import {faAngleDown, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../../components/cards";
import {ErrorMessage} from "@hookform/error-message";
import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


interface IFormInput {
    examName: String,
    duration: String,
}

const Add = () => {
    const router = useRouter();

    const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>({criteriaMode: "all"});

    const onsubmit: SubmitHandler<IFormInput> = data => {

    }
    return (
        <>
            <UserPortalLayout>
                <TitleCard title="Add">
                    <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>Back</ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <div className="add-items resume-items">
                        <form onSubmit={handleSubmit(onsubmit)}>
                            <div className="create-resume">
                                <ul>
                                    <li className="resume-section">
                                        <div className="section-title">
                                            <h4>Personal Details</h4>
                                        </div>
                                        <div className="collapse-btn">
                                            <button>
                                                <FontAwesomeIcon icon={faAngleDown}/>
                                            </button>
                                        </div>
                                        <div className="collapse-section">
                                            <div className="row">
                                                <div className="col-md-3 col-sm-12">
                                                    <input type="file" className='resume-image' placeholder=" "/>
                                                </div>
                                                <div className="col-md-7 col-sm-12">
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12 form-group">
                                                            <div className="input-icon">
                                                                <input {...register("examName", {
                                                                    required: "This field is required.",
                                                                    maxLength: {
                                                                        value: 50,
                                                                        message: "This input exceed maxLength."
                                                                    }
                                                                })} type="text" name="examName"
                                                                       placeholder="Your name"/>

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
                                                                            <i className='bx bx-error-circle'
                                                                               style={{fontSize: "17px"}}/> {message}
                                                                        </p>
                                                                    ))
                                                                }
                                                            />
                                                        </div>
                                                        <div className="col-md-6 col-sm-12 form-group">
                                                            <div className="input-icon">
                                                                <input {...register("examName", {
                                                                    required: "This field is required.",
                                                                    maxLength: {
                                                                        value: 50,
                                                                        message: "This input exceed maxLength."
                                                                    }
                                                                })} type="text" name="examName"
                                                                       placeholder="Designation"/>

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
                                                                            <i className='bx bx-error-circle'
                                                                               style={{fontSize: "17px"}}/> {message}
                                                                        </p>
                                                                    ))
                                                                }
                                                            />
                                                        </div>
                                                        <div className="col-md-12 col-sm-12 form-group">
                                                            <div className="input-icon">
                                                                <input {...register("examName", {
                                                                    required: "This field is required.",
                                                                    maxLength: {
                                                                        value: 50,
                                                                        message: "This input exceed maxLength."
                                                                    }
                                                                })} type="text" name="examName" placeholder="Email"/>

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
                                                                            <i className='bx bx-error-circle'
                                                                               style={{fontSize: "17px"}}/> {message}
                                                                        </p>
                                                                    ))
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="resume-section"></li>
                                    <li className="resume-section"></li>
                                    <li className="resume-section"></li>
                                    <li className="resume-section"></li>
                                    <li className="resume-section"></li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </DefaultCard>
            </UserPortalLayout>
        </>
    );
}

export default Add
