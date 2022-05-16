import React, { useEffect } from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Certifications from './components/certifications/Certifications'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import WorkExperience from './components/workexperience/WorkExperience'

export const App = () =>
{

  useEffect(() =>
  {
    window.addEventListener('scroll', () =>
    {
      let containers = document.querySelectorAll('.pg-section');
      containers.forEach((container, key) =>
      {
        let windowHeight = window.innerHeight;
        let top = container.getBoundingClientRect().top;
        let topPoint = 150;
        if (topPoint < windowHeight - top)
        {
          container.classList.add("active")
        }
        else
        {
          container.classList.remove("active")
        }
      })
    })
  }, [])
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Certifications />
      <WorkExperience />
      <Contact />
      <Footer />
    </>
  )
}