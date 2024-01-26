import React from 'react'
import { Routes,Route, NavLink } from 'react-router-dom'
import Navbar from '../SubComponents/Navbar'
import Section from '../SubComponents/Section'
import Slider from '../SubComponents/Slider'
import Footer from '../SubComponents/Footer'
import img1 from "../assets/img/artificial-intelligence-3382507_1280.jpg"
import Cards from '../SubComponents/Cards'

const Home = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<Navbar />}/>
   </Routes>
   <Routes>
   <Route path="/" element={<Section />}/>
   </Routes>
  <div className="container">
    <h1 className='cource'>Cources</h1>
  <Routes>
    <Route path='/' element={<Cards/>}/>
   </Routes>
  </div>
   <Routes>
   <Route path="/" element={<Footer />}/>
   </Routes>
   </>
  )
}

export default Home