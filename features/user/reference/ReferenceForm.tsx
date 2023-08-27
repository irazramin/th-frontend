import React from 'react';
import ErrorText from "../../../components/texts/ErrorText";
import {ButtonGreenMd} from "../../../components/buttons";

const ReferenceForm = ({register, errors, editMode = false, onSubmit}: any) => {
    return (
        <div>
            <div className="add-items">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <div className="input-icon">
                            <input
                                {...register("firstName")}
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                            />
                        </div>
                        <ErrorText name="firstName" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <div className="input-icon">
                            <input
                                {...register("lastName")}
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                            />
                        </div>
                        <ErrorText name="lastName" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="designation">Designation</label>
                        <div className="input-icon">
                            <input
                                {...register("designation")}
                                type="text"
                                name="designation"
                                placeholder="Designation"
                            />
                        </div>
                        <ErrorText name="designation" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="organization">Organization</label>
                        <div className="input-icon">
                            <input
                                {...register("organization")}
                                type="text"
                                name="organization"
                                placeholder="Organization"
                            />
                        </div>
                        <ErrorText name="organization" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <div className="input-icon">
                            <input
                                {...register("email")}
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                        </div>
                        <ErrorText name="email" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <div className="input-icon">
                            <input
                                {...register("phone")}
                                type="text"
                                name="phone"
                                placeholder="Phone"
                            />
                        </div>
                        <ErrorText name="phone" errors={errors}/>
                    </div>
                    <div className="action-btn">
                        <ButtonGreenMd>Save</ButtonGreenMd>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReferenceForm;
