import logo from './logo.svg';
import "./styles/styles.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUser,faBriefcase,faNewspaper,faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';

function App() {

  const sections = document.querySelectorAll('.section');
  const sectBtns = document.querySelectorAll('.controls');
  const sectBtn = document.querySelectorAll('.control');
  const allSections = document.querySelectorAll('.main-content');

  // function PageTransition() {

  //   //Button click active class
  //   for(let i=0; i<sectBtn.length; i++) {
  //     sectBtn[i].addEventListener('click',(event) => {
  //       let currentBtn = document.querySelectorAll('.active-btn');
  //       currentBtn[0].classList = currentBtn[0].className.replace ('active-btn', '');
  //       this.className += 'active-btn';
  //     })
  //   }
  // }

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
