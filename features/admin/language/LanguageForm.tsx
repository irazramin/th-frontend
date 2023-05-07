import React from 'react';
import ErrorText from "../../../components/texts/ErrorText";
import {ButtonGreenMd} from "../../../components/buttons";

const LanguageForm = ({register, errors, editMode = false, onSubmit}: any) => {
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

export default LanguageForm;
