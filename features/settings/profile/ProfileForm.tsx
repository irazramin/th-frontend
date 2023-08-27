import React from 'react';
import ErrorText from "../../../components/texts/ErrorText";
import {ButtonGreenMd} from "../../../components/buttons";

const UserForm = ({register, errors, editMode = false, onSubmit}: any) => {
    return (
        <div>
            <div className="add-items">
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="form-group col-md-6 col-sm-12">
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
                        <div className="form-group col-md-6 col-sm-12">
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

                        <div className="form-group col-md-6 col-sm-12">
                            <label htmlFor="email">Email</label>
                            <div className="input-icon">
                                <input
                                    {...register("email")}
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                />
                            </div>
                            <ErrorText name="designation" errors={errors}/>
                        </div>

                        <div className="form-group col-md-6 col-sm-12">
                            <label htmlFor="designation">Designation</label>
                            <div className="input-icon">
                                <input
                                    {...register("designation")}
                                    type="text"
                                    name="designation"
                                    placeholder="designation"
                                />
                            </div>
                            <ErrorText name="designation" errors={errors}/>
                        </div>

                        <div className="form-group col-md-6 col-sm-12">
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

                        <div className="form-group col-md-6 col-sm-12">
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
                        <div className="form-group col-md-6 col-sm-12">
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

                        <div className="form-group col-md-6 col-sm-12">
                            <label htmlFor="website">Website</label>
                            <div className="input-icon">
                                <input
                                    {...register("website")}
                                    type="text"
                                    name="website"
                                    placeholder="Website"
                                />
                            </div>
                            <ErrorText name="website" errors={errors}/>
                        </div>
                        <div className="form-group col-md-6 col-sm-12">
                            <label htmlFor="facebook">Facebook</label>
                            <div className="input-icon">
                                <input
                                    {...register("facebook")}
                                    type="text"
                                    name="facebook"
                                    placeholder="Facebook"
                                />
                            </div>
                            <ErrorText name="facebook" errors={errors}/>
                        </div>

                        <div className="form-group col-md-6 col-sm-12">
                            <label htmlFor="twitter">Twitter</label>
                            <div className="input-icon">
                                <input
                                    {...register("twitter")}
                                    type="text"
                                    name="twitter"
                                    placeholder="Twitter"
                                />
                            </div>
                            <ErrorText name="twitter" errors={errors}/>
                        </div>

                        <div className="form-group col-md-6 col-sm-12">
                            <label htmlFor="linkedin">Linkedin</label>
                            <div className="input-icon">
                                <input
                                    {...register("linkedin")}
                                    type="text"
                                    name="linkedin"
                                    placeholder="Linkedin"
                                />
                            </div>
                            <ErrorText name="linkedin" errors={errors}/>
                        </div>
                        <div className="form-group col-md-6 col-sm-12">
                            <label htmlFor="github">Github</label>
                            <div className="input-icon">
                                <input
                                    {...register("github")}
                                    type="text"
                                    name="github"
                                    placeholder="Github"
                                />
                            </div>
                            <ErrorText name="github" errors={errors}/>
                        </div>
                        <div className="form-group col-md-6 col-sm-12">
                            <label htmlFor="presentAddress">Present Address</label>
                            <div className="input-icon">
                                <input
                                    {...register("presentAddress")}
                                    type="text"
                                    name="presentAddress"
                                    placeholder="Present Address"
                                />
                            </div>
                            <ErrorText name="presentAddress" errors={errors}/>
                        </div>

                        <div className="form-group col-md-6 col-sm-12">
                            <label htmlFor="permanentAddress">Permanent Address</label>
                            <div className="input-icon">
                                <input
                                    {...register("permanentAddress")}
                                    type="text"
                                    name="permanentAddress"
                                    placeholder="Permanent Address"
                                />
                            </div>
                            <ErrorText name="permanentAddress" errors={errors}/>
                        </div>
                        <div className="form-group col-md-12 col-sm-12">
                            <label htmlFor="bio">Bio</label>
                            <div className="input-icon">
                                    <textarea
                                        {...register("bio")}
                                        name="bio"
                                        placeholder="Bio"
                                        rows={8}
                                    />
                            </div>
                            <ErrorText name="bio" errors={errors}/>
                        </div>
                        <div className="form-group col-md-12 col-sm-12">
                            <label htmlFor="careerObjective">Career Objective</label>
                            <div className="input-icon">
                                    <textarea
                                        {...register("careerObjective")}
                                        name="careerObjective"
                                        placeholder="Career Objective"
                                        rows={8}
                                    />
                            </div>
                            <ErrorText name="careerObjective" errors={errors}/>
                        </div>

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
