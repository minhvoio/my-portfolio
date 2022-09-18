import './css/_main.css';
import React from 'react'
import Header from './views/Header'
import Nav from './views/Nav'
import About from './views/About'
import Experience from './views/Experience'
import Services from './views/Services'
import Portfolio from './views/Portfolio'
import Testimonial from './views/Testimonial'
import Contact from './views/Contact'
import Footer from './views/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App