import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

import './footer.scss'
import logo from '../../assets/logo.png'
const Footer = () =>
{
  return (
    <footer>
      <a href='#' className='footer__logo'>
        <img src={logo} alt="logo"></img>
      </a>
      <ul className='permalinks'>
        <li> <a href='#'>Home</a></li>
        <li> <a href='#about'>About</a></li>
        <li> <a href='#skills'>Skills</a></li>
        <li> <a href='#certifications'>Certifications</a></li>
        <li> <a href='#workexperience'>Experience</a></li>
        <li> <a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://instagram.com/thesundarsingh' target={'_blank'} rel="noreferrer">
          <FiInstagram></FiInstagram>
        </a>
        <a href='https://twitter.com/thesundarsingh' target='_blank' rel="noreferrer">
          <IoLogoTwitter></IoLogoTwitter>
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Sundar</small>
      </div>
    </footer>
  )
}

export default Footer;