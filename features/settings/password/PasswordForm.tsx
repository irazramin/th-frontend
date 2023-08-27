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
                        <label htmlFor="oldPassword">Old Password</label>
                        <div className="input-icon">
                            <input
                                {...register("oldPassword")}
                                type="password"
                                name="oldPassword"
                                placeholder="Old Password"
                            />
                        </div>
                        <ErrorText name="oldPassword" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="newPassword">New Password</label>
                        <div className="input-icon">
                            <input
                                {...register("newPassword")}
                                type="password"
                                name="newPassword"
                                placeholder="New Password"
                            />
                        </div>
                        <ErrorText name="newPassword" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <div className="input-icon">
                            <input
                                {...register("confirmPassword")}
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                            />
                        </div>
                        <ErrorText name="confirmPassword" errors={errors}/>
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
