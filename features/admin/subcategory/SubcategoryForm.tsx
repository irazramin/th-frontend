import React from 'react';
import ErrorText from "../../../components/texts/ErrorText";
import {ButtonGreenMd} from "../../../components/buttons";

const SubcategoryForm = ({register, errors, editMode = false, onSubmit}: any) => {
    return (
        <div>
            <div className="add-items">
                <form
                    onSubmit={onSubmit}
                    encType="multipart/form-data"
                >
                    <div className="form-group">
                        <label htmlFor="name">Subcategory Name</label>
                        <div className="input-icon">
                            <input {...register("name")}
                                   type="text"
                                   name="name"
                                   placeholder="Subcategory Name"
                            />
                        </div>
                        <ErrorText
                            errors={errors}
                            name="name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Category</label>
                        <div className="input-icon">
                            <select {...register("category")}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                        <ErrorText name="category" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <div className="input-icon">
                            <input {...register("image")}
                                   type="file"
                                   name="image"
                                   placeholder="Image"/>
                        </div>
                        <ErrorText
                            errors={errors}
                            name="image"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <div className="input-icon">
                            <input
                                {...register("description")}
                                type="text"
                                name="description"
                                placeholder="Description"/>
                        </div>
                        <ErrorText
                            errors={errors}
                            name="description"
                        />
                    </div>

                    <div className="action-btn">
                        <ButtonGreenMd>Save</ButtonGreenMd>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubcategoryForm;
