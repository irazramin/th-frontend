import React from 'react';
import ErrorText from "../../../components/texts/ErrorText";
import {ButtonGreenMd} from "../../../components/buttons";

const CompanyForm = ({register, errors, editMode = false, onSubmit}: any) => {
    return (
        <div>
            <div className="add-items">
                <form onSubmit={onSubmit} encType="multipart/form-data">
                    <div className="form-group">
                        <label htmlFor="name">Company Name</label>
                        <div className="input-icon">
                            <input
                                {...register("name")}
                                type="text"
                                name="name"
                                placeholder="Company Name"
                            />
                        </div>
                        <ErrorText name="name" errors={errors}/>
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
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <div className="input-icon">
                            <input
                                {...register("address")}
                                type="text"
                                name="address"
                                placeholder="Address"/>
                        </div>
                        <ErrorText
                            errors={errors}
                            name="address"
                        />
                        <div className="form-group">
                            <label htmlFor="website">Website Link</label>
                            <div className="input-icon">
                                <input
                                    {...register("website")}
                                    type="text"
                                    name="website"
                                    placeholder="Link"
                                />
                            </div>
                            <ErrorText name="website" errors={errors}/>
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
                            <label htmlFor="about">About</label>
                            <div className="input-icon">
                                    <textarea
                                        {...register("about")}
                                        name="about"
                                        placeholder="about"
                                        rows={10}
                                    />
                            </div>
                            <ErrorText name="about" errors={errors}/>
                        </div>
                        <div className="action-btn">
                            <ButtonGreenMd>Save</ButtonGreenMd>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CompanyForm;
