import React from 'react'

const Home = () => {
  return (
    <div className='h-auto sm:h-[90vh] sm:min-h-[500px]'>
      <div className='h-full mt-10 max-[400px]:mt-5 sm:mt-0 flex w-full items-center justify-between flex-col-reverse sm:flex-row'>
        <div className='w-full sm:w-[50%] flex justify-center sm:items-start flex-col gap-3 pl-[5vw] mt-10 max-[400px]:mt-5 sm:mt-0'>
          <h1 className='text-2xl sm:text-4xl md:text-5xl font-semibold '>Hi, I am<br />
          Jawad Khan</h1>
          <p className='text-gray-500'>Frontend Developer</p>
          <div className='flex max-[300px]:flex-col gap-3 font-semibold'>
            <button className='w-35 bg-green-700 border-gray-400 border px-3 py-2 cursor-pointer hover:bg-[#212121] transition-all ease-in'>Look My CV</button>
            <button className='w-35 border-gray-400 border px-3 py-2 hover:bg-green-700 transition-all ease-in cursor-pointer'>GitHub</button>
          </div>
        </div>
      <div className='w-[50%] flex justify-center'>
        <img className='w-[30vw] rounded-[50%] border-5 border-gray-400' src="/jawad-2.png"/>
      </div>
      </div>
    </div>
  )
}

export default Home
