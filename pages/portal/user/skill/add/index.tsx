import {AdminPortalLayout, UserPortalLayout} from "../../../../../layouts";
import {ButtonGreenMd, ButtonGreenSm} from "../../../../../components/buttons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {DefaultCard, TitleCard} from "../../../../../components/cards";
import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../../store";
import ErrorText from "../../../../../components/texts/ErrorText";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {callApi} from "../../../../../slices/apiSlice";
import {HttpHethod} from "../../../../../constants";
import {UrlHelper} from "../../../../../helpers";


enum ProficiencyEnum {
    one = "10",
    two = "20",
    three = "30",
    four = "40",
    five = "50",
    six = "60",
    seven = "70",
    eight = "80",
    nine = "90",
    ten = "100",
}

interface IFormInput {
    skill: String,
    proficiency: ProficiencyEnum,

}

const Add = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormInput>({
        criteriaMode: "all",
        resolver: yupResolver(yup.object().shape({
            skill: yup.string().required("Skill is required"),
            proficiency: yup.string().required("proficiency is required"),
        }))
    });


    const {isLoading = false, userSkillList = {data: [], meta: null}} = useSelector(
        (state: RootState) => state.callApi
    );

    const onsubmit: SubmitHandler<IFormInput> = (data) => {
        console.log('data')
        dispatch(callApi({
            method: HttpHethod.POST,
            url: UrlHelper.authMS('api/v1/user-skill'),
            storeName: 'userSkill',
            body: data,
            defaultValue: null,
            showToast: true
        }));
        if(userSkillList?.code) {
            reset();
        }
    };
    return (
        <>
            <UserPortalLayout>
                <TitleCard title="Add">
                    <ButtonGreenSm onClick={() => router.back()} icon={faArrowLeft}>Back</ButtonGreenSm>
                </TitleCard>
                <DefaultCard>
                    <div className="add-items">
                        <form onSubmit={handleSubmit(onsubmit)}>
                            <div className="form-group">
                                <label htmlFor="skill">Skill</label>
                                <div className="input-icon">
                                    <input
                                        {...register("skill")}
                                        type="text"
                                        name="skill"
                                        placeholder="Skill"
                                    />
                                </div>
                                <ErrorText name="skill" errors={errors}/>
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
                </DefaultCard>
            </UserPortalLayout>
        </>
    );
}

export default Add