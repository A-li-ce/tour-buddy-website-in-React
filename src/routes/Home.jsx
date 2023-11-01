import React from 'react'
import Hero from '../componenets/Hero/Hero'
import Navbar from '../componenets/Navbar/Navbar'
import image1 from '../componenets/assets/towerr.jpeg'
import Destination from '../componenets/Destination/Destination'
import Trip from '../componenets/Trip/Trip'
import Footer from '../componenets/Footer/Footer'
function Home() {
  return (
    <>
        <Navbar/>
        <Hero 
          cName = "hero"
          heroImg= {image1}
          textCls = "hero-text"
          title = "Your Jounery Your Story"
          text = "Choose Your Favourite Destination"
          btnText = "Travel Plan"
          url = "/"
          btnCls = "show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
    </>
  )
}

export default Home
