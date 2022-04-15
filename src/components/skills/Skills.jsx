
import { BsPatchCheckFill } from 'react-icons/bs'
import React from 'react'

import './skills.scss'

const Skills = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon'/>
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon'/>
              <div>
                <h4>CSS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon'/>
              <div>
                <h4>Javascript</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon'/>
              <div>
                <h4>React</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icon'/>
              <div>
                <h4>Angular</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>

        </div>
        <div className="experience__backend">
        <h3> Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details__icon'/>
                <div>
                  <h4>.NET Core</h4>
                  <small>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon'/>
              <div>
                <h4>SQL Server</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon'/>
              <div>
                <h4>Kubernetes</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon'/>
              <div>
                <h4>Docker</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon'/>
              <div>
                <h4>Azure</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon'/>
              <div>
                <h4>Microservices</h4>
                <small>Basic</small>
              </div>
            </article>
           
          </div>
        </div> 
      </div>

    </section>
  )
}

export default Skills