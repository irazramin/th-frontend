import React from 'react';
import ErrorText from "../../../components/texts/ErrorText";
import {ButtonGreenMd} from "../../../components/buttons";

const UserForm = ({register, errors, editMode = false, onSubmit}: any) => {
    return (
        <div>
            <div className="add-items">
                <form
                    onSubmit={onSubmit}
                    encType="multipart/form-data"
                >
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
                                placeholder="last name"
                            />
                        </div>
                        <ErrorText name="lastName" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <div className="input-icon">
                            <input
                                {...register("image")}
                                type="file"
                                name="image"
                                placeholder="Image"
                            />
                        </div>
                        <ErrorText name="image" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <div className="input-icon">
                            <input
                                {...register("email")}
                                type="email"
                                name="email"
                                placeholder="email"
                            />
                        </div>
                        <ErrorText name="email" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <div className="input-icon">
                            <input
                                {...register("phone")}
                                name="phone"
                                placeholder="phone"
                                type="text"
                            />
                        </div>
                        <ErrorText name="phone" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <div className="input-icon">
                            <input
                                {...register("username")}
                                type="text"
                                name="username"
                                placeholder="username"
                            />
                        </div>
                        <ErrorText name="username" errors={errors}/>
                    </div>
                    <div className="action-btn">
                        <ButtonGreenMd>Save</ButtonGreenMd>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserForm;
