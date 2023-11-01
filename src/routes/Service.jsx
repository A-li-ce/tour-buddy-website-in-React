import React from 'react'
import Hero from '../componenets/Hero/Hero'
import Navbar from '../componenets/Navbar/Navbar'
import image4 from '../componenets/assets/sunrise.jpg'
import Footer from '../componenets/Footer/Footer'
import Trip from '../componenets/Trip/Trip'
function Service() {
  return (
    <>
        <Navbar/>
        <Hero 
          cName = "hero-mid"
          heroImg= {image4}
          textCls = "hero-mid-text"
          title = "Service"
        />
        <Trip/>
        <Footer/>
    </>
  )
}

export default Service
