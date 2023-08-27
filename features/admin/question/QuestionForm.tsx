import React from 'react';
import ErrorText from "../../../components/texts/ErrorText";
import {ButtonGreenMd} from "../../../components/buttons";

const QuestionForm = ({register, errors, editMode = false, onSubmit}: any) => {
    return (
        <div>
            <div className="add-items">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="question">Question Name</label>
                        <div className="input-icon">
                            <input
                                {...register("question")}
                                type="text"
                                name="question"
                                placeholder="Question Name"
                            />
                        </div>
                        <ErrorText name="question" errors={errors}/>
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
                    <div className="">
                        <label htmlFor="">Answer</label>

                        <div style={{marginBottom: "10px", marginTop: "10px"}}>
                            <input
                                {...register("optionAAns")}
                                name="optionAAns"
                                type="checkbox"
                            />
                            <label htmlFor="optionAAns" style={{margin: "0 10px"}}>
                                A
                            </label>

                        </div>
                        <div style={{marginBottom: "10px"}}>
                            <input
                                {...register("optionBAns")}
                                name="optionBAns"
                                type="checkbox"
                            />
                            <label htmlFor="optionBAns" style={{margin: "0 10px"}}>
                                B
                            </label>

                        </div>
                        <div style={{marginBottom: "10px"}}>
                            <input
                                {...register("optionCAns")}
                                name="optionCAns"
                                type="checkbox"
                            />
                            <label htmlFor="optionCAns" style={{margin: "0 10px"}}>
                                C
                            </label>

                        </div>
                        <div style={{marginBottom: "10px"}}>
                            <input
                                {...register("optionDAns")}
                                name="optionDAns"
                                type="checkbox"
                            />
                            <label htmlFor="optionDAns" style={{margin: "0 10px"}}>
                                D
                            </label>

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

export default QuestionForm;
