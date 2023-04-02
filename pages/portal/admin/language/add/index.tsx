import {AdminPortalLayout} from "../../../../../layouts";
import {ButtonGreenMd, ButtonGreenSm} from "../../../../../components/buttons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../../components/cards";
import {SubmitHandler, useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import React from "react";

interface IFormInput {
    languageName: String,
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
                                <label htmlFor="languageName">Language Name</label>
                                <div className="input-icon">
                                    <input {...register("languageName", {
                                        required: "This field is required.",
                                        maxLength: {
                                            value: 50,
                                            message: "This input exceed maxLength."
                                        }
                                    })} type="text" name="languageName" placeholder="Language"/>

                                </div>
                                <ErrorMessage
                                    errors={errors}
                                    name="languageName"
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