import React from 'react'

const Projects = () => {
  const array = [
    {
      projectname: "Ecommerce-Website",
      text: "This is an website to sells any type of clothes.",
      link: "https://ecommerce-website-phi-orcin.vercel.app/",
      img: "ai-chat.png"
    },
    {
      projectname: "Quez-App",
      text: "I created a quiz app for questions and multiple-choice quizzes.",
      link: "https://quez-app-tau.vercel.app/",
      img: "quezapp.png"
    },
    {
      projectname: "Landing-Page",
      text: "I made an interactive and responsive landing page.",
      link: "https://landing-page-rho-one-77.vercel.app/",
      img: "landingpage.png"
    },
    {
      projectname: "Insightpod-Website",
      text: "This is a website that will not open without login",
      link: "https://my-website-mu-bay-46.vercel.app",
      img: "insightpod1.png"
    },
    {
      projectname: "Dice-Game",
      text: "This is a website in which you can play dice game",
      link: "https://dice-game-taupe-eight.vercel.app/",
      img: "dice.png"
    },
  ]
  return (
    <div id='projects' className='py-5 sm:py-10'>
      <h1 className='font-semibold text-2xl sm:text-4xl md:text-5xl text-center'>Projects</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 sm:mt-10 lg:grid-cols-3'>
        {
          array.map((item, index)=>(
              <div key={index} className='flex p-3 bg-[#3b3b3b8c] rounded-2xl gap-2 h-[45vw] sm:h-[30vw] lg:h-[20vw] items-center'>
          <img className='w-[28vw] sm:w-[20vw] lg:w-[13vw]  h-full border border-gray-500 rounded-2xl' src={`${item.img}`} alt="img" />
          <div className='flex flex-col gap-1 min-[300px]:gap-[3vw] lg:gap-[1vw] text-xs sm:text-sm md:text-base justify-center ml-0 min-[300px]:ml-[10vw] sm:ml-[2vw] lg:ml-[1vw]'>
          <h1 className='font-bold text-green-600'>{item.projectname}</h1>
          <p>{item.text}</p>
          <a href={`${item.link}`} className='p-1 rounded-[5px] bg-green-600 text-center' target='_blank' rel="noopener noreferrer">View Project</a>
          </div>
        </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects
