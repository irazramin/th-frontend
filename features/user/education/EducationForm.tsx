import React from 'react';
import ErrorText from "../../../components/texts/ErrorText";
import {ButtonGreenMd} from "../../../components/buttons";

const EducationForm = ({register, errors, editMode = false, onSubmit}: any) => {
    return (
        <div>
            <div className="add-items">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="institute">Institute</label>
                        <div className="input-icon">
                            <input
                                {...register("institute")}
                                type="text"
                                name="institute"
                                placeholder="Institute"
                            />
                        </div>
                        <ErrorText name="institute" errors={errors}/>
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
                        <label htmlFor="course">Course</label>
                        <div className="input-icon">
                            <input
                                {...register("course")}
                                type="text"
                                name="course"
                                placeholder="Course"
                            />
                        </div>
                        <ErrorText name="course" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="degree">Degree</label>
                        <div className="input-icon">
                            <input
                                {...register("degree")}
                                type="text"
                                name="degree"
                                placeholder="Degree"
                            />
                        </div>
                        <ErrorText name="degree" errors={errors}/>
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

export default EducationForm;
