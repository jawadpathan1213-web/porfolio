import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='flex justify-center flex-col'>
      <h1 className='text-2xl sm:text-4xl md:text-5xl font-semibold text-center  max-[400px]:mt-5 mt-10 mb-5 max-[300px]:mb-2 ms:mb-10'>Skills</h1>
      <div className='grid max-[450px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-5'>
        <div className='flex flex-col justify-center gap-4 bg-[#3b3b3b8c] max-[300px]:p-2 p-5 rounded-2xl'>
            <h1 className='font-medium text-xl sm:text-2xl text-green-600 text-center'>FRONT-END SKILLS</h1>
            <p className='text-justify'>I specialize in building clean, modern, and responsive user interfaces using HTML, CSS, and JavaScript. I focus on writing clean code, creating pixel-perfect layouts, and ensuring that websites work smoothly across all devices. My goal is to turn design ideas into fully functional and visually appealing front-end experiences.</p>
        </div>
        <div className='flex flex-col justify-center gap-4 bg-[#3b3b3b8c] p-5 max-[300px]:p-2 rounded-2xl'>
            <h1 className='font-medium text-xl sm:text-2xl text-green-600 text-center'>REACT ECOSYSTEM</h1>
            <p className='text-justify'>I work deeply with the React ecosystem to create dynamic and interactive web applications. I use React Hooks, component-based architecture, and smooth routing to build scalable front-end solutions. I also handle state management, integrate APIs, and optimize performance to deliver fast and efficient user experiences.</p>
        </div>
        <div className='flex flex-col justify-center gap-4 bg-[#3b3b3b8c] p-5 max-[300px]:p-2 rounded-2xl'>
            <h1 className='font-medium text-xl sm:text-2xl text-green-600 text-center'>TOOLS AND PLATFORMS</h1>
            <p className='text-justify'>I use modern development tools like Git, GitHub, VS Code, and NPM to streamline my workflow and maintain clean project structure. I’m comfortable deploying websites on Vercel and Netlify, ensuring reliable hosting, fast loading speeds, and professional results.</p>
        </div>
        <div className='flex flex-col justify-center gap-4 bg-[#3b3b3b8c] p-5 max-[300px]:p-2 rounded-2xl'>
            <h1 className='font-medium text-xl sm:text-2xl text-green-600 text-center'>SOFT SKILLS</h1>
            <p className='text-justify'>Along with technical expertise, I bring strong problem-solving and communication skills to every project. I collaborate effectively, manage time well, and stay focused on delivering high-quality work. I always aim to improve, learn, and adapt to new challenges.</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
