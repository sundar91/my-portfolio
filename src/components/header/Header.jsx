import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import AnimatedLetters from './AnimatedLetters'
import CTA from './CTA'
import './header.scss'
import Socials from './Socials'

const Header = () =>
{
  const name = "Sundar Singh Pharswan".split('');
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() =>
  {
    setTimeout(() =>
    {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <header id="home">
      <div className="container header__container">
        <div className='header-text'>
          <h3>
            <AnimatedLetters className={letterClass} initialIndex={0} letters={"Hello".split('')}></AnimatedLetters>
            <span className="header__wave">👋🏽</span>
            <AnimatedLetters className={letterClass} initialIndex={7} letters={"I'm".split('')}></AnimatedLetters>
          </h3>
          <h1>
            <AnimatedLetters className={letterClass} initialIndex={10} letters={name}></AnimatedLetters>
          </h1>
          <h5 className='text-light role'> Fullstack Developer </h5>
          <CTA />

          {/* <div className="me">
            <img src={ME} alt="Sundar"></img>
          </div> */}

        </div>

        <Socials />
        <Link to="contact"
          className='scroll_down'
          smooth={true}>
          Scroll Down
        </Link>
      </div>
    </header >
  )
}

export default Header