import React, { useState } from "react";
import { toast } from "react-toastify";

const GetInTouch = () => {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const sendToWhatsapp = () => {
    const whatsappMessage = `Name: ${name}%0ALastName: ${lastName}0%AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    
    if(name===''){
      toast.error('write your name!')
    }else
    if(lastName===''){
      toast.error('write your lastname!')
    }else
    if(email===''){
      toast.error('write your email!')
    }else
    if(phone===''){
      toast.error('write your Number!')
    }else{

      window.open(`https://wa.me/923229672054?text=${whatsappMessage}`, "_blank");
    }
    
    
  };
  return (
    <div id="getintouch" className='flex flex-col items-center gap-5 sm:gap-10 pb-5 sm:pb-10'>
      <h1 className='font-semibold text-2xl sm:text-4xl md:text-5xl '>
        Contact me
      </h1>
      <div className='flex flex-col justify-center items-center gap-5 sm:gap-10'>
        <div className='flex flex-row max-[400px]:flex-col items-center gap-5 sm:gap-10 w-full'>
          <input
            className='border-b border-gray-600 py-1 outline-none min-[400px]:w-[25vw] w-[70vw]  min-[400px]:min-w-[162px]'
            type='text'
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='border-b border-gray-600 py-1 outline-none min-[400px]:w-[25vw] w-[70vw]  min-[400px]:min-w-[162px]'
            type='text'
            placeholder='Last Name'
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='flex flex-row max-[400px]:flex-col items-center gap-5 sm:gap-10 w-[70]'>
          <input
            className='border-b border-gray-600 py-1 outline-none min-[400px]:w-[25vw] w-[70vw]  min-[400px]:min-w-[162px]'
            type='Email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='border-b border-gray-600 py-1 outline-none min-[400px]:w-[25vw] w-[70vw]  min-[400px]:min-w-[162px] no-spinner'
            type='number'
            placeholder='WhatsApp Number'
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <textarea
          placeholder='Message'
          className='border px-2 border-gray-600 py-1 outline-none w-full resize-none h-20 sm:h-50'
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button onClick={sendToWhatsapp} className='w-35 border-gray-400 border text-white px-3 py-2 bg-green-700 hover:bg-[#212121] transition-all ease-in cursor-pointer text-center'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default GetInTouch;
