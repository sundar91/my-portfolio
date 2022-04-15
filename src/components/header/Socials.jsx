import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Socials() {
  return (
    <div className='header__socials'>
        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/thesundarsingh/'>
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
        <a target="_blank" rel="noreferrer" href='https://github.com/sundar91'>
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
        <a target="_blank" rel="noreferrer" href='skype:live:sundar.pharswan'>
            <FontAwesomeIcon icon={faSkype}></FontAwesomeIcon>
        </a>
    </div>
  )
}

export default Socials