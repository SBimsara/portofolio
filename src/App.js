import logo from './logo.svg';
import "./styles/styles.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faBriefcase, faNewspaper, faEnvelopeOpen, faDownload, faMapMarkerAlt, faEnvelope , faMobilePhone, faGlobeAfrica} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';

import myImage from './assets/images/me.png';
import canCrusher from './assets/images/can_crusher.jpeg';

import { saveAs } from 'file-saver';
import cvPDF from './assets/Sithira_Bimsara.pdf';


function App() {


  //Button click active class
  function handleToggleIcon(event) {
    const clickedControl = event.target;
    const controls = document.querySelectorAll('.control');
    controls.forEach((control) => {
      if (control !== clickedControl) {
        control.classList.remove('active-btn');
      }
    });
    clickedControl.classList.add('active-btn');
  }

  //Section Active class
  function handleToggleSection(event) {
    const clickedSectionId = event.target.getAttribute('data-id');

    const clickedSection = document.getElementById(clickedSectionId);


    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      if (section !== clickedSection) {
        section.classList.remove('active');
      }
    });
    clickedSection.classList.add('active');
  }

    const handleCVClick = () => {
      saveAs(cvPDF, 'Sithira_Bimsara.pdf');
    }

  return (
    <div className="main-content">
      <header className='section sec1 header active' id='home'>
        <div className='header-content'>
          <div className='left-header'>
            <div className='h-shape'></div>
            <div className='image'>
              <img src={myImage} alt='' />
            </div>

          </div>

          <div className='right-header'>
            <h1 className='name'>
              Hi, I'm <span>Sithira Bimsara.</span>
              <br />An University Undergraduate
            </h1>
            <p>I am an IT university undergraduate with a passion for technology and a solid foundation in programming, database management, network security, and web development.
              I am a continuous learner who keeps up to date with the latest trends in the field.
              My portfolio showcases my technical skills and creativity, and I look forward to discussing my experience and achievements with you.</p>

            <div className='btn-con'>
              <a href='#' className='main-btn' onClick={handleCVClick}>
                <span className='btn-text'>Download CV</span>
                <span className='btn-icon'><i><FontAwesomeIcon icon={faDownload} /></i></span>
              </a>
            </div>

          </div>
        </div>
      </header>
      <main>

        <section className='section sec2 about' id='about'>
          <div className='main-title'>
            <h2>About <span>me</span><span className='bg-text'>my status</span></h2>

          </div>
          <div className='about-container'>
            <div className='left-about'>
              <h4>Information About me</h4>
              <p>I am an IT university undergraduate with a passion for technology and a solid foundation in programming, 
                database management, network security, and web development. 
                I am a continuous learner who keeps up to date with the latest trends in the field. <br /> <br /> 
                Overall, my diverse skillset, 
                passion for learning, and hands-on experience make me a strong candidate for any IT-related role, 
                and I look forward to discussing my achievements and experience with you.</p>
              <div className='btn-con'>
                <a href='#' className='main-btn' onClick={handleCVClick}>
                  <span className='btn-text'>Download CV</span>
                  <span className='btn-icon'><i><FontAwesomeIcon icon={faDownload} /></i></span>
                </a>
              </div>
            </div>
            <div className='right-about'>
              <div className='about-item'>
                <div className='abt-text'>
                  <p className='large-text'>2+</p>
                  <p className='small-text'>Projects <br />Completed</p>
                </div>
              </div>

              <div className='about-item'>
                <div className='abt-text'>
                  <p className='large-text'>2+</p>
                  <p className='small-text'>Projects <br />Completed</p>
                </div>
              </div>

              <div className='about-item'>
                <div className='abt-text'>
                  <p className='large-text'>2+</p>
                  <p className='small-text'>Projects <br />Completed</p>
                </div>
              </div>

              <div className='about-item'>
                <div className='abt-text'>
                  <p className='large-text'>2+</p>
                  <p className='small-text'>Projects <br />Completed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className='about-stats'>
            <h4 className='stat-title'>My Skills</h4>
            <div className='progress-bars'>
              <div className='progress-bar'>
                <p className='prog-title'>html5</p>
                <div className='progress-con'>
                  <p className='prog-text'>75%</p>
                  <div className='progress'>
                    <span className='html'></span>
                  </div>
                </div>
              </div>

              <div className='progress-bar'>
                <p className='prog-title'>css3</p>
                <div className='progress-con'>
                  <p className='prog-text'>75%</p>
                  <div className='progress'>
                    <span className='css'></span>
                  </div>
                </div>
              </div>

              <div className='progress-bar'>
                <p className='prog-title'>javascript</p>
                <div className='progress-con'>
                  <p className='prog-text'>55%</p>
                  <div className='progress'>
                    <span className='js'></span>
                  </div>
                </div>
              </div>

              <div className='progress-bar'>
                <p className='prog-title'>react js</p>
                <div className='progress-con'>
                  <p className='prog-text'>60%</p>
                  <div className='progress'>
                    <span className='reactjs'></span>
                  </div>
                </div>
              </div>

              <div className='progress-bar'>
                <p className='prog-title'>mySQL</p>
                <div className='progress-con'>
                  <p className='prog-text'>85%</p>
                  <div className='progress'>
                    <span className='sql'></span>
                  </div>
                </div>
              </div>
              <br/>
              <div className='progress-bar'>
                <p className='prog-title'>c</p>
                <div className='progress-con'>
                  <p className='prog-text'>75%</p>
                  <div className='progress'>
                    <span className='c'></span>
                  </div>
                </div>
              </div>

              <div className='progress-bar'>
                <p className='prog-title'>java</p>
                <div className='progress-con'>
                  <p className='prog-text'>75%</p>
                  <div className='progress'>
                    <span className='java'></span>
                  </div>
                </div>
              </div>

              <div className='progress-bar'>
                <p className='prog-title'>python</p>
                <div className='progress-con'>
                  <p className='prog-text'>60%</p>
                  <div className='progress'>
                    <span className='py'></span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <h4 className='stat-title'>My Timeline</h4>
          <div className='timeline'>
            

            <div className='timeline-item'>
              <div className='t1-icon'>
                <i><FontAwesomeIcon icon={faBriefcase} /></i>
              </div>
              <p className='t1-duration'>2021 - Present</p>
              <h5>BSc ( Hons ) in Information Technology <br /><br /><span>University of Moratuwa</span></h5>
              <p>

              </p>
            </div>

            <div className='timeline-item'>
              <div className='t1-icon'>
                <i><FontAwesomeIcon icon={faBriefcase} /></i>
              </div>
              <p className='t1-duration'>2016 - 2019</p>
              <h5>G.C.E. Advanced Level <br /><br /><span>Thelijjawila Central College</span></h5>
              <p>

              </p>
            </div>

            <div className='timeline-item'>
              <div className='t1-icon'>
                <i><FontAwesomeIcon icon={faBriefcase} /></i>
              </div>
              <p className='t1-duration'>2010 - 2015</p>
              <h5>G.C.E. Ordinary Level <br /><br /><span>Thelijjawila Central College</span></h5>
              <p>

              </p>
            </div>
            

          </div>
        </section>
        <section className='section sec3 portfolio' id='portfolio'>
          <div className='main-title'>
            <h2>My <span>Portfolio</span><span className='bg-text'>my work</span></h2>

          </div>
          <p className='port-text'>
          Here is some of my work that I've done in various programming languages.
          </p>
          <div className='portfolios'>
            <div className='portfolio-item'>
              <div className='image'>
                <img src={canCrusher} alt='' />
              </div>
              <div className='hover-items'>
                <h3>Project Source</h3>
                <div className='icons'>
                  <a href='#' target='_blank' className='icon'>
                    <i><FontAwesomeIcon icon={faGithub} /></i>
                  </a>
                </div>
              </div>
            </div>

            <div className='portfolio-item'>
              <div className='image'>
                <img src={canCrusher} alt='' />
              </div>
              <div className='hover-items'>
                <h3>Project Source</h3>
                <div className='icons'>
                  <a href='https://github.com/SBimsara/Maximus-Frontend.git' target='_blank' className='icon'>
                    <i><FontAwesomeIcon icon={faGithub} /></i>
                  </a>
                  <a href='https://github.com/SBimsara/Quizz-Backend.git' target='_blank' className='icon'>
                    <i><FontAwesomeIcon icon={faGithub} /></i>
                  </a>
                </div>
              </div>
            </div>


          </div>
        </section>
        <section className='section sec4 blogs' id='blogs'></section>
        <section className='section sec5 contact' id='contact'>
          <div className='contact-container'>
            <div className='main-title'>
              <h2>Contact <span>Me</span><span className='bg-text'>My Contacts</span></h2>
            </div>
            <div className='contact-content-con'>
              <div className='left-contact'>
                <h4>Contact me here</h4>
                <p></p>
                <div className='contact-info'>
                  <div className='contact-item'>
                    <div className='icon'>
                      <i><FontAwesomeIcon icon={faMapMarkerAlt} /></i>
                      Location
                    </div>
                    <p>
                      : Matara, Sri Lanka
                    </p>
                  </div>

                  <div className='contact-item'>
                    <div className='icon'>
                      <i><FontAwesomeIcon icon={faEnvelope} /></i>
                      Email
                    </div>
                    <p>
                      : basnayakesb.20@uom.lk
                    </p>
                  </div>

                  <div className='contact-item'>
                    <div className='icon'>
                      <i><FontAwesomeIcon icon={faMobilePhone} /></i>
                      Mobile Number
                    </div>
                    <p>
                      : 0774405741
                    </p>
                  </div>

                  <div className='contact-item'>
                    <div className='icon'>
                      <i><FontAwesomeIcon icon={faGlobeAfrica} /></i>
                      Languages
                    </div>
                    <p>
                      : Sinhala, English
                    </p>
                  </div>



                </div>
                <div className='contact-icons'>
                  <div className='contact-icon'>
                    
                    <a href='' target='_blank'>
                      <i><FontAwesomeIcon icon={faGithub} /></i>
                    </a>

                    <a href='' target='_blank'>
                      <i><FontAwesomeIcon icon={faFacebookF} /></i>
                    </a>

                    <a href='' target='_blank'>
                      <i><FontAwesomeIcon icon={faLinkedin} /></i>
                    </a>
                    
                  </div>
                </div>
              </div>
              <div className='right-contact'>

                <form action='' className='contact-form'>
                  <div className='input-control i-c-2'>
                    <input type='text' required placeholder='YOUR NAME' />
                    <input type='email' required placeholder='YOUR EMAIL' />
                  </div>

                  <div className='input-control'>
                    <input type='text' required placeholder='ENTER SUBJECT' />
                  </div>

                  <div className='input-control'>
                    <textarea name='' id='' cols='15' rows='8' placeholder='Message Here...'></textarea>
                  </div>

                  <div className='submit-btn'>
                    <a href='' className='main-btn'>
                      <span className='btn-text'>Download CV</span>
                      <span className='btn-icon'><i><FontAwesomeIcon icon={faDownload} /></i></span>
                    </a>
                  </div>


                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      <div className='controls' onClick={(event) => { handleToggleIcon(event); handleToggleSection(event) }}>

        <div className='control control-1 active-btn' data-id='home' >
          <i><FontAwesomeIcon icon={faHome} /></i>
        </div>
        <div className='control control-2' data-id='about' >
          <i><FontAwesomeIcon icon={faUser} /></i>
        </div>
        <div className='control control-3' data-id='portfolio'>
          <i><FontAwesomeIcon icon={faBriefcase} /></i>
        </div>
        <div className='control control-4' data-id='blogs'>
          <i><FontAwesomeIcon icon={faNewspaper} /></i>
        </div>
        <div className='control control-5' data-id='contact'>
          <i><FontAwesomeIcon icon={faEnvelopeOpen} /></i>
        </div>

      </div>

    </div>
  );
}

export default App;
