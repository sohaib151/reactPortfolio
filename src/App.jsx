import React from 'react'
import Header from './components/header/Header'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/porfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App