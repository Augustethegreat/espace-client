import React from 'react'
import slidepic from "../Sammy/img/slidePic.jpg"
import slidepic2 from "../Sammy/img/slidepic2.jpeg"
import slidepic3 from "../Sammy/img/slidepic3.jpg"
import {ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
function Slides() {
  return (
    <div className='  '>
        <p className='text-center font-extrabold text-[50px] pt-[70px] text-[#414141]'>Products</p>
        <div className='flex mx-0 items-center justify-center pt-[80px] gap-x-10 px-[33%]'>
        <div className='text-black bg-white pb-3 shadow-xl shadow-[#a2a2a2] rounded-[10px] '>
            <img src={slidepic3.src} className='w-[350px] h-[340px]  rounded-t-[10px]' alt="" />
            <p className='py-7 text-center text-[20px] w-[330px] px-[5px] font-medium'>Successfull IFAT Show In Munich Early June 2022</p>
        </div>
        <div className='text-black bg-white pb-3 shadow-xl shadow-[#a2a2a2] rounded-[10px] '>
            <img src={slidepic.src} className='w-[350px] h-[340px]  rounded-t-[10px]' alt="" />
            <p className='py-7 text-center text-[20px] w-[330px] px-[5px] font-medium'>PYDRO is finalist of the Future Water Hack !</p>
        </div>
        <div className='text-black bg-white pb-3 shadow-xl shadow-[#a2a2a2] rounded-[10px] '>
            <img src={slidepic2.src} className='w-[350px] h-[340px]  rounded-t-[10px]' alt="" />
            <p className='py-7 text-center text-[20px] w-[330px] px-[5px] font-medium'>Our CEO Was Named An "MIT Innovator Under 35"</p>
        </div>
        </div>

        <div className='md:max-w-screen-lg flex mt-[-160px] px-[150px] space-x-[80%] md:space-x-[80%] lg:space-x-[77%]'>
       <button
          className="absolute  md:mt-[-130px]  bg-black bg-opacity-50 px-0 py-2 rounded-full"
        
        >
          <ChevronLeftIcon className="h-6 w-11 text-white " aria-hidden="true" />
        </button>
        <button
          className="absolute  md:mt-[-130px]  bg-black bg-opacity-50 px-0 py-2 rounded-full"
          
        >
          <ChevronRightIcon className="h-6 w-11 text-white " aria-hidden="true" />
        </button>
       </div>
    </div>
  )
}

export default Slides