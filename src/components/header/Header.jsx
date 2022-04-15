import React from 'react'
import CTA from './CTA'
import './header.scss'
import ME from '../../assets/me.png'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello <span className="header__wave">👋🏽</span> I'm</h5>
        <h1> Sundar Singh Pharswan </h1>
        <h5 className='text-light'> Fullstack Developer </h5>
        <CTA/>

        <Socials/>

        <div className="me">
          <img src={ME} alt="Sundar"></img>
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header