import React, { Component } from 'react';
import './App.css';
import './assets/css/animate.css';
import './assets/css/bootsnav.css';
import './assets/css/bootstrap.min.css';
import './assets/css/flaticon.css';
import './assets/css/font-awesome.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/responsive.css';
import './assets/css/style.css';
import './assets/js/bootsnav.js';
import './assets/js/bootstrap.min.js';
import './assets/js/custom.js';
import './assets/js/jquery.appear.js';
import './assets/js/jquery.sticky.js';
import './assets/js/owl.carousel.min.js';
import './assets/js/progressbar.js';
import me from'./assets/images/about/profile_image.jpg';
import wp from './assets/images/portfolio/wp.gif';
import td from'./assets/images/portfolio/td.gif';
import gm from'./assets/images/portfolio/gm.gif';
import hn from './assets/images/portfolio/hn.gif';
import bmi from './assets/images/portfolio/bmi.gif';
import bc from './assets/images/portfolio/bc.gif';
import thesis from './assets/images/clients/st.jpeg';
import speech from './assets/images/clients/speech.jpg';
import shc from './assets/images/clients/shc.jpg';
import bks from './assets/images/clients/bks.jpg';
import sac from './assets/images/clients/sac.jpg';
import edg from './assets/images/clients/edg.jpg';
import sa from './assets/images/clients/sa.jpg';
import ls from './assets/images/clients/ls.jpg';
import ka from './assets/images/clients/ka.jpg';
import OwlCarousel from 'react-owl-carousel';


// eslint-disable-next-line no-lone-blocks
/*import NavBar from './components/navbar'
import Landing from './components/landing'
import About from './components/about'
import Education from './components/education'
import Skills from './components/skills'
import Experience from './components/experience'
import Profiles from './components/profiles'
import Portfolio from './components/portfolio'*/


class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="top-area">
          <div className="header-area">
            {/* Start Navigation */}
            <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
              <div className="container">
                {/* Start Header Navigation */}
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                    <i className="fa fa-bars" />
                  </button>
                  <a className="navbar-brand" href="index.html">Bridget Baksa</a>
                </div>{/*/.navbar-header*/}
                {/* End Header Navigation */}
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                  <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                    <li className="smooth-menu active" />
                    <li className="smooth-menu"><a href="#education">education</a></li>
                    <li className="smooth-menu"><a href="#skills">skills</a></li>
                    <li className="smooth-menu"><a href="#experience">experience</a></li>
                    <li className="smooth-menu"><a href="#portfolio">portfolio</a></li>
                    <li className="smooth-menu"><a href="#clients">awards & publications</a></li>
                    <li className="smooth-menu"><a href="#contact">contact</a></li>
                  </ul>{/*/.nav */}
                </div>{/* /.navbar-collapse */}
              </div>{/*/.container*/}
            </nav>{/*/nav*/}
            {/* End Navigation */}
          </div>{/*/.header-area*/}
          <div className="clearfix" />
        </header>{/* /.top-area*/}
        {/* top-area End */}
        {/*welcome-hero start */}
        <section id="welcome-hero" className="welcome-hero">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="header-text">
                  <h2 className="animated fadeInUp" style={{opacity: "0"}}>hi<span>,</span> i am <br /> bridget <br /> baksa <span>.</span> </h2>
                  <p className="animated fadeInUp" style={{opacity: "0"}}>full stack software engineer</p>
                  <a href="assets/download/browney.txt" download class="animated fadeInDown" style={{opacity: "0"}}>download resume</a>
                </div>{/*/.header-text*/}
              </div>{/*/.col*/}
            </div>{/* /.row*/}
          </div>{/* /.container*/}
        </section>{/*/.welcome-hero*/}
        {/*welcome-hero end */}
        {/*about start */}
        <section id="about" className="about">
          <div className="section-heading text-center">
            <h2>about me</h2>
          </div>
          <div className="container">
            <div className="about-content">
              <div className="row">
                <div className="animated fadeInLeft col-sm-6" style={{opacity: "0"}}>
                  <div className="single-about-txt">
                    <h3>
                      I am a Professional Full Stack Software Engineer with experience in front-end, back-end, and mobile development.  
                    </h3>
                    <p>
                    Currently I am working as a Mobile Developer at Bank of America creating custom features for the Bank of America / Merrill Lynch suite of Mobile Applications. I have recently graduated as the Valedictorian of the Engineering, Business, and Computing Division at Penn State University. I received a Bachelor's Degree in Information Sciences and Technology, with minors in Business and Security & Risk Analysis. I have published research on spatial clustering algorithms and developed a modified multi-objective spatial clustering algorithm using Python. I have tested the algorithm on the CitiBike bike-sharing application and plan to apply this research to other real-life scenarios, such as redrawing congressional district lines.
                    </p>
                  </div>
                </div>
                <div className="col-sm-offset-1 col-sm-5">
                  <div className="single-about-img">
                    <img src={me} alt="profile_image" />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{/*/.about*/}
        {/*about end */}
        {/*education start */}
        <section id="education" className="education">
          <div className="section-heading text-center">
            <h2>education</h2>
          </div>
          <div className="container">
            <div className="education-horizontal-timeline">
              <div className="row">
                <div className="col-sm-4">
                  <div className="single-horizontal-timeline">
                    <div className="experience-time">
                      <h2>2015 - 2019</h2>
                      <h3>bachelor <span>of </span> science - IST</h3>
                    </div>{/*/.experience-time*/}
                    <div className="timeline-horizontal-border">
                      <i className="fa fa-circle" aria-hidden="true" />
                      <span className="single-timeline-horizontal" />
                    </div>
                    <div className="timeline">
                      <div className="timeline-content">
                        <h4 className="title">
                          Penn State University
                        </h4>
                        <h5>4.0 Cumulative GPA</h5>
                        <p className="description">
                        Dual Minors - Security & Risk Analysis, Business;   
                        Berks Tech Club Executive Board Member;
                        Student Government Association Senator;
                        Valedictorian of the Engineering, Business, and Computing Division;
                        Phi Kappa Phi Member;
                        </p>
                      </div>{/*/.timeline-content*/}
                    </div>{/*/.timeline*/}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-horizontal-timeline">
                    <div className="experience-time">
                      <h2>2015 - 2019</h2>
                      <h3>Schreyer Honors Scholar</h3>
                    </div>{/*/.experience-time*/}
                    <div className="timeline-horizontal-border">
                      <i className="fa fa-circle" aria-hidden="true" />
                      <span className="single-timeline-horizontal" />
                    </div>
                    <div className="timeline">
                      <div className="timeline-content">
                        <h4 className="title">
                          Schreyer Honors College
                        </h4>
                        <h5>4.0 Cumulative GPA</h5>
                        <p className="description">
                          Schreyer Honors College Scholar & Researcher;
                          Thesis - MOSCH: A MULTI-OBJECTIVE SPATIAL CLUSTERING ALGORITHM WITH CONSTRAINT-HANDLING METHODS
                        </p>
                      </div>{/*/.timeline-content*/}
                    </div>{/*/.timeline*/}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-horizontal-timeline">
                    <div className="experience-time">
                      <h2>2011 - 2015</h2>
                      <h3>advanced studies HS diploma</h3>
                    </div>{/*/.experience-time*/}
                    <div className="timeline-horizontal-border">
                      <i className="fa fa-circle" aria-hidden="true" />
                      <span className="single-timeline-horizontal" />
                    </div>
                    <div className="timeline">
                      <div className="timeline-content">
                        <h4 className="title">
                          Blue Mountain Academy
                        </h4>
                        <h5>3.8 Cumulative GPA</h5>
                        <p className="description">
                          Vice President of the Junior and Senior Class;
                          Board Memeber of the National Honors Society;
                          Magna Cum Laude;
                        </p>
                      </div>{/*/.timeline-content*/}
                    </div>{/*/.timeline*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{/*/.education*/}
        {/*education end */}
        {/*skills start */}
        <section id="skills" className="skills">
          <div className="skill-content">
            <div className="section-heading text-center">
              <h2>skills</h2>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="single-skill-content">
                    <div className="barWrapper">
                      <span className="progressText">Flutter + Dart</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={10} aria-valuemax={100} style={{ width: '90%'}}>
                          </div>
                        </div>
                        <h3>90%</h3>	
                      </div>
                    </div>{/* /.barWrapper */}
                    <div className="barWrapper">
                      <span className="progressText">Swift</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={10} aria-valuemax={100} style={{width: '85%'}}>
                          </div>
                        </div>
                        <h3>85%</h3>	
                      </div>
                    </div>{/* /.barWrapper */}
                    <div className="barWrapper">
                      <span className="progressText">Java</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div className="progress-bar" role="progressbar" aria-valuenow={97} aria-valuemin={10} aria-valuemax={100} style={{width: '97%'}}>
                          </div>
                        </div>
                        <h3>97%</h3>	
                      </div>
                    </div>{/* /.barWrapper */}
                    <div className="barWrapper">
                      <span className="progressText">JavaScript</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={10} aria-valuemax={100} style={{width: '90%'}}>
                          </div>
                        </div>
                        <h3>90%</h3>	
                      </div>
                    </div>{/* /.barWrapper */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-skill-content">
                    <div className="barWrapper">
                      <span className="progressText">Python</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={10} aria-valuemax={100} style={{width: '90%'}}>
                          </div>
                        </div>
                        <h3>90%</h3>	
                      </div>
                    </div>{/* /.barWrapper */}
                    <div className="barWrapper">
                      <span className="progressText">AI + Machine Learning</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={10} aria-valuemax={100} style={{width: '85%'}}>
                          </div>
                        </div>
                        <h3>85%</h3>	
                      </div>
                    </div>{/* /.barWrapper */}
                    <div className="barWrapper">
                      <span className="progressText">React + React Native</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div className="progress-bar" role="progressbar" aria-valuenow={97} aria-valuemin={10} aria-valuemax={100} style={{width: '97%'}}>
                          </div>
                        </div>
                        <h3>97%</h3>	
                      </div>
                    </div>{/* /.barWrapper */}
                    <div className="barWrapper">
                      <span className="progressText">HTML + CSS</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={10} aria-valuemax={100} style={{width: '90%'}}>
                          </div>
                        </div>
                        <h3>90%</h3>	
                      </div>
                    </div>{/* /.barWrapper */}
                  </div>
                </div>
              </div>{/* /.row */}
            </div>	{/* /.container */}		
          </div>{/* /.skill-content*/}
        </section>{/*/.skills*/}
        {/*skills end */}
        {/*experience start */}
        <section id="experience" className="experience">
          <div className="experience-content">
          <div className="section-heading text-center">
            <h2>experience</h2>
          </div>
          <div className="container">
            <div className="experience-content">
              <div className="main-timeline">
                <ul>
                <li>
                    <div className="single-timeline-box fix">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="experience-time text-right">
                            <h2>Software Engineer (iOS & Android)</h2>
                            <h3>March 2020 - Present</h3>
                          </div>{/*/.experience-time*/}
                        </div>{/*/.col*/}
                        <div className="col-md-offset-1 col-md-5">
                          <div className="timeline">
                            <div className="timeline-content">
                              <h4 className="title">
                                <span><i className="fa fa-circle" aria-hidden="true" /></span>
                                Bank of America
                              </h4>
                              <h5>Boston, MA, USA</h5>
                              <p className="description">
                              Design and develop iOS & Android native applications (Bank of America Private Bank, MyMerrill, MerrillEdge, Benefits OnLine).<br />
                              Rewrite and improve existing code base, impacting 26 million active mobile users.<br />
                              Implement new mobile analytics features, revealing insights such as 1.4 million logins, 137 million bill payments, and 33 million check deposits per quarter. <br />
                              Participate in full app life cycle: concept, design, build, deploy, test and release to app store.<br />
                              Work with product teams on new product ideas, designs, prototypes and estimates.
                              </p>
                            </div>{/*/.timeline-content*/}
                          </div>{/*/.timeline*/}
                        </div>{/*/.col*/}
                      </div>
                    </div>{/*/.single-timeline-box*/}
                  </li>
                  <li>
                    <div className="single-timeline-box fix">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="experience-time text-right">
                            <h2>Software Engineer (Mobile)</h2>
                            <h3>July 2019 - March 2020</h3>
                          </div>{/*/.experience-time*/}
                        </div>{/*/.col*/}
                        <div className="col-md-offset-1 col-md-5">
                          <div className="timeline">
                            <div className="timeline-content">
                              <h4 className="title">
                                <span><i className="fa fa-circle" aria-hidden="true" /></span>
                                Deloitte Digital
                              </h4>
                              <h5>Mechanicsburg, PA, USA</h5>
                              <p className="description">
                              Support development initiatives for cross-platform apps on Agile team of 10+ developers. <br />
                              Implement new UI and logic features using JSX, XML, and CSS.<br />
                              Rewrite and improve existing code base, impacting over 530,000 active users.<br />
                              Research cross-platform frameworks (React Native, Flutter) and lead mobile transition; 
                              </p>
                            </div>{/*/.timeline-content*/}
                          </div>{/*/.timeline*/}
                        </div>{/*/.col*/}
                      </div>
                    </div>{/*/.single-timeline-box*/}
                  </li>
                  <li>
                    <div className="single-timeline-box fix">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="experience-time text-right">
                            <h2>Information Technology Intern</h2>
                            <h3>August 2018 - April 2019</h3>
                          </div>{/*/.experience-time*/}
                        </div>{/*/.col*/}
                        <div className="col-md-offset-1 col-md-5">
                          <div className="timeline">
                            <div className="timeline-content">
                              <h4 className="title">
                                <span><i className="fa fa-circle" aria-hidden="true" /></span>
                                RPA Engineering
                              </h4>
                              <h5>Wyomissing, PA, USA</h5>
                              <p className="description">
                              Provided IT troubleshooting and support for 100+ employee organization<br />
                              Collaborated with leadership to redesign corporate website, increasing traffic by 20%.<br /> 
                              Implemented an on-site data backup solution to replicate cloud computing using NAS and RAID technologies 
                              </p>
                            </div>{/*/.timeline-content*/}
                          </div>{/*/.timeline*/}
                        </div>{/*/.col*/}
                      </div>
                    </div>{/*/.single-timeline-box*/}
                  </li>
                  <li>
                    <div className="single-timeline-box fix">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="experience-time text-right">
                            <h2>Software Engineering Intern</h2>
                            <h3>June 2018 - August 2018</h3>
                          </div>{/*/.experience-time*/}
                        </div>{/*/.col*/}
                        <div className="col-md-offset-1 col-md-5">
                          <div className="timeline">
                            <div className="timeline-content">
                              <h4 className="title">
                                <span><i className="fa fa-circle" aria-hidden="true" /></span>
                                Deloitte
                              </h4>
                              <h5>Mechaincsburg, PA, USA</h5>
                              <p className="description">
                              Developed an exception reporting system using .NET, C#, and SQL, increasing exception viewing and handling by 90%.<br />
                              Facilitated client meetings and communicated with an Agile team of 10+ developers.<br />
                              Created a system database using SQL to track and analyze exception patterns and statistics.<br />
                              Presented solution to client stakeholders and 50+ executive employee audience.<br />
                              </p>
                            </div>{/*/.timeline-content*/}
                          </div>{/*/.timeline*/}
                        </div>{/*/.col*/}
                      </div>
                    </div>{/*/.single-timeline-box*/}
                  </li>
                  <li>
                    <div className="single-timeline-box fix">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="experience-time text-right">
                            <h2>Research Assistant</h2>
                            <h3>August 2017 - May 2018</h3>
                          </div>{/*/.experience-time*/}
                        </div>{/*/.col*/}
                        <div className="col-md-offset-1 col-md-5">
                          <div className="timeline">
                            <div className="timeline-content">
                              <h4 className="title">
                                <span><i className="fa fa-circle" aria-hidden="true" /></span>
                                Penn State University
                              </h4>
                              <h5>Mechaincsburg, PA, USA</h5>
                              <p className="description">
                              Provided professional assistance in SQL and NoSQL courses with 30+ students.<br />
                              Researched NoSQL software and applications to develop a new NoSQL university course.<br />
                              Created lab assignments and quizzes to facilitate learning in MySQL and PostgreSQL.<br />
                              Designed course textbook websites with interactive videos and quizzes using Wordpress and HTML.<br />
                              </p>
                            </div>{/*/.timeline-content*/}
                          </div>{/*/.timeline*/}
                        </div>{/*/.col*/}
                      </div>
                    </div>{/*/.single-timeline-box*/}
                  </li>
                </ul>
              </div>{/*.main-timeline*/}
              </div>
            </div>
          </div>
        </section>{/*/.experience*/}
        {/*experience end */}
        {/*portfolio start */}
        <section id="portfolio" className="portfolio">
            <div className="section-heading text-center">
              <h2>portfolio</h2>
            </div>
            <div className="container">
              <div className="portfolio-content">
                <div className="isotope">
                  <div className="row">
                    <div className="col-sm-4">
                    <a href="https://github.com/bridgetbaksa/Weather-Pets-Flutter" target="_blank" rel="noopener noreferrer">
                      <div className="item">
                        <img src={wp} alt={"portfolio image"} />
                        <div className="isotope-overlay">
                            Weather Pets
                        </div>{/* /.isotope-overlay */}
                      </div>{/* /.item */}
                      </a>
                    </div>{/* /.col */}
                    <div className="col-sm-4">
                    <a href="https://github.com/bridgetbaksa/To-Do-App-Flutter" target="_blank" rel="noopener noreferrer">
                      <div className="item">
                        <img src={td} alt="portfolio image" />
                        <div className="isotope-overlay">
                            To-Do App
                        </div>{/* /.isotope-overlay */}
                      </div>{/* /.item */}
                      </a>
                    </div>{/* /.col */}
                    <div className="col-sm-4">
                    <a href="https://github.com/bridgetbaksa/Google-Office-Locations-Flutter" target="_blank" rel="noopener noreferrer">
                      <div className="item">
                        <img src={gm} alt="portfolio image" />
                        <div className="isotope-overlay">
                            Google Maps
                        </div>{/* /.isotope-overlay */}
                      </div>{/* /.item */}
                      </a>
                    </div>{/* /.col */}
                  </div>{/* /.row */}
                  <div className="row">
                    <div className="col-sm-4">
                    <a href="https://github.com/bridgetbaksa/H4X0R-News-iOS" target="_blank" rel="noopener noreferrer">
                    <div className="item">
                        <img src={hn} alt={"portfolio image"} />
                        <div className="isotope-overlay">
                            H4X0R News
                        </div>{/* /.isotope-overlay */}
                      </div>{/* /.item */}
                      </a>
                    </div>{/* /.col */}
                    <div className="col-sm-4">
                    <a href="https://github.com/bridgetbaksa/BMI-Calculator-iOS" target="_blank" rel="noopener noreferrer">
                    <div className="item">
                        <img src={bmi} alt={"portfolio image"} />
                        <div className="isotope-overlay">
                            BMI Calculator
                        </div>{/* /.isotope-overlay */}
                      </div>{/* /.item */}
                      </a>
                    </div>{/* /.col */}
                    <div className="col-sm-4">
                    <a href="https://github.com/bridgetbaksa/Bitcoin-Converter-Flutter" target="_blank" rel="noopener noreferrer">
                    <div className="item">
                        <img src={bc} alt={"portfolio image"} />
                        <div className="isotope-overlay">
                            Bitcoin Converter
                        </div>{/* /.isotope-overlay */}
                      </div>{/* /.item */}
                      </a>
                    </div>{/* /.col */}
                  </div>{/* /.row */}
                </div>{/*/.isotope*/}
              </div>{/*/.gallery-content*/}
            </div>{/*/.container*/}
        </section>{/*/.portfolio*/}
        {/*portfolio end */}
        {/*clients start */}
      <section id="clients" className="clients">
        <div className="section-heading text-center">
          <h2>Awards & Publications</h2>
        </div>
        <div className="container">
          <div className="clients-content">
          <div className="clients-area">
            <OwlCarousel
              className="owl-theme"
              loop="true"
              items={3}
              nav="true"
              >
              <a href="https://honors.libraries.psu.edu/catalog/5811bmb5858" target="_blank" rel="noopener noreferrer">
              <div className="item">
              <img src={thesis} alt="brand-image" />
                <div className="overlay">
                  Research Thesis
                </div>
              </div>{/*/.item*/}
              </a>
              <a href="https://youtu.be/c7UAIA-VI9o" target="_blank" rel="noopener noreferrer">
              <div className="item">
                <img src={speech} alt="brand-image" />
                  <div className="overlay">
                    Valedictorian Speech
                  </div>
              </div>{/*/.item*/}
              </a>
              <a href="https://news.psu.edu/story/571021/2019/04/24/academics/schreyer-scholars-honored-research-penn-state-berks?utm_source=newswire&utm_medium=email&utm_term=571138_HTML&utm_content=04-25-2019-10-04&utm_campaign=berks%20newswire" target="_blank" rel="noopener noreferrer">
              <div className="item">
              <img src={shc} alt="brand-image" />
              <div className="overlay">
                  Schreyer Scholar
                </div>
              </div>{/*/.item*/}
              </a>
              <a href="https://news.psu.edu/story/571041/2019/04/24/academics/berks-opened-door-world-opportunities-ist-student?fbclid=IwAR09m5v22kKBHhPUIOHfxu6m35nshbW6eMBFtA59xdgKq1aLxmtxDcxQd1c" target="_blank" rel="noopener noreferrer">
              <div className="item">
              <img src={bks} alt="brand-image" />
              <div className="overlay">
                  PSU News
                </div>
              </div>{/*/.item*/}
              </a>
              <a href="https://berks.psu.edu/story/12721/2019/08/02/scholastic-awards-ceremony-honors-academic-excellence" target="_blank" rel="noopener noreferrer">
              <div className="item">
              <img src={sac} alt="brand-image" />
              <div className="overlay">
                  Scholastic Awards
                </div>
              </div>{/*/.item*/}
              </a>
              <a href="https://news.psu.edu/story/517039/2018/04/18/academics/two-penn-state-berks-students-receive-2018-erickson-discovery" target="_blank" rel="noopener noreferrer">
              <div className="item">
              <img src={edg} alt="brand-image" />
              <div className="overlay">
                  Erickson Grant
                </div>
              </div>{/*/.item*/}
              </a>
              <a href="https://hazleton.psu.edu/story/3493/2017/05/05/commencement-2017-held-penn-state-hazleton" target="_blank" rel="noopener noreferrer">
              <div className="item">
              <img src={sa} alt="brand-image" />
              <div className="overlay">
                  Scholars Award
                </div>
              </div>{/*/.item*/}
              </a>
              <a href="https://hazleton.psu.edu/photo/3572/2017/05/09/2017-scholars-lion-award" target="_blank" rel="noopener noreferrer">
              <div className="item">
              <img src={ls} alt="brand-image" />
              <div className="overlay">
                  Scholar's Lion
                </div>
              </div>{/*/.item*/}
              </a>
              <a href="https://berks.psu.edu/story/7616/2018/04/11/penn-state-berks-scholastic-awards-ceremony-recognizes-academic-excellence" target="_blank" rel="noopener noreferrer">
              <div className="item">
              <img src={ka} alt="brand-image" />
              <div className="overlay">
                  Kostos Award
                </div>
              </div>{/*/.item*/}
              </a>
              </OwlCarousel>
          </div>{/*/.container*/}
        </div>{/*/.clients-area*/}
        </div>{/*/.clients-content*/}
      </section>{/*/.clients*/}
      {/*/.clients end*/}
        {/*contact start */}
        <section id="contact" className="contact">
          <div className="section-heading text-center">
            <h2>contact me</h2>
          </div>
          <div className="container">
            <div className="contact-content">
              <div className="row">
                <div className="col-md-offset-1 col-md-5 col-sm-6">
                  <div className="single-contact-box">
                    <div className="contact-form">
                      <form>
                        <div className="row">
                          <div className="col-sm-6 col-xs-12">
                            <div className="form-group">
                              <input type="text" className="form-control" id="name" placeholder="Name*" name="name" />
                            </div>{/*/.form-group*/}
                          </div>{/*/.col*/}
                          <div className="col-sm-6 col-xs-12">
                            <div className="form-group">
                              <input type="email" className="form-control" id="email" placeholder="Email*" name="email" />
                            </div>{/*/.form-group*/}
                          </div>{/*/.col*/}
                        </div>{/*/.row*/}
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <input type="text" className="form-control" id="subject" placeholder="Subject" name="subject" />
                            </div>{/*/.form-group*/}
                          </div>{/*/.col*/}
                        </div>{/*/.row*/}
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <textarea className="form-control" rows={8} id="comment" placeholder="Message" defaultValue={""} />
                            </div>{/*/.form-group*/}
                          </div>{/*/.col*/}
                        </div>{/*/.row*/}
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="single-contact-btn">
                              <a className="contact-btn" href="#" role="button">submit</a>
                            </div>{/*/.single-single-contact-btn*/}
                          </div>{/*/.col*/}
                        </div>{/*/.row*/}
                      </form>{/*/form*/}
                    </div>{/*/.contact-form*/}
                  </div>{/*/.single-contact-box*/}
                </div>{/*/.col*/}
                <div className="col-md-offset-1 col-md-5 col-sm-6">
                  <div className="single-contact-box">
                    <div className="contact-adress">
                      <div className="contact-add-head">
                        <h3>Bridget Baksa</h3>
                        <p>Full Stack Software Engineer</p>
                      </div>
                      <div className="contact-add-info">
                        <div className="single-contact-add-info">
                          <h3>phone</h3>
                          <p>(570)-861-0201</p>
                        </div>
                        <div className="single-contact-add-info">
                          <h3>email</h3>
                          <p>bridget.baksa@gmail.com</p>
                        </div>
                      </div>
                    </div>{/*/.contact-adress*/}
                    <div className="hm-foot-icon">
                      <ul>
                        <li><a href="https://www.facebook.com/BridgetBaksa" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a></li>{/*/li*/}
                        <li><a href="https://www.instagram.com/bridgetbaksa/?hl=en"target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a></li>{/*/li*/}
                        <li><a href="https://www.linkedin.com/in/bridgetbaksa/"target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>{/*/li*/}
                        <li><a href="https://github.com/bridgetbaksa"target="_blank" rel="noopener noreferrer"><i className="fa fa-github" /></a></li>{/*/li*/}
                      </ul>{/*/ul*/}
                    </div>{/*/.hm-foot-icon*/}
                  </div>{/*/.single-contact-box*/}
                </div>{/*/.col*/}
              </div>{/*/.row*/}
            </div>{/*/.contact-content*/}
          </div>{/*/.container*/}
        </section>{/*/.contact*/}
        {/*contact end */}
        {/*footer-copyright start*/}
        <footer id="footer-copyright" className="footer-copyright">
          <div className="container">
            <div className="hm-footer-copyright text-center">
              <p>
                © copyright 2020 Bridget Baksa.
              </p>{/*/p*/}
            </div>{/*/.text-center*/}
          </div>{/*/.container*/}
          <div id="scroll-Top">
            <div className="return-to-top">
              <i className="fa fa-angle-up " id="scroll-top" />
            </div>
          </div>{/*/.scroll-Top*/}
        </footer>
      </div>
    );
};
}

export default App;

/*<div className="col-sm-4">
<div className="item">
    <img src={thesis} alt={"thesis image"} />
    <div className="isotope-overlay">
      <a href="https://honors.libraries.psu.edu/catalog/5811bmb5858" target="_blank" rel="noopener noreferrer">
        Research Thesis
      </a>
    </div>{/* /.isotope-overlay }
  </div>{/* /.item }
</div>{/* /.col }*/