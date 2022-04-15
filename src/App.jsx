import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Certifications from './components/certifications/Certifications'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import WorkExperience from './components/workexperience/WorkExperience'

export const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Skills/>
      <Certifications/>
      <WorkExperience />
      <Contact/>
      <Footer/>
    </>
  )
}