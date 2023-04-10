import logo from './logo.svg';
import "./styles/styles.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUser,faBriefcase,faNewspaper,faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="main-content">
      <header className='section sec1 header active'>
    
      </header>
      <main>

        <section className='section sec2 about'> </section>
        <section className='section sec3 portofolio'></section>
        <section className='section sec4 blog'></section>
        <section className='section sec5 contact'></section>

      </main>

      <div className='controls'>

        <div className='control control-1 active-btn' data-id= 'header'>
          <i><FontAwesomeIcon icon={faHome} /></i>
        </div>
        <div className='control control-2' data-id= 'about'>
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
