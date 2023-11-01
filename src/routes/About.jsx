import React from 'react'
import Hero from '../componenets/Hero/Hero'
import Navbar from '../componenets/Navbar/Navbar'
import image2 from '../componenets/assets/img6.jpg'
import Footer from '../componenets/Footer/Footer'
import Abt from '../componenets/About/Abt'
function About() {
  return (
    <>
      <Navbar/>
        <Hero 
          cName = "hero-mid"
          heroImg= {image2}
          textCls = "hero-mid-text"
          title = "About Us"
        />
        <Abt/>
        <Footer/>
    </>
  )
}

export default About
