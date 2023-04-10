import logo from './logo.svg';
import "./styles/styles.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUser,faBriefcase,faNewspaper,faEnvelopeOpen,faDownload } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';

import myImage from './assets/images/me.png'

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

  return (
    <div className="main-content">
      <header className='section sec1 header active' id='home'>
        <div className='header-content'>
          <div className='left-header'>
            <div className='h-shape'></div>
            <div className='image'>
              <img src={myImage} alt=''/>
            </div>

          </div>

          <div className='right-header'>
            <h1 className='name'>
              Hi,I'm <span>Sithira Bimsara</span>
              A University Student
            </h1>
            <p>
            I am an IT university student with a passion for technology and a solid foundation in programming, database management, network security, and web development. 
            I am a continuous learner who keeps up to date with the latest trends in the field. 
            I have experience working on real-world projects and collaborating with others. 
            My portfolio showcases my technical skills and creativity, and I look forward to discussing my experience and achievements with you.
            </p>

            <a href='' className='main-btn'>
              <span className='btn-text'>Download CV</span>
              <span className='btn-icon'><i><FontAwesomeIcon icon={faDownload} /></i></span>
            </a>
          </div>
        </div>  
      </header>
      <main>

        <section className='section sec2 about' id='about'> </section>
        <section className='section sec3 portofolio' id='portofolio'></section>
        <section className='section sec4 blogs' id='blogs'></section>
        <section className='section sec5 contact' id='contact'></section>

      </main>

      <div className='controls' onClick={(event)=> {handleToggleIcon(event);handleToggleSection(event)}}>

        <div className='control control-1 active-btn' data-id= 'home' >
          <i><FontAwesomeIcon icon={faHome} /></i>
        </div>
        <div className='control control-2' data-id= 'about' >
          <i><FontAwesomeIcon icon={faUser} /></i>
        </div>
        <div className='control control-3' data-id= 'portofolio'>
          <i><FontAwesomeIcon icon={faBriefcase} /></i>
        </div>
        <div className='control control-4' data-id= 'blogs'>
          <i><FontAwesomeIcon icon={faNewspaper} /></i>
        </div>
        <div className='control control-5' data-id= 'contact'>
          <i><FontAwesomeIcon icon={faEnvelopeOpen} /></i>
        </div>

      </div>
      
    </div>
  );
}

export default App;
