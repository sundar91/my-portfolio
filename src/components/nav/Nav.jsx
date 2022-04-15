import { faBook, faCertificate, faContactCard, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

import './nav.scss';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href='#' 
      className= {activeNav === "#" ? 'active': ''}
      onClick={()=> setActiveNav('#')}>
        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
      </a>
      <a href='#about' 
      className= {activeNav === "#about" ? 'active': ''}
      onClick={()=> setActiveNav('#about')}>
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
      </a>
      <a href='#experience'
       className= {activeNav === "#experience" ? 'active': ''}
       onClick={()=> setActiveNav('#experience')}>
        <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
      </a>
      <a href='#certifications'  
      className= {activeNav === "#certifications" ? 'active': ''}
      onClick={()=> setActiveNav('#certifications')}>
        <FontAwesomeIcon icon={faCertificate}></FontAwesomeIcon>
      </a>
      <a href='#contact' 
      className= {activeNav === "#contact" ? 'active': ''}
      onClick={()=> setActiveNav('#contact')}>
        <FontAwesomeIcon icon={faContactCard}></FontAwesomeIcon>
      </a>
    </nav>
  )
}

export default Nav