import React, {useEffect} from 'react';
import ErrorText from "../../../components/texts/ErrorText";
import {ButtonGreenMd} from "../../../components/buttons";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store";
import {callApi} from "../../../slices/apiSlice";
import {HttpHethod} from "../../../constants";
import {UrlHelper} from "../../../helpers";

const SubcategoryForm = ({register, errors, editMode = false, onSubmit}: any) => {
    const dispatch = useDispatch<AppDispatch>();
    const {categoryJob = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );
    useEffect(() => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.coreMS('api/v1/category'),
            storeName: 'categoryJob',
            defaultValue: null
        }));
    }, []);
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
                            <select {...register("category")} name="category">
                                <option>Select Category</option>
                                {categoryJob?.data?.map((category: any) => <option key={category._id}
                                                                                   value={category._id}>{category.name}</option>)}
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
