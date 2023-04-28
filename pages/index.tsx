import {ButtonDarkSm, ButtonGreenMd, ButtonGreenSm} from "../components/buttons";
import {LandingLayout} from "../layouts";
import React, {useState} from "react";
import {faBars, faBriefcase, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Link from "next/link";

const Home = () => {
    const [showNav, setShowNav] = useState(false)
    return (
        <LandingLayout>
            <div>
                <nav className={`landing-nav ${showNav ? 'show' : ''}`}>
                    <div className="logo">
                        <FontAwesomeIcon onClick={() => setShowNav(!showNav)} icon={faBars} className='toggle-bar'/>
                        <a href="#">
                            <img className='brand-logo' src="/project-logo.png" alt=""/>
                        </a>
                    </div>
                    <div className="nav-items">
                        <ul>
                            <li><a href="#hero-section">Home</a></li>
                            <li><a href="#find-job">Find Jobs</a></li>
                            <li><a href="#categories">Categories</a></li>
                            <li><a href="#candidate">Candidate</a></li>
                            <li><a href="#offer">Offer</a></li>
                        </ul>
                    </div>
                    <div className="auth-actions-btn">
                        <div className="auth-btns">
                            <Link href='/login'> <ButtonGreenSm>Login</ButtonGreenSm></Link>
                            <Link href='/registration'> <ButtonGreenSm>Sign up</ButtonGreenSm></Link>
                            {false && <ButtonGreenSm>Go to dashboard</ButtonGreenSm>}
                        </div>
                    </div>
                </nav>
                <section className='hero-section' id='hero-section'>
                    <div className="hero-content">
                        <img src="/landing-page-bg.svg" alt=""/>
                    </div>
                    <div className="hero-content">
                        <div>
                            <h1>Find your next job, First<span
                                style={{color: "var(--green)", fontSize: "60px"}}>.</span></h1>
                            <p>Search by skill, view salaries, one click apply</p>
                            <div className="search-items">
                                <form action="#">
                                    <div className="form-group">
                                        <input type="text" placeholder="UX Designer"/>
                                        <FontAwesomeIcon icon={faBriefcase} className='icon'/>
                                    </div>
                                    <button className='search-btn'><FontAwesomeIcon icon={faSearch}/></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="popular-section landing-section" id='find-job'>
                    <h2 className='section-title'>Popular Jobs<span style={{color: "var(--green)"}}>.</span></h2>
                    <p className='section-subtitle'>Find your dream job.</p>
                    <div className="popular-job">
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
                        <div className="see-more">
                            <ButtonGreenMd>View all jobs</ButtonGreenMd>
                        </div>
                    </div>
                </section>
                <section id='categories' className="popular-category-section landing-section">
                    <h2 className='section-title'>Popular Categories<span style={{color: "var(--green)"}}>.</span></h2>
                    <p className='section-subtitle'>Find jobs from various domains.</p>
                    <div className="popular-category">
                        <div className="categories">
                            <div className="category card">
                                <img
                                    src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                                    alt="" className="company-logo"/>
                                <h3 className="job-title">UI/UX Designer</h3>
                                <p>30 jobs</p>
                            </div>
                            <div className="category card">
                                <img
                                    src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                                    alt="" className="company-logo"/>
                                <h3 className="job-title">UI/UX Designer</h3>
                                <p>30 jobs</p>
                            </div>
                            <div className="category card">
                                <img
                                    src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                                    alt="" className="company-logo"/>
                                <h3 className="job-title">UI/UX Designer</h3>
                                <p>30 jobs</p>


                            </div>
                            <div className="category card">
                                <img
                                    src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                                    alt="" className="company-logo"/>
                                <h3 className="job-title">UI/UX Designer</h3>
                                <p>30 jobs</p>

                            </div>
                            <div className="category card">
                                <img
                                    src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                                    alt="" className="company-logo"/>
                                <h3 className="job-title">UI/UX Designer</h3>
                                <p>30 jobs</p>
                            </div>
                            <div className="category card">
                                <img
                                    src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                                    alt="" className="company-logo"/>
                                <h3 className="job-title">UI/UX Designer</h3>
                                <p>30 jobs</p>
                            </div>
                            <div className="category card">
                                <img
                                    src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                                    alt="" className="company-logo"/>
                                <h3 className="job-title">UI/UX Designer</h3>
                                <p>30 jobs</p>


                            </div>
                            <div className="category card">
                                <img
                                    src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                                    alt="" className="company-logo"/>
                                <h3 className="job-title">UI/UX Designer</h3>
                                <p>30 jobs</p>

                            </div>
                        </div>
                        <div className="see-more">
                            <ButtonGreenMd>View all categories</ButtonGreenMd>
                        </div>
                    </div>
                </section>
                <section id='candidate' className="top-candidate-section landing-section">
                    <h2 className='section-title'>Featured Candidate<span style={{color: "var(--green)"}}>.</span></h2>
                    <p className='section-subtitle'>Searching for Talents has been easy.</p>
                    <div className="top-candidate">
                        <div className="candidates">
                            <div className="candidate card">
                                <img
                                    src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                                    alt="" className="candidate-img"/>
                                <h3 className="candidate-name">John deo</h3>
                                <p className='job-position-title'>Product Designer</p>
                                <div className="candidate-details">
                                    <span className="chip job-timing">UI/UX</span>
                                    <span className="chip job-location-type">3D</span>
                                    <span className="chip job-position">Web Developer</span>
                                </div>
                                <div className="candidate-action-btn btn">
                                    <ButtonGreenSm>View Profile</ButtonGreenSm>
                                    <ButtonDarkSm>Message</ButtonDarkSm>
                                </div>
                            </div>
                            <div className="candidate card">
                                <img
                                    src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                                    alt="" className="candidate-img"/>
                                <h3 className="candidate-name">John deo</h3>
                                <p className='job-position-title'>Product Designer</p>
                                <div className="candidate-details">
                                    <span className="chip job-timing">UI/UX</span>
                                    <span className="chip job-location-type">3D</span>
                                    <span className="chip job-position">Web Developer</span>
                                </div>
                                <div className="candidate-action-btn btn">
                                    <ButtonGreenSm>View Profile</ButtonGreenSm>
                                    <ButtonDarkSm>Message</ButtonDarkSm>
                                </div>
                            </div>
                            <div className="candidate card">
                                <img
                                    src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                                    alt="" className="candidate-img"/>
                                <h3 className="candidate-name">John deo</h3>
                                <p className='job-position-title'>Product Designer</p>
                                <div className="candidate-details">
                                    <span className="chip job-timing">UI/UX</span>
                                    <span className="chip job-location-type">3D</span>
                                    <span className="chip job-position">Web Developer</span>
                                </div>
                                <div className="candidate-action-btn btn">
                                    <ButtonGreenSm>View Profile</ButtonGreenSm>
                                    <ButtonDarkSm>Message</ButtonDarkSm>
                                </div>
                            </div>
                        </div>
                        <div className="see-more">
                            <ButtonGreenMd>View all jobs</ButtonGreenMd>
                        </div>
                    </div>
                </section>

                <section id='offer' className="offer-section landing-section">
                    <h2 className='section-title'>What we offer<span style={{color: "var(--green)"}}>.</span></h2>
                    <p className='section-subtitle'>Offering the best deal.</p>
                    <div className="we-offer">
                        <div className="offers">

                            <div className="offer card">
                                <img src="/landing/job-search.png" alt="" className="company-logo"/>
                                <h3 className="offer-title">Searching for best jobs</h3>
                                <p className="offer-descriptions">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima hic
                                    labore nam adipisci iste amet, suscipit molestiae voluptates fuga.
                                </p>
                            </div>
                            <div className="offer card">
                                <img src="/landing/apply.png" alt="" className="company-logo"/>
                                <h3 className="offer-title">Apply for a good jobs</h3>
                                <p className="offer-descriptions">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima hic
                                    labore nam adipisci iste amet, suscipit molestiae voluptates fuga.
                                </p>
                            </div>
                            <div className="offer card">
                                <img src="/landing/quality.png" alt="" className="company-logo"/>
                                <h3 className="offer-title">More quality hires</h3>
                                <p className="offer-descriptions">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima hic
                                    labore nam adipisci iste amet, suscipit molestiae voluptates fuga.
                                </p>
                            </div>
                            <div className="offer card">
                                <img src="/landing/working-time.png" alt="" className="company-logo"/>
                                <h3 className="offer-title">Choose working hours</h3>
                                <p className="offer-descriptions">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima hic
                                    labore nam adipisci iste amet, suscipit molestiae voluptates fuga.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer-distributed">

                    <div className="footer-left">

                        <h3>Talenthub</h3>

                        <p className="footer-links">
                            <a href="#hero-section">Home</a>
                            <a href="#find-job">Find Jobs</a>
                            <a href="#categories">Categories</a>
                            <a href="#candidate">Candidate</a>
                            <a href="#offer">Offer</a>
                        </p>

                        <p className="footer-company-name">Talent hub © 2015</p>
                    </div>

                    <div className="footer-center">

                        <div>
                            <i className="fa fa-map-marker"></i>
                            <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
                        </div>

                        <div>
                            <i className="fa fa-phone"></i>
                            <p>+1.555.555.5555</p>
                        </div>

                        <div>
                            <i className="fa fa-envelope"></i>
                            <p><a href="mailto:support@company.com">support@company.com</a></p>
                        </div>

                    </div>

                    <div className="footer-right">

                        <p className="footer-company-about">
                            <span>About the company</span>
                            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu
                            auctor lacus vehicula sit amet.
                        </p>

                        <div className="footer-icons">

                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                            <a href="#"><i className="fa fa-github"></i></a>

                        </div>

                    </div>

                </footer>
            </div>
        </LandingLayout>
    );
}

export default Home
