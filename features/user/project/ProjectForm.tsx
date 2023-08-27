import React from 'react';
import ErrorText from "../../../components/texts/ErrorText";
import {ButtonGreenMd} from "../../../components/buttons";

const ProjectForm = ({register, errors, editMode = false, onSubmit}: any) => {
    return (
        <div>
            <div className="add-items">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <div className="input-icon">
                            <input
                                {...register("name")}
                                type="text"
                                name="name"
                                placeholder="Name"
                            />
                        </div>
                        <ErrorText name="name" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="githubLink">Github Link</label>
                        <div className="input-icon">
                            <input
                                {...register("githubLink")}
                                type="text"
                                name="githubLink"
                                placeholder="Github Link"
                            />
                        </div>
                        <ErrorText name="githubLink" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="previewLink">Preview Link</label>
                        <div className="input-icon">
                            <input
                                {...register("previewLink")}
                                type="text"
                                name="previewLink"
                                placeholder="Preview Link"
                            />
                        </div>
                        <ErrorText name="previewLink" errors={errors}/>
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
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <div className="input-icon">
                                    <textarea
                                        {...register("description")}
                                        name="description"
                                        placeholder="Description"
                                        rows={10}
                                    />
                        </div>
                        <ErrorText name="description" errors={errors}/>
                    </div>
                    <div className="action-btn">
                        <ButtonGreenMd>Save</ButtonGreenMd>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectForm;
