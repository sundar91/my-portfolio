import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import { Link } from 'react-scroll';

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

        <li>
          <Link to="home"
            smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about"
            smooth={true}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills"
            smooth={true}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="certifications"
            smooth={true}>
            Certifications
          </Link>
        </li>
        <li>
          <Link to="workexperience"
            smooth={true}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="contact"
            smooth={true}>
            Contact
          </Link>
        </li>
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