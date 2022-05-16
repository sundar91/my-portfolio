import { MdWork, MdHome, MdContactPhone } from 'react-icons/md'
import { FaUserAlt, FaBook, FaCertificate } from 'react-icons/fa'
import React, { useState } from 'react'
import { Link } from 'react-scroll'

import './nav.scss';

const Nav = () =>
{
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <Link to="home"
        activeClass='active'
        spy={true} smooth={true}
        onClick={() => setActiveNav('#')}>
        <MdHome className='nav-icon' />
      </Link>
      <Link to='about'
        spy={true} smooth={true}
        activeClass="active">
        <FaUserAlt className='nav-icon' />
      </Link>
      <Link to='skills'
        activeClass="active"
        spy={true} smooth={true}>
        <FaBook className='nav-icon' />
      </Link>
      <Link to='certifications'
        activeClass='active'
        spy={true} smooth={true}>
        <FaCertificate className='nav-icon' />
      </Link>
      <Link to='workexperience'
        activeClass="active"
        spy={true} smooth={true}>
        <MdWork className='nav-icon' />
      </Link>
      <Link to='contact'
        activeClass='active'
        spy={true} smooth={true}>
        <MdContactPhone className='nav-icon' />
      </Link>
    </nav>
  )
}

export default Nav