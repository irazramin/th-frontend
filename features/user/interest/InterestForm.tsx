import React from 'react';
import ErrorText from "../../../components/texts/ErrorText";
import {ButtonGreenMd} from "../../../components/buttons";

const InterestForm = ({register, errors, editMode = false, onSubmit}: any) => {
    return (
        <div>
            <div className="add-items">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="interest">Interest</label>
                        <div className="input-icon">
                            <input
                                {...register("interest")}
                                type="text"
                                name="interest"
                                placeholder="Interest"
                            />
                        </div>
                        <ErrorText name="interest" errors={errors}/>
                    </div>
                    <div className="action-btn">
                        <ButtonGreenMd>Save</ButtonGreenMd>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InterestForm;
