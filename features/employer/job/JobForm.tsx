import React, {useEffect} from 'react';
import ErrorText from "../../../components/texts/ErrorText";
import {ButtonGreenMd} from "../../../components/buttons";
import {callApi} from "../../../slices/apiSlice";
import {HttpHethod} from "../../../constants";
import {UrlHelper} from "../../../helpers";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store";

const JobForm = ({register, errors, editMode = false, onSubmit, watch}: any) => {
    const dispatch = useDispatch<AppDispatch>();
    const {
        categoryJob = {data: null},
        subcategoryJob = {data: null},
        companyJob = {data: null},
        isLoading = false
    } = useSelector(
        (state: RootState) => state.callApi
    );

    const educationOthers = watch('education');

    console.log(educationOthers)

    useEffect(() => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.coreMS('api/v1/category'),
            storeName: 'categoryJob',
            defaultValue: null
        }));
    }, []);

    useEffect(() => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.coreMS('api/v1/subcategory'),
            storeName: 'subcategoryJob',
            defaultValue: null
        }));
    }, []);

    useEffect(() => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.coreMS('api/v1/company'),
            storeName: 'companyJob',
            defaultValue: null
        }));
    }, []);

    return (
        <div>
            <div className="add-items">
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="form-group col-md-6  col-sm-12">
                            <label htmlFor="name">Job Title</label>
                            <div className="input-icon">
                                <input {...register("name")} type="text" name="name" placeholder="Job Name"/>

                            </div>
                            <ErrorText name='name' errors={errors}/>
                        </div>
                        <div className="form-group col-md-6  col-sm-12">
                            <label htmlFor="vacancy">Vacancy</label>
                            <div className="input-icon">
                                <input {...register("vacancy")} type="number" name="vacancy" placeholder="vacancy"/>

                            </div>
                            <ErrorText name='vacancy' errors={errors}/>
                        </div>

                        <div className="form-group col-md-6  col-sm-12">
                            <label htmlFor="jobType">Vacancy</label>
                            <div className="input-icon">
                                <select {...register("jobType")} name="jobType" placeholder="jobType">
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Internship">Internship</option>
                                </select>

                            </div>
                            <ErrorText name='jobType' errors={errors}/>
                        </div>

                        <div className="form-group col-md-6 col-sm-12">
                            <label htmlFor="company">Company</label>
                            <div className="input-icon">
                                <select {...register("company")} name="company">
                                    <option>Select Company</option>
                                    {companyJob?.data?.map((company: any) => <option key={company._id}
                                                                                     value={company._id}>{company.name}</option>)}
                                </select>
                            </div>
                            <ErrorText name='company' errors={errors}/>
                        </div>
                        <div className="form-group col-md-6 col-sm-12">
                            <label htmlFor="category">Category</label>
                            <div className="input-icon">
                                <select {...register("category")} name="category">
                                    <option>Select Category</option>
                                    {categoryJob?.data?.map((category: any) => <option key={category._id}
                                                                                       value={category._id}>{category.name}</option>)}
                                </select>
                            </div>
                            <ErrorText name='category' errors={errors}/>
                        </div>
                        <div className="form-group col-md-6 col-sm-12">
                            <label htmlFor="subcategory">Subcategory</label>
                            <div className="input-icon">
                                <select {...register("subcategory")} name="subcategory">
                                    <option>Select Subcategory</option>
                                    {subcategoryJob?.data?.map((subcategory: any) => <option key={subcategory._id}
                                                                                             value={subcategory._id}>{subcategory.name}</option>)}
                                </select>
                            </div>
                            <ErrorText name='subcategory' errors={errors}/>
                        </div>

                        <div className="form-group col-md-6 col-sm-12">
                            <label htmlFor="education">Education</label>
                            <div className="input-icon">
                                <input {...register("education")} name="education" placeholder='education'/>
                                {/*<select {...register("education")} name="category">*/}
                                {/*    <option value="Under Graduate">Under Graduate</option>*/}
                                {/*    <option value="Any Relevant Field">Any Relevant Field</option>*/}
                                {/*    <option value="CSE">CSE</option>*/}
                                {/*    <option value='other'>Other</option>*/}
                                {/*</select>*/}
                            </div>

                            {educationOthers === 'other' && <div>
                              <label htmlFor="other">Other Education</label>
                              <div className="input-icon">
                                <input
                                  name="other"
                                  type="text"
                                  placeholder="Other Skill"
                                  {...register("other")}
                                />
                              </div>
                            </div>}

                            <ErrorText name='education' errors={errors}/>
                        </div>

                        <div className="form-group col-md-6 col-sm-12">
                            <label htmlFor="jobLocationType">Job Location</label>
                            <div className="input-icon">
                                <select {...register("jobLocationType")} name="jobLocationType" placeholder="Full-time">
                                    <option value="On-site">On-site</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>
                            <ErrorText name='jobLocationType' errors={errors}/>
                        </div>
                        <div className="form-group col-md-6 col-sm-12">
                            <label htmlFor="salaryFrom">Min Salary</label>
                            <div className="input-icon">
                                <input {...register("salaryFrom")} type="text" name="salaryFrom"
                                       placeholder="Min Salary"/>
                            </div>
                            <ErrorText name='salaryFrom' errors={errors}/>
                        </div>

                        <div className="form-group col-md-6 col-sm-12">
                            <label htmlFor="salaryTo">Max Salary</label>
                            <div className="input-icon">
                                <input {...register("salaryTo")} type="text" name="salaryTo" placeholder="Max Salary"/>
                            </div>
                            <ErrorText name='salaryTo' errors={errors}/>
                        </div>

                        <div className="form-group col-md-6 col-sm-12">
                            <label htmlFor="minimumExperience">Experience</label>
                            <div className="input-icon">
                                <select {...register("minimumExperience")} name="minimumExperience" placeholder="0-2yr">
                                    <option value="0-2 years">0 - 02 years</option>
                                    <option value="2-5 years">02 - 05 years</option>
                                    <option value="7+ years">7+ Years</option>
                                </select>
                            </div>
                            <ErrorText name='minimumExperience' errors={errors}/>
                        </div>

                        <div className="form-group col-md-6  col-sm-12">
                            <label htmlFor="skills">Skills</label>
                            <div className="input-icon">
                                <input {...register("skills")} type="text" name="skills" placeholder="Skills"/>
                            </div>
                            <ErrorText name='skills' errors={errors}/>
                        </div>
                        <div className="form-group col-md-6 col-sm-12">
                            <label htmlFor="publishDate">Published Date</label>
                            <div className="input-icon">
                                <input
                                    {...register("publishDate")}
                                    type="date"
                                    name="publishDate"
                                    placeholder="Start"
                                />
                            </div>
                            <ErrorText name="publishDate" errors={errors}/>
                        </div>
                        <div className="form-group col-md-6 col-sm-12">
                            <label htmlFor="expiryDate">Expire Date</label>
                            <div className="input-icon">
                                <input
                                    {...register("expiryDate")}
                                    type="date"
                                    name="expiryDate"
                                    placeholder="Start"
                                />
                            </div>
                            <ErrorText name="expiryDate" errors={errors}/>
                        </div>
                        <div className="form-group col-md-6  col-sm-12">
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
                        <div className="form-group col-md-6  col-sm-12">
                            <label htmlFor="additionalRequirements">Additional Requirements</label>
                            <div className="input-icon">
                                    <textarea
                                        {...register("additionalRequirements")}
                                        name="additionalRequirements"
                                        placeholder="Additional Requirements"
                                        rows={10}
                                    />
                            </div>
                            <ErrorText name="additionalRequirements" errors={errors}/>
                        </div>
                        <div className="form-group col-md-6  col-sm-12">
                            <label htmlFor="responsibilities">Responsibilities</label>
                            <div className="input-icon">
                                    <textarea
                                        {...register("responsibilities")}
                                        name="responsibilities"
                                        placeholder="Responsibilities"
                                        rows={10}
                                    />
                            </div>
                            <ErrorText name="responsibilities" errors={errors}/>
                        </div>
                        <div className="form-group col-md-6  col-sm-12">
                            <label htmlFor="benefits">Benefits</label>
                            <div className="input-icon">
                                    <textarea
                                        {...register("benefits")}
                                        name="benefits"
                                        placeholder="Benefits"
                                        rows={10}
                                    />
                            </div>
                            <ErrorText name="benefits" errors={errors}/>
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

export default JobForm;
