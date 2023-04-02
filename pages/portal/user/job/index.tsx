import {UserPortalLayout} from "../../../../layouts";
import {DefaultCard, TitleCard} from "../../../../components/cards";
import Link from "next/link";
import {useRouter} from "next/router";
import {useState} from "react";


const Job = () => {
    const router = useRouter();
    const [showFilterSection, setShowFilterSection] = useState(false);
    return (
        <>
            <UserPortalLayout>

                <TitleCard title="Job">
                </TitleCard>
                <DefaultCard>
                    <div className="all-jobs">
                        <section className="job-post-section">
                            <h2 className="show-jobs-result">Showing 48 Jobs</h2>
                            <button onClick={() => setShowFilterSection(!showFilterSection)} className="show-filter-btn "><i className='bx bx-filter-alt'></i> Filter</button>

                            <div className="jobs">
                                <div className="job card">
                                    <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png" alt="" className="company-logo" />
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
                                         <button className="btn apply-btn">   <Link href=''>Apply now</Link></button>
                                         <button className="btn message-btn">  <Link href={router.pathname+'/details'} >Details </Link></button>

                                        </div>
                                </div>
                                <div className="job card">
                                    <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png" alt="" className="company-logo" />
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
                                    <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png" alt="" className="company-logo" />
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
                                    <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png" alt="" className="company-logo" />
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
                                    <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png" alt="" className="company-logo" />
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
                                    <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png" alt="" className="company-logo" />
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
                                    <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png" alt="" className="company-logo" />
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
                                    <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png" alt="" className="company-logo" />
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
                                    <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png" alt="" className="company-logo" />
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
                                    <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png" alt="" className="company-logo" />
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
                                    <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png" alt="" className="company-logo" />
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
                                    <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png" alt="" className="company-logo" />
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

                        </section>


                        <section className={`job-filtering-section ${showFilterSection && 'show-filter'}`}>
                            <div className="filter-bar">
                                <i className='bx bx-x icon' id="close-filter"></i>

                                <div className="employement divider">
                                    <h4 className="filter-title">Type of Employment</h4>
                                    <ul>
                                        <li><a href="#">
                            <span className="check-box">
                                <input type="checkbox" name="fulltime" id="" />
                                <label htmlFor="fulltime">Full time jobs</label>
                            </span>
                                        </a></li>
                                        <li><a href="#">
                            <span className="check-box">
                                <input type="checkbox" name="parttime" id="" />
                                <label htmlFor="parttime">Part time jobs</label>
                            </span>
                                        </a></li>
                                        <li><a href="#">
                            <span className="check-box">
                                <input type="checkbox" name="remote" id="" />
                                <label htmlFor="remote">Remote Jobs</label>
                            </span>
                                        </a></li>
                                        <li><a href="#">
                            <span className="check-box">
                                <input type="checkbox" name="internship" id="" />
                                <label htmlFor="internship">Internship Jobs</label>
                            </span>
                                        </a></li>
                                        <li><a href="#">
                            <span className="check-box">
                                <input type="checkbox" name="contract" id="" />
                                <label htmlFor="contract">Contract</label>
                            </span>
                                        </a></li>
                                        <li><a href="#">
                            <span className="check-box">
                                <input type="checkbox" name="training" id="" />
                                <label htmlFor="training">Training</label>
                            </span>
                                        </a></li>
                                    </ul>
                                </div>

                                <div className="employement divider">
                                    <h4 className="filter-title">Type of Employment</h4>
                                    <ul>
                                        <li><a href="#">
                            <span className="check-box">
                                <input type="checkbox" name="fulltime" id="" />
                                <label htmlFor="fulltime">Full time jobs</label>
                            </span>
                                        </a></li>
                                        <li><a href="#">
                            <span className="check-box">
                                <input type="checkbox" name="parttime" id="" />
                                <label htmlFor="parttime">Part time jobs</label>
                            </span>
                                        </a></li>
                                        <li><a href="#">
                            <span className="check-box">
                                <input type="checkbox" name="remote" id="" />
                                <label htmlFor="remote">Remote Jobs</label>
                            </span>
                                        </a></li>
                                        <li><a href="#">
                            <span className="check-box">
                                <input type="checkbox" name="internship" id="" />
                                <label htmlFor="internship">Internship Jobs</label>
                            </span>
                                        </a></li>
                                        <li><a href="#">
                            <span className="check-box">
                                <input type="checkbox" name="contract" id="" />
                                <label htmlFor="contract">Contract</label>
                            </span>
                                        </a></li>
                                        <li><a href="#">
                            <span className="check-box">
                                <input type="checkbox" name="training" id="" />
                                <label htmlFor="training">Training</label>
                            </span>
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </DefaultCard>
            </UserPortalLayout>
        </>
    );
}

export default Job
