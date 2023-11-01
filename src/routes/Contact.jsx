import React from 'react'
import Hero from '../componenets/Hero/Hero'
import Navbar from '../componenets/Navbar/Navbar'
import image3 from '../componenets/assets/img8.jpg'
import Footer from '../componenets/Footer/Footer'
import Cont from '../componenets/Contact/Cont'

function Contact() {
  return (
    <>
        <Navbar/>
        <Hero 
          cName = "hero-mid"
          heroImg= {image3}
          textCls = "hero-mid-text"
          title = "Contact Us"
        />
        <Cont/>
        <Footer/>
    </>
  )
}

export default Contact
