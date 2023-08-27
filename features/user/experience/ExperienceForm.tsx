import React from 'react';
import ErrorText from "../../../components/texts/ErrorText";
import {ButtonGreenMd} from "../../../components/buttons";

const ExperienceForm = ({register, errors, editMode = false, onSubmit}: any) => {
    return (
        <div>
            <div className="add-items">
                <form onSubmit={onSubmit}>
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
                        <label htmlFor="address">Address</label>
                        <div className="input-icon">
                            <input
                                {...register("address")}
                                type="text"
                                name="address"
                                placeholder="Address"
                            />
                        </div>
                        <ErrorText name="address" errors={errors}/>
                    </div>
                    <div className="form-group">
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
                        <label htmlFor="responsibilities">Responsibilities</label>
                        <div className="input-icon">
                            <input
                                {...register("responsibilities")}
                                type="text"
                                name="responsibilities"
                                placeholder="Responsibilities"
                            />
                        </div>
                        <ErrorText name="responsibilities" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="start">Start Date</label>
                        <div className="input-icon">
                            <input
                                {...register("start")}
                                type="date"
                                name="start"
                                placeholder="Start"
                            />
                        </div>
                        <ErrorText name="start" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="end">End Date</label>
                        <div className="input-icon">
                            <input
                                {...register("end")}
                                type="date"
                                name="end"
                                placeholder="End"
                            />
                        </div>
                        <ErrorText name="end" errors={errors}/>
                    </div>
                    <div className="action-btn">
                        <ButtonGreenMd>Save</ButtonGreenMd>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ExperienceForm;
