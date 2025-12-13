import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import GetInTouch from './components/GetInTouch'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div className='mb-0 px-[5vw] max-[400px]:px-4 max-[550px]:px-8 bg-[#1E1D1D] text-white text-xs sm:text-sm md:text-base '>
      <ToastContainer />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <GetInTouch />
    </div>
  )
}

export default App
