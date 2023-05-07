import React from 'react';
import ErrorText from "../../../components/texts/ErrorText";
import {ButtonGreenMd} from "../../../components/buttons";

const QuestionForm = ({register, errors, editMode = false, onSubmit}: any) => {
    return (
        <div>
            <div className="add-items">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Question Name</label>
                        <div className="input-icon">
                            <input
                                {...register("name")}
                                type="text"
                                name="name"
                                placeholder="Question Name"
                            />
                        </div>
                        <ErrorText name="name" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="optionA">Option A</label>
                        <div className="input-icon">
                            <input
                                {...register("optionA")}
                                type="text"
                                name="optionA"
                                placeholder="Option A"
                            />
                        </div>
                        <ErrorText name="optionA" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="optionB">Option B</label>
                        <div className="input-icon">
                            <input
                                {...register("optionB")}
                                type="text"
                                name="optionB"
                                placeholder="Option B"
                            />
                        </div>
                        <ErrorText name="optionB" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="optionC">Option C</label>
                        <div className="input-icon">
                            <input
                                {...register("optionC")}
                                type="text"
                                name="optionC"
                                placeholder="Option C"
                            />
                        </div>
                        <ErrorText name="optionC" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="optionD">Option D</label>
                        <div className="input-icon">
                            <input
                                {...register("optionD")}
                                type="text"
                                name="optionD"
                                placeholder="Option D"
                            />
                        </div>
                        <ErrorText name="optionD" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <div className="input-icon">
                                    <textarea
                                        {...register("description")}
                                        name="description"
                                        placeholder="description"
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

export default QuestionForm;
