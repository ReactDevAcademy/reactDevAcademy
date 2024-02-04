import React from 'react'
import Footer from '../../src/SubComponents/Footer'
import Navbar from '../../src/SubComponents/Navbar'
import Section2 from '../../src/SubComponents/Section2'
import Slider from '../../src/SubComponents/Slider'

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Section2 />
      <Footer />
    </>
  )
}

export default Home