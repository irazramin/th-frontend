import React, {useEffect} from 'react';
import ErrorText from "../../../components/texts/ErrorText";
import {ButtonGreenMd} from "../../../components/buttons";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store";
import {callApi} from "../../../slices/apiSlice";
import {HttpHethod} from "../../../constants";
import {UrlHelper} from "../../../helpers";

const LanguageForm = ({register, errors, editMode = false, onSubmit}: any) => {
    const dispatch = useDispatch<AppDispatch>();
    const {languages = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );
    useEffect(() => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.coreMS('api/v1/language'),
            storeName: 'languages',
            defaultValue: null
        }));
    }, []);
    return (
        <div>
            <div className="add-items">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="language">Language</label>
                        <div className="input-icon">
                            <select {...register("language")} name="language">
                                <option>Select Language</option>
                                {languages?.data?.map((language: any) => <option key={language._id}
                                                                                 value={language.name}>{language.name}</option>)}
                            </select>
                        </div>
                        <ErrorText name="language" errors={errors}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="proficiency">Proficiency</label>
                        <div className="input-icon">
                            <select {...register("proficiency")}>
                                <option value="">Select</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="40">40</option>
                                <option value="50">50</option>
                                <option value="60">60</option>
                                <option value="70">70</option>
                                <option value="80">80</option>
                                <option value="90">90</option>
                                <option value="100">100</option>
                            </select>
                        </div>
                        <ErrorText name="proficiency" errors={errors}/>
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
