import React from 'react'

import './workexperience.scss'

const WorkExperience = () => {
  return (
    <section id="workexperience">
        <h5>My credible</h5>
        <h2>Work Experience</h2>
        <div className="container workexperience__container">
            <article className="project">
                <h3>Join Our Network</h3>
                <div className='project__info'>
                  <smal className="project__overview">
                    Project involved the development of new web application where different vendor types of can register services provided by them and client used to verify them. 
                    Different screens have been created in MVC using the latest .net core framework.
                  </smal>
                  <div className='project__technologies'>
                    <span>Visual Studio 2017</span>
                    <span>.NET Core 2.0</span>
                    <span>C#</span> 
                    <span>ASP .NET MVC</span>
                    <span>JavaScript</span>
                    <span>GIT</span> 
                    <span>Azure DevOps</span>
                    <span>SQL Server</span>
                  </div>
                  <ul className='project__responsibilities'>
                    <li>	Handled end-to-end development on various modules (UI and server side) </li> 
                    <li>	Building reusable components and front-end libraries for future use.</li> 
                    <li>	Implemented the functionality and involved in scrum.</li> 
                  </ul>
                </div>
            </article>
        </div>
    </section>
  )
}

export default WorkExperience