import Link from "next/link";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {callApi} from "../../../slices/apiSlice";
import {HttpHethod} from "../../../constants";
import {UrlHelper} from "../../../helpers";
import {DefaultCard} from "../../../components/cards";
import {AppDispatch, RootState} from "../../../store";

const ResumeComponent = ({resumeEndpoint = 'api/v1/user/profile'}) => {
    const dispatch = useDispatch<AppDispatch>();

    const {userResume = {data: [], meta: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.authMS(resumeEndpoint),
            params: '',
            storeName: 'userResume',
            defaultValue: [],
            showToast: false
        }));
    };

    return (
        <>
            <>

                <DefaultCard>
                    <section className="template">
                        <div className="template-header-bg">
                            <div className="name-positions">
                                <h1 className="person-name">{userResume?.data?.user?.firstName} {userResume?.data?.user?.lastName}</h1>
                                <p>{userResume?.data?.user?.designation ?? 'N/A'}</p>
                            </div>
                        </div>
                        <div className="basic-details">
                            <img
                                src="http://images.assetsdelivery.com/compings_v2/apoev/apoev1811/apoev181100196.jpg"
                                alt={userResume?.data?.user?.username}
                                className="person-img"
                            />
                            <div className="about">
                                <div className="addresses">
                                    <div className="address">
                                        <i className="bx bx-location-plus icon"></i>
                                        <span>{userResume?.data?.user?.presentAddress ?? 'N/A'}</span>

                                    </div>
                                    <div className="address">
                                        <i className="bx bx-phone icon"></i>
                                        <span>{userResume?.data?.user?.phone ?? 'N/A'}</span>
                                    </div>
                                    <div className="address">
                                        <i className="bx bx-envelope icon"></i>
                                        <span>{userResume?.data?.user?.email ?? 'N/A'}</span>
                                    </div>
                                    <div className="address">
                                        <i className="bx bx-world icon"></i>
                                        <span>{userResume?.data?.user?.website ?? 'N/A'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="resume-body">
                            <div className="career-objective">
                                <h4>Career Objective</h4>
                                <p>
                                    {userResume?.data?.user?.careerObjective?.slice(0, 700)}
                                </p>
                            </div>

                            <div className="skills-section">
                                <h4>Skills</h4>
                                <div className="skills">
                                    {
                                        userResume?.data?.skill?.map((s: any) => <div className="skill">
                                            <div className="skill-details">
                                                <span className="skill-name">{s.skill}</span>
                                                <span className="skill-percentage">{s.proficiency}%</span>
                                            </div>
                                            <div className="progress-bar">
                                                <div className="progress" style={{width: `${s.proficiency}%`}}></div>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>

                            <div className="job-experience">
                                <h4>Job Experiences</h4>
                                <ul className="experiences">
                                    {userResume?.data?.work?.map((job: any) => <li>
                                        <h5>
                                            <span className="position">{job?.designation}</span>
                                            <span className="years">{new Date(job.start).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })} - {new Date(job.end).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}</span>
                                        </h5>
                                        <h6>
                                                <span className="company-name">{job.organization}</span
                                                ><span className="city">{job.address}</span>
                                        </h6>
                                        <p className="description">
                                            {job.responsibilities}
                                        </p>
                                    </li>)}
                                </ul>
                            </div>

                            <div className="education-section">
                                <h4>Education</h4>
                                <ul className="education">
                                    {userResume?.data?.education?.map((edu: any) => <li>

                                        <h5>
                                            <span className="degree">{edu.degree} in {edu.course}</span>
                                        </h5>
                                        <span className="years"><span
                                            className="years">{new Date(edu.start).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })} - {new Date(edu.end).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}</span></span>
                                        <h6>
                                              <span className="university-name">{edu.institute}</span
                                              ><span className="city">{edu.address}</span>
                                        </h6>
                                    </li>)}
                                </ul>
                            </div>

                            <div className="job-experience">
                                <h4>Projects</h4>
                                <ul className="experiences">
                                    {userResume?.data?.project?.map((pro: any) => <li>
                                        <h5>
                                            <span className="position">{pro?.name}</span>
                                            <span className="years">{new Date(pro.start).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })} - {new Date(pro.end).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}</span>
                                        </h5>
                                        <h6>
                                            <span className="company-name">{pro.organization}</span>
                                            <span className="city">
                                                <Link target="_blank" href={pro.githubLink}
                                                      rel="noopener noreferrer">{pro.name}</Link> |
                                                 <Link href={pro.previewLink} target="_blank"
                                                       rel="noopener noreferrer">Live</Link>
                                            </span>
                                        </h6>
                                        <p className="description">
                                            {pro.description}
                                        </p>
                                    </li>)}
                                </ul>
                            </div>

                            <div className="skills-section">
                                <h4>Skills</h4>
                                <div className="skills">
                                    {
                                        userResume?.data?.language?.map((lang: any) => <div className="skill">
                                            <div className="skill-details">
                                                <span className="skill-name">{lang.language}</span>
                                                <span className="skill-percentage">{lang.proficiency}%</span>
                                            </div>
                                            <div className="progress-bar">
                                                <div className="progress" style={{width: `${lang.proficiency}%`}}></div>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>

                            <div className="interest-section">
                                <h4>Interest</h4>
                                <ul className="experiences">
                                    {userResume?.data?.interest?.map((i: any) => <li>
                                        {i.interest}
                                    </li>)}
                                </ul>
                            </div>

                            <div className="job-experience">
                                <h4>References</h4>
                                <ul className="experiences">
                                    {userResume?.data?.reference?.map((ref: any) => <li>
                                        <h5>
                                            <span className="position">{ref?.firstName} {ref?.lastName}</span>
                                            <span className="years">{ref?.designation}, {ref?.organization}</span>
                                        </h5>
                                        <h6>
                                                <span className="company-name">{ref.email}</span
                                                ><span className="city">{ref.phone}</span>
                                        </h6>
                                    </li>)}
                                </ul>
                            </div>
                        </div>
                    </section>
                </DefaultCard>
            </>
        </>
    );
}

export default ResumeComponent
