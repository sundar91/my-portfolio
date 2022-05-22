import React from 'react'
import CV from '../../assets/cv.pdf';
import { Link } from 'react-scroll'

function CTA()
{
  return (
    <div className='cta'>
      <a href={CV} target="_blank" rel="noreferrer" className="btn">Download CV</a>
      <Link to='contact'
        className='btn btn-primary'
        spy={true} smooth={true}>
        Let's Talk
      </Link>
    </div>
  )
}

export default CTA;