import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Service from './routes/Service'
import Contact from './routes/Contact'

function App() {
  return (
    <>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/service' element={<Service/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
