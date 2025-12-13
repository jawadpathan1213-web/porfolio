import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  return (
    <div className='flex justify-between py-3 sm:py-7 items-center '>
      <h1 className='text-2xl sm:text-4xl md:text-5xl font-semibold'>Jawad</h1>
      <ul className=' gap-[5vw] font-mono text-gray-200 font-semibold max-[400px]:hidden flex'>
        <a  href='#about' className='border-b border-[#212121] hover:border-[#5a5757] hover:text-[#857f7f] cursor-pointer transition-all ease-in'>About me</a>
        <a  href='#skills' className='border-b border-[#212121] hover:border-[#5a5757] hover:text-[#857f7f] cursor-pointer transition-all ease-in'>Skills</a>
        <a href='#projects'  className='border-b border-[#212121] hover:border-[#5a5757] hover:text-[#857f7f] cursor-pointer transition-all ease-in'>Projects</a>
        <a href='#getintouch'  className='border-b border-[#212121] hover:border-[#5a5757] hover:text-[#857f7f] cursor-pointer transition-all ease-in'>Contat me</a>
      </ul>
      <div className='max-[400px]:flex hidden fixed right-5 top-6'>
        <FiMenu onClick={()=>setNav(!nav)} className='text-xl absolute right-3 cursor-pointer'/> 
       {nav ? <ul className='flex flex-col p-3 bg-[#3b3b3b] rounded-xl gap-4 absolute right-3 top-7 w-30'>
            <a onClick={()=>setNav(!nav)} href="#about">About me</a>
            <a onClick={()=>setNav(!nav)} href="#skills">Skills</a>
            <a onClick={()=>setNav(!nav)} href="#projects">Projects</a>
            <a onClick={()=>setNav(!nav)} href='#getintouch'>Contact me</a>
        </ul>:null}
      </div>
    </div>
  )
}

export default Navbar
