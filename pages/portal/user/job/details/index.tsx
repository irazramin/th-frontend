import {UserPortalLayout} from "../../../../../layouts";
import {DefaultCard, TitleCard} from "../../../../../components/cards";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBriefcase, faClock, faLocationDot, faMoneyCheckDollar} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


const JobDetails = () => {
    return (
        <>
            <UserPortalLayout>
                <TitleCard title="Job Details">
                </TitleCard>
                <DefaultCard>
                    <div className='job-details-section'>
                        <div className="details-header">
                            <div className="details-contents">
                                <div className='company-logo'>
                                    <img
                                        src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                                        alt=""/>
                                </div>
                                <div className="company-details">
                                    <h3 className='company-name'>XYZ Company</h3>
                                    <h4 className='job-title'>Software Engineer</h4>
                                </div>
                            </div>

                            <div className="job-others-info">
                                <div className="info-cards">
                                    <div className="info-card ">
                                        <h4 className="title">Vacancy</h4>
                                        <h2 className="content">10</h2>
                                    </div>
                                    <div className="info-card ">
                                        <h4 className="title">Salary</h4>
                                        <h2 className="content">$20000-30000</h2>
                                    </div>
                                    <div className="info-card ">
                                        <h4 className="title">Min.Exp</h4>
                                        <h2 className="content">03-05yr</h2>
                                    </div>
                                    <div className="info-card ">
                                        <h4 className="title">Job Type</h4>
                                        <h2 className="content">Full-time</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="details-body">
                            <div className="job-description">
                                <h4>Job Description</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, beatae culpa cupiditate
                                    eos est eveniet fugiat iste laudantium maxime minima neque obcaecati officia porro
                                    quae quisquam similique tempore temporibus. Debitis molestias mollitia non obcaecati
                                    qui vitae voluptate. In, nesciunt, quam! Architecto commodi distinctio doloribus, ea
                                    error illum ipsam placeat sunt unde veniam. Aliquid aperiam aut commodi consequuntur
                                    dolorem eum hic laudantium nam nulla odio optio perferendis possimus praesentium
                                    provident, quae quasi, reiciendis rem rerum saepe sequi tempore veritatis,
                                    voluptate. Ab asperiores assumenda beatae deleniti, dolores dolorum, eum, illum
                                    maiores natus numquam perferendis perspiciatis quia reprehenderit veniam vitae?
                                    Expedita, facilis, ut?</p>
                            </div>
                            <div className="apply-now">
                                <button className='apply-job-btn'>Apply now</button>
                                <div className="job-summary">
                                    <div className="job-summary-header">
                                        <p>Job summary</p>
                                    </div>
                                    <div className="job-summary-body">
                                        <ul>
                                            <li>
                                                <FontAwesomeIcon icon={faLocationDot}/>
                                                <div>
                                                    <p>Location</p>
                                                    <span>Dhaka, Bangladesh</span>
                                                </div>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faBriefcase}/>
                                                <div>
                                                    <p>Job Type</p>
                                                    <span>Full time</span>
                                                </div>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faMoneyCheckDollar}/>
                                                <div>
                                                    <p>Salary</p>
                                                    <span>$30k-40k</span>
                                                </div>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faClock}/>
                                                <div>
                                                    <p>Job Posted</p>
                                                    <span>2 days ago</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="similar-jobs">
                            <div className="title"><p>Similar jobs</p></div>
                            <div className="jobs">
                                <div className="job card">
                                    <img
                                        src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                                        alt="" className="company-logo"/>
                                    <h3 className="job-title">UI/UX Designer</h3>
                                    <p className="job-descriptions">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima hic
                                        labore nam adipisci iste amet, suscipit molestiae voluptates fuga.
                                    </p>
                                    <div className="job-details">
                                        <span className="chip job-timing">Fulltime</span>
                                        <span className="chip job-location-type">Onsite</span>
                                        <span className="chip job-position">Entry Level</span>
                                    </div>
                                    <div className="job-post-action-btn">
                                        <button className="btn apply-btn"><Link href=''>Apply now</Link></button>
                                        <button className="btn message-btn"><Link href=''>Details </Link></button>

                                    </div>
                                </div>
                                <div className="job card">
                                    <img
                                        src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                                        alt="" className="company-logo"/>
                                    <h3 className="job-title">UI/UX Designer</h3>
                                    <p className="job-descriptions">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima hic
                                        labore nam adipisci iste amet, suscipit molestiae voluptates fuga.
                                    </p>
                                    <div className="job-details">
                                        <span className="chip job-timing">Fulltime</span>
                                        <span className="chip job-location-type">Onsite</span>
                                        <span className="chip job-position">Entry Level</span>
                                    </div>
                                    <div className="job-post-action-btn">
                                        <button className="btn apply-btn">Apply now</button>
                                        <button className="btn message-btn">Details</button>

                                    </div>
                                </div>

                                <div className="job card">
                                    <img
                                        src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                                        alt="" className="company-logo"/>
                                    <h3 className="job-title">UI/UX Designer</h3>
                                    <p className="job-descriptions">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima hic
                                        labore nam adipisci iste amet, suscipit molestiae voluptates fuga.
                                    </p>
                                    <div className="job-details">
                                        <span className="chip job-timing">Fulltime</span>
                                        <span className="chip job-location-type">Onsite</span>
                                        <span className="chip job-position">Entry Level</span>
                                    </div>
                                    <div className="job-post-action-btn">
                                        <button className="btn apply-btn">Apply now</button>
                                        <button className="btn message-btn">Details</button>

                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </DefaultCard>
            </UserPortalLayout>
        </>
    );
}

export default JobDetails
