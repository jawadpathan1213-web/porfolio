import React from 'react'

const About = () => {
  return (
    <>
    <div id='about'  className='flex items-center flex-col mt-10 max-[400px]:mt-5 sm:mt-0 max-[300px]:gap-2 gap-5 sm:gap-10'>
        <h1 className='font-semibold text-2xl sm:text-4xl md:text-5xl'>About</h1>
        <p className='w-full sm:w-1/2 text-center max-w-[400px] sm:min-w-[600px] max-[450px]:text-justify'>I’m a passionate React Developer focused on building fast, responsive, and user-friendly web applications. I specialize in turning ideas into functional interfaces using modern tools like React, JavaScript, and Tailwind CSS. I enjoy solving real-world problems, writing clean code, and creating smooth user experiences. I constantly learn new technologies to improve my skills and deliver high-quality work. My goal is to build websites that not only look great but also perform flawlessly across all devices.</p>
        
    </div>
    <div className='flex flex-col max-[300px]:gap-2 gap-5 sm:gap-10 items-center mt-10 max-[400px]:mt-5 '>
        <h1 className='text-2xl sm:text-4xl md:text-5xl font-semibold'>what I Do</h1>
        <p className='w-full sm:w-1/2 text-center max-w-[400px] sm:min-w-[600px] max-[450px]:text-justify'>I build modern, responsive, and high-performance web applications using React. I turn UI designs into clean, reusable components and create smooth user experiences with optimized front-end code. I work with APIs, handle state management, and make sure every website I build is fast, secure, and mobile-friendly. Whether it’s a simple landing page or a complete web app, I focus on clean design, pixel-perfect layout, and professional functionality.</p>    
    </div>
    </>
  )
}

export default About