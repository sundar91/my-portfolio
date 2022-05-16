import React from 'react'
// import Swiper core and required modules

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './workexperience.scss'

const mywork = [
  {
    company: 'NAGARRO',
    position: 'Staff Engineer',
    years: 'Mar 2019 - Present',
    responsibilities: [
      'Use my extensive experience with front end development to define the structure and components for the project, making sure they are reusable.',
      'Keep the code quality high reviewing code from other developers and suggesting improvements.',
      'Decoupling of applications by implementing web hooks and integrating with multiple application.',
      // 'Interact with the designer to suggest changes and to make sure the view he has about the design is translated into actual functionality.',
      'Gathering requirements and work with stakeholders directly for technical changes.'
    ],
    technologies: ['Visual Studio 2019', 'Azure DevOps', 'React', '.NET 5.0', 'C#', 'CQRS', 'Javascript', 'GIT', 'SQL Server']
  },
  {
    company: 'FIDELITY INFORMATION SERVICES (FIS)',
    position: 'Senior Software Engineer',
    years: 'Oct 2016 - Feb 2019',
    responsibilities: [
      'Develop web applications based on .NET Core 2.0 and building usable components.',
      'Refined and consolidated several existing applications, including listing and mortgage services.',
      'Delivered new or enhanced developments.',
      'Designed and updated layouts to meet usability and performance requirements.',
      'Handled end-to-end development on various modules (UI and server side).',
      'Building reusable components and front-end libraries.'
    ],
    technologies: ['Visual Studio 2017', '.NET Core 2.0', 'Azure DevOps', 'ASP .NET MVC', 'Javascript', 'GIT', 'C#', 'SQL Server']
  },

  {
    company: 'SMARTDATA ENTERPRISES LTD',
    position: 'Senior Associate',
    years: 'July 2013 - Oct 2016',
    responsibilities: [
      'Developed architecture and application modules. Analysis of data flow of application.',
      'Creating analytical dashboard using Angular JS and Google analytics which include various reports like multi-channel funnels reports.',
      'Build infrastructure to handle thousands of products in inventory system.',
      'Significantly improved performance of inventory reports.',
      'Developed client side architecture of POS application.',
    ],
    technologies: ['Visual Studio 2013', '.NET Framework', 'C#', 'ASP.NET MVC', 'Javascript', 'Angular JS', 'TFS', 'Tortoise SVN', 'SQL Server', 'SSRS']
  },

]
const WorkExperience = () =>
{
  return (
    <section id="workexperience">
      <h5>My professional</h5>
      <h2>Work Experience</h2>
      <div className="container workexperience__container pg-section">
        <Swiper navigation={true}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }} >
          {
            mywork.map((work, index) =>
            {
              return <SwiperSlide key={index}>
                <div className="work__experience">
                  <h5>{work.position}</h5>
                  <h3>{work.company}
                    <span className='work__experience_duration'>{work.years}</span>
                  </h3>
                  <div className='work__experience_details'>
                    <ul className='work__experience__responsibilities'>
                      {work.responsibilities.map((task, indx) =>
                      {
                        return <li key={indx}> {task} </li>
                      })}
                    </ul>
                    <div className='project__technologies'>
                      {work.technologies.map((tech, indx) =>
                      {
                        return <span key={indx}> {tech} </span>
                      })}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            })
          }

        </Swiper>
      </div>
    </section>
  )
}

export default WorkExperience