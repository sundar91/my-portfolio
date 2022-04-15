import { faAward, faFolder, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Profile from '../../assets/me-about.jpg';

import './about.scss';

const About = () => {
  return (
    <section id="about"> 
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <img src={Profile} alt="me"></img>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FontAwesomeIcon icon={faAward} className="about__icon"></FontAwesomeIcon>
              <h5>Experience</h5>
              <small>8+ Years Working</small>
            </article>
            <article className='about__card'>
              <FontAwesomeIcon icon={faUsers} className="about__icon"></FontAwesomeIcon>
              <h5>Clients</h5>
              <small>5 Wordwide</small>
            </article>
            <article className='about__card'>
              <FontAwesomeIcon icon={faFolder} className="about__icon"></FontAwesomeIcon>
              <h5>Projects</h5>
              <small>6 completed</small>
            </article>
          </div>

          <p>
            I am an experienced professional in the development of web-based applications using technologies such as .NET Core, .NET Framework, C#, ASP.NET MVC, REST Services, Web API, etc. I also have experience in requirement gathering, design, development, and deployment of software products. I offers expertise in agile methodology across energy and utilities domains.
          </p>

          <p>
            
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About